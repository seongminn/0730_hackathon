import { atom } from 'recoil';

export const tokenState = atom({
  key: 'token',
  default: {},
});

export const checkLoginState = atom({
  key: 'checklogin',
  default: { checked: false, username: '' },
});

export const searchState = atom({
  key: 'search',
  default: [],
});

export const authState = atom({
  key: 'auth',
  default: true,
});
