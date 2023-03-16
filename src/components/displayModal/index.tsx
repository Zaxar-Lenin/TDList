import React, { ChangeEvent, FC, useState } from 'react';
import { Button, Input, Typography } from 'antd';
import { useTypedDispatch } from 'store/hooks/useTypedDispatch';
import { addTask, editTitleTask } from 'store/slice/taskSlice';

type Props = {
  onClose: () => void;
  typeDisplay: string;
  currentTitle?: string;
  currentId?: string;
}

const DisplayModal: FC<Props> = ({ onClose, typeDisplay, currentTitle, currentId }) => {
  const [title, setTitle] = useState('');
  const [editTitle, setEditTitle] = useState<string>(currentTitle || '');

  const dispatch = useTypedDispatch();

  const handleOnChangeForTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleOnChangeForEditTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.currentTarget.value);
  };

  const handleAddTask = () => {
    dispatch(addTask(title));
    onClose();
    setTitle('');
  };

  const handleEditTitleTask = () => {
    currentId && dispatch(editTitleTask({ newTitle: editTitle, id: currentId }));
    onClose();
  };


  const options = () => {
    switch (typeDisplay) {
      case 'add':
        return <div className={'displayModal'}>
          <Typography.Title level={3}>Create task</Typography.Title>
          <Input value={title} placeholder='name task' onChange={handleOnChangeForTitle} />
          <Button type='primary' onClick={handleAddTask}>
            Create
          </Button>
        </div>;
      case 'edit':
        return <div className={'displayModal'}>
          <Typography.Title level={3}>Edit task</Typography.Title>
          <Input value={editTitle} onChange={handleOnChangeForEditTitle} />
          <Button type='primary' onClick={handleEditTitleTask}>
            apply
          </Button>
        </div>;
      default:
        return null;
    }
  };


  return (
    <>
      {options()}
    </>
  );
};


export default DisplayModal;