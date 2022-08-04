import axios from 'axios';

import PATH from '../constants/path';

const authAPI = {
  login: async ({ input }) => {
    try {
      const { data } = await axios.post(
        `${PATH.BASE_URL}/account${PATH.LOGIN}`,
        input
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  signup: async ({ input }) => {
    try {
      const { status } = await axios.post(
        `${PATH.BASE_URL}/account${PATH.SIGNUP}`,
        input
      );
      return status;
    } catch (error) {
      console.log(error);
    }
  },
};

export default authAPI;
