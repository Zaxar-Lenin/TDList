import { Button, Checkbox, List, Modal, Typography } from 'antd';
import React, { FC, useState } from 'react';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useTypedDispatch } from 'store/hooks/useTypedDispatch';
import { deleteTask, updateIsDone } from 'store/slice/taskSlice';
import DisplayModal from 'components/displayModal';

type Props = {
  id: string;
  title: string;
  isDone: boolean;
}

const Task: FC<Props> = ({ id, title, isDone }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useTypedDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  const handleUpdateIsDone = (e: CheckboxChangeEvent) => {
    dispatch(updateIsDone({ id, newValue: e.target.checked }));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <List.Item className={'task'}>
      <Checkbox checked={isDone} onChange={handleUpdateIsDone} />
      <Typography.Text className={'title'}>{title}</Typography.Text>
      <div className={'buttonCouple'}>
        <Button type='primary' icon={<EditOutlined />} onClick={showModal} />
        <Button onClick={handleDelete} type='primary' icon={<DeleteOutlined className={'buttonDelete'} />} />
      </div>
      <Modal
        className={'modal'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <DisplayModal
          currentId={id}
          currentTitle={title}
          onClose={handleCancel}
          typeDisplay={'edit'} />
      </Modal>
    </List.Item>
  );
};

export default Task;