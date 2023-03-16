import { Button, List, Typography } from 'antd';
import React, { FC } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useTypedDispatch } from 'store/hooks/useTypedDispatch';
import { deleteTask } from 'store/slice/taskSlice';

type Props = {
  id: string;
  title: string;
  isDone: boolean;
}

const Task: FC<Props> = ({ id, title, isDone }) => {
  const dispatch = useTypedDispatch();

  const handleOnClickDelete = () => {
    dispatch(deleteTask(id));
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <List.Item className={'task'}>
      <Checkbox checked={isDone} onChange={onChange} />
      <Typography.Text className={'title'}>modi necessitatibus nemo neque nobis nostrum obcaecati odit pariatur
        perspiciatis possimus praesentium </Typography.Text>
      <Button type='primary' icon={<EditOutlined />} />
      <Button onClick={handleOnClickDelete} type='primary' icon={<DeleteOutlined className={'buttonDelete'} />} />
    </List.Item>
  );
};

export default Task;