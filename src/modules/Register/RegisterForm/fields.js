export const fields = {
  name: {
    name: 'username',
    placeholder: 'Name',
    type: 'text',
    required: true,
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
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
