import { Button, List } from 'antd';
import React from 'react';
import { useTypedSelector } from 'store/hooks/useTypedSeoctor';
import { getTasks } from 'store/slice/taskSlice/selectors';
import Task from 'components/task';
import { TaskType } from 'store/slice/taskSlice/types';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { PaginationConfig } from 'antd/es/pagination';
import { useTypedDispatch } from 'store/hooks/useTypedDispatch';

const ListWrapper = () => {
  const tasks = useTypedSelector(getTasks);

  const dispatch = useTypedDispatch();

  // const handleOnClickAddTask = (value: string) => {
  //   dispatch(addTask(value))
  // }

  const openModal = () => {
    return;
  };

  return (
    <div>
      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        className={'todoDisplay'}
        bordered
        dataSource={tasks}
        renderItem={(item: TaskType) => (
          <Task key={item.id} {...item} />)
        } />
      <Button onClick={openModal} className={'buttonAdd'} block icon={<AppstoreAddOutlined />}>Add task</Button>
    </div>
  );
};

export default ListWrapper;