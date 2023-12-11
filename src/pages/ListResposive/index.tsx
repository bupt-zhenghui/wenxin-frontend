import React from 'react';
import styles from './index.less';
import { List, Card } from 'antd';
import { Table, Tag } from 'antd';
import { Col, Popover, Row, message } from 'antd';

const data = [
  {
    title: 'Title 0',
    url: ' http://images.cocodataset.org/val2017/000000397133.jpg',
    caption: [
      'A man is in a kitchen making pizzas.',
      'Man in apron standing on front of oven with pans and bakeware',
    ],
    match: [0.0483, 0.0638],
    tags: ['loser'],
  },
  {
    title: 'Title 0',
    url: ' http://images.cocodataset.org/val2017/000000397133.jpg',
    caption: [
      'A man is in a kitchen making pizzas.',
      'Man in apron standing on front of oven with pans and bakeware',
    ],
    match: [0.0483, 0.0638],
    tags: ['loser'],
  },
  {
    title: 'Title 0',
    url: ' http://images.cocodataset.org/val2017/000000397133.jpg',
    caption: [
      'A man is in a kitchen making pizzas.',
      'Man in apron standing on front of oven with pans and bakeware',
    ],
    match: [0.0483, 0.0638],
    tags: ['loser'],
  },
];

const columns = [
  {
    title: 'caption',
    dataIndex: 'age',
    key: 'age',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'url',
    dataIndex: 'address',
    key: 'address',
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
    dataIndex: 'address',
    key: 'address',
  },
  {
    /*
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16 }}>Invite {record.name}</a>
        <a>Delete</a>
      </span>
    ),*/
  },
];

export default () => (
  <div className={styles.container}>
    <div id="components-list-demo-resposive">
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card>
              <img width={400} alt="logo" src={item.url} />
              <Table columns={columns} dataSource={data} />
            </Card>
            {/**
               * <Card title={item.title}>
               * 
              <img width={200} alt="logo" src={item.url} />
              <img
                width={400}
                alt="logo"
                src="http://images.cocodataset.org/val2017/000000037777.jpg"
              />
            </Card>
               */}
          </List.Item>
        )}
      />
    </div>
  </div>
);
