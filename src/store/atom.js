import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: 'userState',
  default: {
    accessToken: '',
    isLogin: false,
    id: 0,
    username: '',
  },
  effects_UNSTABLE: [persistAtom],
});
