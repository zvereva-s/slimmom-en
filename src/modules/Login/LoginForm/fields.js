export const fields = {
  email: {
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    required: true,
  },
  password: {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    required: true,
    pattern: '.{8,}',
    title: 'Please enter at least 8 characters',
  },
};
