import React from 'react';
import styles from './index.less';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
interface DataType {
  url: string;
  caption: string;
}

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  return obj;
};

const columns: ColumnsType<DataType> = [
  {
    title: 'image',
    dataIndex: 'url',
    key: 'url',
    fixed: 'left',
    width: 400,
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index % 6 === 0) {
        obj.props.rowSpan = 6;
        obj.children = <img height={200} src={value} />;
      }
      // These two are merged into above cell
      else {
        obj.props.rowSpan = 0;
      }
      return obj;
    },
  },
  {
    title: 'caption(dataset)',
    dataIndex: 'caption',
    width: 500,
    render: renderContent,
  },
  {
    title: 'caption(BLIP)',
    dataIndex: 'caption',
    width: 700,
    render: renderContent,
  },
  {
    title: 'probability(BLIP)',
    dataIndex: 'prob',
    width: 200,
    render: renderContent,
  },
  {
    title: 'caption(BLIP2)',
    dataIndex: 'caption',
    width: 700,
    render: renderContent,
  },
  {
    title: 'probability(BLIP2)',
    dataIndex: 'prob',
    width: 200,
    render: renderContent,
  },
  {
    title: 'caption(BLIP2)',
    dataIndex: 'caption',
    width: 700,
    render: renderContent,
  },
  {
    title: 'probability(BLIP2)',
    dataIndex: 'prob',
    width: 200,
    render: renderContent,
  },
  {
    title: 'caption(BLIP2)',
    dataIndex: 'caption',
    width: 700,
    render: renderContent,
  },
  {
    title: 'probability(BLIP2)',
    dataIndex: 'prob',
    width: 200,
    render: renderContent,
  },
];

const data = [
  {
    url: 'http://images.cocodataset.org/val2017/000000397133.jpg',
    caption: 'A man is in a kitchen making pizzas.',
    prob: 0.0483,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000397133.jpg',
    caption: 'Man in apron standing on front of oven with pans and bakeware',
    prob: 0.0638,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000397133.jpg',
    caption: 'A baker is working in the kitchen rolling dough.',
    prob: 0.1187,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000397133.jpg',
    caption: 'A person standing by a stove in a kitchen.',
    prob: 0.3043,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000397133.jpg',
    caption:
      'A table with pies being made and a person standing near a wall with pots and pans hanging on the wall.',
    prob: 0.9177,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000397133.jpg',
    caption: 'a group of people in a kitchen preparing food',
    prob: 0.3701,
    tags: ['model'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000037777.jpg',
    caption: 'The dining table near the kitchen has a bowl of fruit on it.',
    prob: 0.9775,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000037777.jpg',
    caption: 'A small kitchen has various appliances and a table.',
    prob: 0.4403,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000037777.jpg',
    caption: 'The kitchen is clean and ready for us to see.',
    prob: 0.3374,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000037777.jpg',
    caption: 'A kitchen and dining area decorated in white.',
    prob: 0.4932,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000037777.jpg',
    caption: 'A kitchen that has a bowl of fruit on the table.',
    prob: 0.9769,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000037777.jpg',
    caption: 'a blurry photo of a kitchen with a table and refrigerator',
    prob: 0.9811,
    tags: ['model'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000252219.jpg',
    caption: 'a person with a shopping cart on a city street ',
    prob: 0.8733,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000252219.jpg',
    caption: 'City dwellers walk by as a homeless man begs for cash.',
    prob: 0.9696,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000252219.jpg',
    caption: 'People walking past a homeless man begging on a city street',
    prob: 0.8231,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000252219.jpg',
    caption: 'a homeless man holding a cup and standing next to a shopping cart on a street',
    prob: 0.6601,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000252219.jpg',
    caption: 'People are walking on the street by a homeless person.',
    prob: 0.909,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000252219.jpg',
    caption: 'a group of people walking down a street next to a blue building',
    prob: 0.9953,
    tags: ['model'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000087038.jpg',
    caption: 'A person on a skateboard and bike at a skate park.',
    prob: 0.0745,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000087038.jpg',
    caption: 'A man on a skateboard performs a trick at the skate park',
    prob: 0.2266,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000087038.jpg',
    caption: 'A skateboarder jumps into the air as he performs a skateboard trick.',
    prob: 0.1822,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000087038.jpg',
    caption: 'Athletes performing tricks on a BMX bicycle and a skateboard.',
    prob: 0.0628,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000087038.jpg',
    caption: 'a man falls off his skateboard in a skate park.',
    prob: 0.3272,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000087038.jpg',
    caption: 'a group of people riding skateboards on top of cement',
    prob: 0.6643,
    tags: ['model'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000174482.jpg',
    caption: 'a blue bike parked on a side walk ',
    prob: 0.9892,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000174482.jpg',
    caption: 'A bicycle is chained to a fixture on a city street',
    prob: 0.4295,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000174482.jpg',
    caption: 'A blue bicycle sits on a sidewalk near a street.',
    prob: 0.9841,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000174482.jpg',
    caption: 'A bicycle is locked up to a post',
    prob: 0.8201,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000174482.jpg',
    caption: 'a bike sits parked next to a street ',
    prob: 0.8707,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000174482.jpg',
    caption: 'a bicycle parked on the side of the street',
    prob: 0.8452,
    tags: ['model'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000403385.jpg',
    caption: 'A bathroom that has a broken wall in the shower.',
    prob: 0.7,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000403385.jpg',
    caption: 'A bathroom looks clean but is missing tile at the shower stall.',
    prob: 0.1815,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000403385.jpg',
    caption: 'A view of a bathroom that needs to be fixed up.',
    prob: 0.2451,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000403385.jpg',
    caption: 'a shower toilet and sink in a basement bathroom',
    prob: 0.3182,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000403385.jpg',
    caption: 'A very big whit rest room with a shabby looking shower.',
    prob: 0.7441,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000403385.jpg',
    caption: 'a white toilet sitting next to a white sink in a bathroom',
    prob: 0.1925,
    tags: ['model'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000006818.jpg',
    caption: 'a couple of buckets in a white room',
    prob: 0.996,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000006818.jpg',
    caption: 'A bathroom with no toilets and a red and green bucket. ',
    prob: 0.9991,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000006818.jpg',
    caption: 'a shower room with two buckets, tolet paper holder and soap.',
    prob: 0.9978,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000006818.jpg',
    caption: 'A standing toilet in a bathroom next to a window.',
    prob: 0.3101,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000006818.jpg',
    caption: 'This picture looks like a janitors closet with buckets on the floor.',
    prob: 0.9816,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000006818.jpg',
    caption: 'a bathroom with two buckets and a toilet',
    prob: 0.9947,
    tags: ['model'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000480985.jpg',
    caption: 'The shiny motorcycle has been put on display.',
    prob: 0.6553,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000480985.jpg',
    caption: 'The new motorcycle on display is very shiny.',
    prob: 0.7999,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000480985.jpg',
    caption: 'A motorcycle is parked inside of a building.',
    prob: 0.9247,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000480985.jpg',
    caption: 'A brand new motorcycle on display at a show.',
    prob: 0.8586,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000480985.jpg',
    caption: 'The front end of a red motorcycle that is on display.',
    prob: 0.6336,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000480985.jpg',
    caption: 'a motorcycle is on display in a showroom',
    prob: 0.9144,
    tags: ['model'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000458054.jpg',
    caption: 'A row of white toilets sitting on top of a dirt ground.',
    prob: 0.9889,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000458054.jpg',
    caption: 'A bunch of dirty looking white toilets in a row outside.',
    prob: 0.9978,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000458054.jpg',
    caption: 'There is a row of used and broken toilets in a field.',
    prob: 0.9945,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000458054.jpg',
    caption: 'A row of toilets with broken seat tops on the ground.',
    prob: 0.9978,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000458054.jpg',
    caption: 'LOTS OF BROKEN TOILETS SITTING OUT ON A LAWN',
    prob: 0.9876,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000458054.jpg',
    caption: 'a bunch of toilets that are sitting in the grass',
    prob: 0.9725,
    tags: ['model'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000331352.jpg',
    caption: 'A small closed toilet in a cramped space.',
    prob: 0.6573,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000331352.jpg',
    caption: 'A tan toilet and sink combination in a small room.',
    prob: 0.7665,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000331352.jpg',
    caption: 'This is an advanced toilet with a sink and control panel.',
    prob: 0.8542,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000331352.jpg',
    caption: 'A close-up picture of a toilet with a fountain.',
    prob: 0.8435,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000331352.jpg',
    caption: 'Off white toilet with a faucet and controls. ',
    prob: 0.9508,
    tags: ['dataset'],
  },
  {
    url: 'http://images.cocodataset.org/val2017/000000331352.jpg',
    caption: 'a white toilet sitting in a bathroom next to a wall',
    prob: 0.5054,
    tags: ['model'],
  },
];

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-colspan-rowspan">
      <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: 1500, y: 700 }} />
    </div>
  </div>
);

/*{
    title: 'type',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'dataset') {
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
  },*/
