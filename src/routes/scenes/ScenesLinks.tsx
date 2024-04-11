import LoginRegisterMarkupSchema from './login-register/login/markup-schema';
import LoginRegisterJsonSchema from './login-register/login/json-schema';
import LoginRegisterJsxDemo from './login-register/login/jsx-demo';
import LoginRegisterRegisterMarkupSchema from './login-register/register/markup-schema';

const ScenesLinks = [
  {
    path: '/login-register-markup-schema',
    name: 'LoginRegisterMarkupSchema',
    Component: LoginRegisterMarkupSchema,
  },
  {
    path: '/login-register-json-schema',
    name: 'LoginRegisterJsonSchema',
    Component: LoginRegisterJsonSchema,
  },
  {
    path: '/login-register-jsx-demo',
    name: 'LoginRegisterJsxDemo',
    Component: LoginRegisterJsxDemo,
  },
  {
    path: '/login-register-register-markup-schema',
    name: '新用户注册(MarkupSchema)',
    Component: LoginRegisterRegisterMarkupSchema,
  },
];

export default ScenesLinks;
