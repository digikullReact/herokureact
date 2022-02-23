import React from 'react'
import { List, Avatar } from 'antd';
import { useSelector } from 'react-redux';

const ListC = () => {
    const data = useSelector(state=>state.counter.todos)
  return (




<List
itemLayout="horizontal"
dataSource={data}
renderItem={item => (
  <List.Item>
    <List.Item.Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={<a href="https://ant.design">{item.title}</a>}
    />
  </List.Item>
)}
/>
  )
}
  


export default ListC