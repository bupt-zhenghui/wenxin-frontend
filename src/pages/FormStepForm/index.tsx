import React, { useRef, useState } from 'react';
import type { FormInstance } from 'antd';
import { Card, Result, Button, Descriptions, Divider, Alert, Statistic } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, { ProFormDigit, ProFormSelect, ProFormText, StepsForm } from '@ant-design/pro-form';
import type { StepDataType } from './data.d';
import styles from './style.less';

const StepDescriptions: React.FC<{
  stepData: StepDataType;
  bordered?: boolean;
}> = ({ stepData, bordered }) => {
  const { payAccount, receiverAccount, receiverName, amount } = stepData;
  return (
    <Descriptions column={1} bordered={bordered}>
      <Descriptions.Item label="付款账户"> {payAccount}</Descriptions.Item>
      <Descriptions.Item label="收款账户"> {receiverAccount}</Descriptions.Item>
      <Descriptions.Item label="收款人姓名"> {receiverName}</Descriptions.Item>
      <Descriptions.Item label="转账金额">
        <Statistic
          value={amount}
          suffix={
            <span
              style={{
                fontSize: 14,
              }}
            >
              元
            </span>
          }
          precision={2}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};

const StepResult: React.FC<{
  onFinish: () => Promise<void>;
}> = (props) => {
  return (
    <Result
      status="success"
      title="操作成功"
      //subTitle="预计完成"
      extra={
        <>
          <Button type="primary" onClick={props.onFinish}>
            重新提交
          </Button>
          <Button onClick={props.onFinish}>查看任务列表</Button>
        </>
      }
      className={styles.result}
    ></Result>
  );
};

const FormStepForm: React.FC<Record<string, any>> = () => {
  const [stepData, setStepData] = useState<StepDataType>({
    payAccount: 'ant-design@alipay.com',
    receiverAccount: 'test@example.com',
    receiverName: 'Alex',
    amount: '500',
    receiverMode: 'alipay',
  });
  const [current, setCurrent] = useState(0);
  const formRef = useRef<FormInstance>();

  return (
    <PageContainer>
      <Card bordered={false}>
        <StepsForm
          current={current}
          onCurrentChange={setCurrent}
          submitter={{
            render: (props, dom) => {
              if (props.step === 2) {
                return null;
              }
              return dom;
            },
          }}
        >
          <StepsForm.StepForm<StepDataType>
            formRef={formRef}
            title="选择数据库"
            initialValues={stepData}
            onFinish={async (values) => {
              setStepData(values);
              return true;
            }}
          >
            <ProFormSelect
              label="选择数据库"
              width="md"
              name="dataset"
              rules={[{ required: true, message: '请选择数据库' }]}
              valueEnum={{
                COCO: 'COCO',
                LAION: 'LAION',
              }}
            />
            <ProFormSelect
              label="选择描述生成模型"
              width="md"
              name="model1"
              rules={[{ required: true, message: '请选择描述模型' }]}
              valueEnum={{
                BLIP: 'BLIP',
                文心一言: '文心一言',
              }}
            />
          </StepsForm.StepForm>

          <StepsForm.StepForm title="选择图文相似度计算模型">
            <ProFormSelect
              label="选择图文相似度计算模型（可选）"
              width="md"
              name="model2"
              rules={[{ required: false, message: '请选择描述模型' }]}
              valueEnum={{
                BLIP: 'BLIP',
                文心一言: '文心一言',
              }}
            />
            <ProFormSelect
              label="选择文本描述纠错模型（可选）"
              width="md"
              name="model3"
              rules={[{ required: false, message: '请选择描述模型' }]}
              valueEnum={{
                BLIP: 'BLIP',
                文心一言: '文心一言',
              }}
            />
          </StepsForm.StepForm>
          <StepsForm.StepForm title="完成">
            <StepResult
              onFinish={async () => {
                setCurrent(0);
                formRef.current?.resetFields();
              }}
            >
              <StepDescriptions stepData={stepData} />
            </StepResult>
          </StepsForm.StepForm>
        </StepsForm>
        <Divider style={{ margin: '40px 0 24px' }} />
        <div className={styles.desc}>
          <h3>说明</h3>
        </div>
      </Card>
    </PageContainer>
  );
};

export default FormStepForm;
