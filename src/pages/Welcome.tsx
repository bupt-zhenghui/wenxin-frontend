import { PageContainer } from '@ant-design/pro-components';
import { Card, Table, Typography } from 'antd';
import { useIntl } from 'umi';
import React, { useEffect, useState } from 'react';
import styles from './Welcome.less';
import { getDatasetList } from '@/services/dataset';

const getAllDataset = getDatasetList;

export default (): React.ReactNode => {
  const [datasetList, setDatasetList] = useState([]);

  useEffect(() => {
    const getDatasetList = async () => {
      //const leetcodeList = await getAllLeetcode(null);
      //const datasetList = request.get('http://127.0.0.1:8888/dataset');
      //const datasetList = request.get('http://123.57.66.63:8888/api/v1/leetcode/statistics');
      const datasetList1 = await getAllDataset(null);
      setDatasetList(datasetList1);
    };
    getDatasetList();
    // console.log("leetcode list: ", leetcodeList)
  }, []);

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'origin',
      dataIndex: 'origin',
      key: 'origin',
    },
    {
      title: 'size',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'type',
      dataIndex: 'type',
      key: 'type',
    },
  ];

  const List = [
    {
      id: 1,
      name: 'coco',
      size: 100000,
      type: 1,
      origin: 'www.coco.com',
    },
  ];
  const intl = useIntl();
  return (
    <PageContainer content="欢迎">
      <Table dataSource={datasetList} columns={columns} />
    </PageContainer>
  );
};
const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

//const Welcome: React.FC = () => {};
//<Table dataSource={List} columns={columns} />
//export default Welcome;
