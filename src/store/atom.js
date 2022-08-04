import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginState = atom({
  key: 'login',
  default: { isLogin: false, accessToken: '' },
  effects_UNSTABLE: [persistAtom],
});

// 현재는 로그인하면 토큰이랑 username, nickname 다 넘겨줌
// 토큰만 넘겨주는건? 필요할 때 유저 정보 요청
export const userState = atom({
  key: 'user',
  default: {
    nickname: '',
  },
  effects_UNSTABLE: [persistAtom],
});
