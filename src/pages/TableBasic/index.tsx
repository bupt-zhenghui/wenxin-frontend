import React from 'react';
import styles from './index.less';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'image',
    dataIndex: 'image',
    key: 'url',
    render: (text) => (
      <img
        //src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        src={text}
      />
    ),
  },
  {
    title: 'caption',
    dataIndex: 'caption',
    key: 'caption',
  },
  {
    title: 'type',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'probability',
    dataIndex: 'prob',
    key: 'match',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    caption: [
      'A man is in a kitchen making pizzas.',
      'Man in apron standing on front of oven with pans and bakeware',
    ],
    match: [0.0483, 0.0638],
    url: 'http://images.cocodataset.org/val2017/000000397133.jpg',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    caption: [
      'A man is in a kitchen making pizzas.',
      'Man in apron standing on front of oven with pans and bakeware',
    ],
    match: [0.0483, 0.0638],
    url: 'http://images.cocodataset.org/val2017/000000397133.jpg',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    caption: [
      'A man is in a kitchen making pizzas.',
      'Man in apron standing on front of oven with pans and bakeware',
    ],
    match: [0.0483, 0.0638],
    url: 'http://images.cocodataset.org/val2017/000000397133.jpg',
  },
];

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-basic">
      <Table columns={columns} dataSource={data} />
    </div>
  </div>
);
