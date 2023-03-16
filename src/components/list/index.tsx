import { Button, List, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTypedSelector } from 'store/hooks/useTypedSeoctor';
import { getTasks } from 'store/slice/taskSlice/selectors';
import Task from 'components/task';
import { TaskType } from 'store/slice/taskSlice/types';
import { AppstoreAddOutlined } from '@ant-design/icons';
import DisplayModal from 'components/displayModal';

const ListWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const tasks = useTypedSelector(getTasks);

  useEffect(() => {
    const quantityPage = tasks.length;
    setCurrentPage(Math.ceil(quantityPage / 3));
  }, [tasks]);

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
    <div>
      <List
        pagination={{
          onChange: (page) => {
            setCurrentPage(page);
          },
          hideOnSinglePage: true,
          current: currentPage,
          pageSize: 3,
        }}
        className={'todoDisplay'}
        bordered
        dataSource={tasks}
        renderItem={(item: TaskType) => (
          <Task key={item.id} {...item} />)
        } />
      <Button onClick={showModal} className={'buttonAdd'} block icon={<AppstoreAddOutlined />}>Add task</Button>
      <Modal
        className={'modal'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <DisplayModal onClose={handleCancel} typeDisplay={'add'} />
      </Modal>
    </div>
  );
};

export default ListWrapper;