import React from 'react';
import { Modal } from 'antd';
import {
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
  ProFormRadio,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import type { TableListItem } from '../data';

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<TableListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
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
            title="模型信息修改"
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
          api: props.values.api,
          origin: props.values.origin,
          type: props.values.type,
        }}
        title="基本信息"
      >
        <ProFormText
          name="name"
          label="模型名称"
          width="md"
          rules={[
            {
              required: true,
              message: '请输入模型名称！',
            },
          ]}
        />
        <ProFormText name="type" label="模型类别" width="md" />
        <ProFormText
          name="origin"
          label="模型来源"
          width="md"
          rules={[
            {
              message: '模型url',
            },
          ]}
        />
        <ProFormText
          name="api"
          label="调用接口"
          width="md"
          rules={[
            {
              message: '调用模型的接口',
            },
          ]}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
