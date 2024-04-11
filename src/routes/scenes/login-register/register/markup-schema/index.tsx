import React from 'react';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Password,
  Cascader,
  DatePicker,
  Submit,
  Space,
  FormGrid,
  Upload,
  ArrayItems,
  Editable,
  FormButtonGroup,
} from '@formily/antd-v5';
import { action } from '@formily/reactive';
import { Card, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const form = createForm({
  validateFirst: true,
});

const IDUpload = (props) => {
  return (
    <Upload
      {...props}
      action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
      headers={{
        authorization: 'authorization-text',
      }}>
      <Button icon={<UploadOutlined />}>上传复印件</Button>
    </Upload>
  );
};

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    Select,
    Password,
    Cascader,
    DatePicker,
    Submit,
    Space,
    Upload,
    ArrayItems,
    Editable,
    IDUpload,
  },
  scope: {
    fetchAddress: (field) => {
      const transform = (data = {}) => {
        return Object.entries(data).reduce((buf, [key, value]) => {
          if (typeof value === 'string') {
            return buf.concat({
              label: value,
              value: key,
            });
          }
          const { name, code, cities, districts } = value;
          const _cities = transform(cities);
          const _districts = transform(districts);
          return buf.concat({
            label: name,
            value: code,
            children: _cities.length ? _cities : _districts.length ? _districts : undefined,
          });
        }, []);
      };

      field.loading = true;
      fetch('//unpkg.com/china-location/dist/location.json')
        .then((res) => res.json())
        .then(
          action.bound((data) => {
            field.dataSource = transform(data);
            field.loading = false;
          }),
        );
    },
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
      <Card title='新用户注册' style={{ width: 620 }}>
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
              name='password'
              title='密码'
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
              x-component-props={{
                checkStrength: true,
              }}
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
            <SchemaField.Void
              title='姓名'
              x-decorator='FormItem'
              x-decorator-props={{ asterisk: true, feedbackLayout: 'none' }}
              x-component='FormGrid'>
              <SchemaField.String
                name='firstName'
                x-decorator='FormItem'
                x-component='Input'
                x-component-props={{ placeholder: '姓' }}
                required
              />
              <SchemaField.String
                name='lastName'
                x-decorator='FormItem'
                x-component='Input'
                x-component-props={{ placeholder: '名' }}
                required
              />
            </SchemaField.Void>
            <SchemaField.String
              name='email'
              title='邮箱'
              required
              x-validator='email'
              x-decorator='FormItem'
              x-component='Input'
            />
            <SchemaField.String
              name='gender'
              title='性别'
              x-decorator='FormItem'
              x-component='Select'
              enum={[
                { label: '男', value: 1 },
                { label: '女', value: 2 },
                { label: '第三性别', value: 3 },
              ]}
              required
            />
            <SchemaField.String
              name='birthday'
              title='生日'
              x-decorator='FormItem'
              x-component='DatePicker'
              required
            />
            <SchemaField.String
              name='address'
              title='地址'
              required
              x-decorator='FormItem'
              x-component='Cascader'
              x-reactions='{{fetchAddress}}'
            />
            <SchemaField.String
              name='idCard'
              title='身份证复印件'
              x-decorator='FormItem'
              x-component='IDUpload'
            />
          </SchemaField>
          <FormButtonGroup.FormItem>
            <Submit block size='large'>
              注册
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  );
};
export default App;
