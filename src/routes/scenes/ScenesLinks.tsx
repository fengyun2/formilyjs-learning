import LoginRegisterMarkupSchema from './login-register/login/markup-schema';
import LoginRegisterJsonSchema from './login-register/login/json-schema';
import LoginRegisterJsxDemo from './login-register/login/jsx-demo';

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
];

export default ScenesLinks;
