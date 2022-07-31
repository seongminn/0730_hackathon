import { atom } from 'recoil';

export const loginState = atom({
  key: 'login',
  default: { id: '', pw: '' },
});

export const checkLoginState = atom({
  key: 'checklogin',
  default: false,
});

export const registerState = atom({
  key: 'register',
  default: { id: '', pw: '' },
});
