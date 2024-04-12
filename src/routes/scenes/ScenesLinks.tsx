import LoginRegisterMarkupSchema from './login-register/login/markup-schema';
import LoginRegisterJsonSchema from './login-register/login/json-schema';
import LoginRegisterJsxDemo from './login-register/login/jsx-demo';
import LoginRegisterRegisterMarkupSchema from './login-register/register/markup-schema';
import LoginRegisterForgotPasswordMarkupSchema from './login-register/forgot-password/markup-schema';

const ScenesLinks = [
  {
    path: '/login-register-markup-schema',
    name: '登录(MarkupSchema)',
    Component: LoginRegisterMarkupSchema,
  },
  {
    path: '/login-register-json-schema',
    name: '登录(JsonSchema)',
    Component: LoginRegisterJsonSchema,
  },
  {
    path: '/login-register-jsx-demo',
    name: '登录(JSX)',
    Component: LoginRegisterJsxDemo,
  },
  {
    path: '/login-register-register-markup-schema',
    name: '新用户注册(MarkupSchema)',
    Component: LoginRegisterRegisterMarkupSchema,
  },
  {
    path: '/login-register-forgot-password-markup-schema',
    name: '忘记密码(MarkupSchema)',
    Component: LoginRegisterForgotPasswordMarkupSchema,
  },
];

export default ScenesLinks;
