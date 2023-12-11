import { PageContainer } from '@ant-design/pro-components';
import { Col, Popover, Row, message } from 'antd';
import { Card, Typography } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
import styles from './index.less';
import TableResetFilter from '../TableResetFilter';
import ProForm, { ProFormSelect } from '@ant-design/pro-form';
import TableBasic from '../TableBasic';
import ListResposive from '../ListResposive';
import ListVertical from '../ListVertical';
import ButtonBlock from '../ButtonBlock';
import TableColspanRowspan from '../TableColspanRowspan';

const fieldLabels = {
  dataset: '数据集',
  model1: '生成文本描述的模型',
  model2: '评估文本描述的模型',
};

const Welcome: React.FC = () => {
  const intl = useIntl();
  return (
    <PageContainer>
      <Card title="数据集及模型选择" className={styles.card} bordered={false}>
        <Row gutter={16}>
          <Col
            xl={{
              span: 6,
              offset: 2,
            }}
            lg={6}
            md={12}
            sm={24}
          >
            <ProFormSelect
              label={fieldLabels.dataset}
              name="dataset"
              rules={[
                {
                  required: true,
                  message: '请选择数据集',
                },
              ]}
              options={[
                {
                  label: 'COCO',
                  value: 'COCO',
                },
                {
                  label: 'LAION',
                  value: 'LAION',
                },
              ]}
              placeholder="请选择"
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col
            xl={{
              span: 6,
              offset: 2,
            }}
            lg={6}
            md={12}
            sm={24}
          >
            <ProFormSelect
              label={fieldLabels.model1}
              name="model1"
              rules={[
                {
                  required: true,
                  message: '请选择生成描述的模型',
                },
              ]}
              options={[
                {
                  label: 'BLIP',
                  value: 'blip',
                },
                {
                  label: 'BLIP2',
                  value: 'blip2',
                },
              ]}
              placeholder="请选择"
            />
          </Col>
        </Row>
        <Row>
          <Col
            xl={{
              span: 6,
              offset: 2,
            }}
            lg={6}
            md={12}
            sm={24}
          >
            <ProFormSelect
              label={fieldLabels.model2}
              name="model2"
              rules={[
                {
                  required: true,
                  message: '请选择评估描述的模型',
                },
              ]}
              options={[
                {
                  label: 'BLIP',
                  value: 'blip',
                },
                {
                  label: 'BLIP2',
                  value: 'blip2',
                },
              ]}
              placeholder="请选择"
            />
          </Col>
        </Row>

        <ButtonBlock />
      </Card>
      <Card title="预览">
        <TableColspanRowspan />
      </Card>
    </PageContainer>
  );
};

export default Welcome;
