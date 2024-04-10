import React from 'react';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import { Form, FormItem, Input, Password, Submit } from '@formily/antd-v5';
import { Tabs, Card } from 'antd';
import type { TabsProps } from 'antd';
import * as ICONS from '@ant-design/icons';
import { VerifyCode } from '../markup-schema/VerifyCode';

type IconName = keyof typeof ICONS;

const normalForm = createForm({
  validateFirst: true,
});

const phoneForm = createForm({
  validateFirst: true,
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    VerifyCode,
  },
  scope: {
    icon(name: IconName) {
      return React.createElement(ICONS[name] as any);
    },
  },
});

const normalSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      title: '用户名',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': {
        required: true,
      },
      'x-component-props': {
        prefix: "{{icon('UserOutlined')}}",
      },
    },
    password: {
      type: 'string',
      title: '密码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-validator': {
        required: true,
      },
      'x-component-props': {
        prefix: "{{icon('LockOutlined')}}",
      },
    },
  },
};

const phoneSchema = {
  type: 'object',
  properties: {
    phone: {
      type: 'string',
      title: '手机号',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': 'phone',
      'x-component-props': {
        prefix: "{{icon('PhoneOutlined')}}",
      },
    },
    verifyCode: {
      type: 'string',
      title: '验证码',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'VerifyCode',
      'x-component-props': {
        prefix: "{{icon('LockOutlined')}}",
      },
      'x-reactions': [
        {
          dependencies: ['.phone#value', '.phone#valid'],
          fulfill: {
            state: {
              'component[1].readyPost': '{{$deps[0] && $deps[1]}}',
              'component[1].phoneNumber': '{{$deps[0]}}',
            },
          },
        },
      ],
    },
  },
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '账密登录',
    children: (
      <Form form={normalForm} layout='vertical' size='large' onAutoSubmit={console.log}>
        <SchemaField schema={normalSchema}></SchemaField>
        <Submit block size='large'>
          登录
        </Submit>
      </Form>
    ),
  },
  {
    key: '2',
    label: '手机号登录',
    children: (
      <Form form={phoneForm} layout='vertical' size='large' onAutoSubmit={console.log}>
        <SchemaField schema={phoneSchema}></SchemaField>
        <Submit block size='large'>
          登录
        </Submit>
      </Form>
    ),
  },
];

const App = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', background: '#eee', padding: '40px 0' }}>
      <Card style={{ width: 400 }}>
        <Tabs defaultActiveKey='1' items={items} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <a href='#新用户注册'>新用户注册</a>
          <a href='#忘记密码'>忘记密码?</a>
        </div>
      </Card>
    </div>
  );
};

export default App;
