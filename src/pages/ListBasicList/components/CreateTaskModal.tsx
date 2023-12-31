import React from 'react';
import { Modal } from 'antd';
import {
  ProFormText,
  StepsForm,
} from '@ant-design/pro-form';
import type { TableListItem } from '../data';

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<TableListItem>;

export type CreateTaskModalProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
};

const CreateTaskModal: React.FC<CreateTaskModalProps> = (props) => {
  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{
              padding: '32px 40px 48px',
            }}
            destroyOnClose
            title="数据集信息修改"
            visible={props.updateModalVisible}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
    >
      <StepsForm.StepForm
        initialValues={{
          name: props.values.name,
          size: props.values.size,
          origin: props.values.origin,
          type: props.values.type,
          url: props.values.url,
        }}
        title="基本信息"
      >
        <ProFormText
          name="name"
          label="数据集名称"
          width="md"
          rules={[
            {
              required: true,
              message: '请输入数据集名称！',
            },
          ]}
        />
        <ProFormText name="size" label="数据集条数" width="md" />
        <ProFormText
          name="type"
          label="数据集类别"
          width="md"
          rules={[
            {
              message: '是否为图文数据集',
            },
          ]}
        />
        <ProFormText name="url" label="下载链接" width="md" />
        <ProFormText
          name="origin"
          label="数据集来源"
          width="md"
          rules={[
            {
              message: '数据集url',
            },
          ]}
        />

      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default CreateTaskModal;
