import React from 'react';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import { Form, FormItem, Input, Password, Submit, FormButtonGroup } from '@formily/antd-v5';
import { Card } from 'antd';

const form = createForm({
  validateFirst: true,
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
  },
});

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#eee',
        padding: '40px 0',
      }}>
      <Card title='变更密码' style={{ width: 620 }}>
        <Form form={form} labelCol={5} wrapperCol={16} onAutoSubmit={console.log}>
          <SchemaField>
            <SchemaField.String
              name='username'
              title='用户名'
              required
              x-decorator='FormItem'
              x-component='Input'
            />
            <SchemaField.String
              name='email'
              title='邮箱'
              required
              x-decorator='FormItem'
              x-component='Input'
              x-validator='email'
            />
            <SchemaField.String
              name='old_password'
              title='原始密码'
              required
              x-decorator='FormItem'
              x-component='Password'
            />
            <SchemaField.String
              name='password'
              title='新密码'
              required
              x-decorator='FormItem'
              x-component='Password'
              x-component-props={{
                checkStrength: true,
              }}
              x-reactions={[
                {
                  dependencies: ['.confirm_password'],
                  fulfill: {
                    state: {
                      selfErrors:
                        '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "确认密码不匹配" : ""}}',
                    },
                  },
                },
              ]}
            />
            <SchemaField.String
              name='confirm_password'
              title='确认密码'
              required
              x-decorator='FormItem'
              x-component='Password'
              x-component-props={{ checkStrength: true }}
              x-reactions={[
                {
                  dependencies: ['.password'],
                  fulfill: {
                    state: {
                      selfErrors:
                        '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "确认密码不匹配" : ""}}',
                    },
                  },
                },
              ]}
            />
          </SchemaField>
          <FormButtonGroup.FormItem>
            <Submit block size='large'>
              确认变更
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  );
};

export default App;
