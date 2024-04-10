import LoginRegisterMarkupSchema from './login-register/markup-schema';
import LoginRegisterJsonSchema from './login-register/json-schema';

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
];

export default ScenesLinks;
