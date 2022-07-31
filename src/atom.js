import { atom } from 'recoil';

export const loginState = atom({
  key: 'login',
  default: { username: '', password: '' },
});

export const checkLoginState = atom({
  key: 'checklogin',
  default: false,
});

export const registerState = atom({
  key: 'register',
  default: { id: '', pw: '' },
});
