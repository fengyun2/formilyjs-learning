import React from 'react';
import { createForm } from '@formily/core';
import { Field } from '@formily/react';
import { Form, FormItem, Input, Password, Submit } from '@formily/antd-v5';
import { Tabs, Card } from 'antd';
import type { TabsProps } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import { VerifyCode } from '../markup-schema/VerifyCode';

const normalForm = createForm({
  validateFirst: true,
});

const phoneForm = createForm({
  validateFirst: true,
});

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '账密登录',
    children: (
      <Form form={normalForm} layout='vertical' size='large' onAutoSubmit={console.log}>
        <Field
          name='username'
          title='用户名'
          required
          decorator={[FormItem]}
          component={[Input, { prefix: <UserOutlined /> }]}
        />
        <Field
          name='password'
          title='密码'
          required
          decorator={[FormItem]}
          component={[Password, { prefix: <LockOutlined /> }]}
        />
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
        <Field
          name='phone'
          title='手机号'
          required
          validator='phone'
          decorator={[FormItem]}
          component={[Input, { prefix: <PhoneOutlined /> }]}
        />
        <Field
          name='verifyCode'
          title='验证码'
          required
          reactions={(field) => {
            const phone = field.query('phone');
            field.setComponentProps({
              readyPost: phone.get('valid') && phone.get('value'),
              phoneNumber: phone.get('value'),
            });
          }}
          decorator={[FormItem]}
          component={[VerifyCode, { prefix: <LockOutlined /> }]}
        />
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
