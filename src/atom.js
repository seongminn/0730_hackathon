import { atom } from 'recoil';

export const loginState = atom({
  key: 'login',
  default: { username: '', password: '' },
});

export const checkLoginState = atom({
  key: 'checklogin',
  default: { checked: false, username: '' },
});

export const registerState = atom({
  key: 'register',
  default: { username: '', password: '' },
});

export const searchState = atom({
  key: 'search',
  default: [],
});

// export const tokenState = atom({
//   key: 'token',
//   default: {},
// });
