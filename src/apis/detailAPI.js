import axios from 'axios';

import PATH from '../constants/path';

const detailAPI = {
  getDetail: async id => {
    try {
      const { data } = await axios.get(`${PATH.BASE_URL}${PATH.DETAIL}/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default detailAPI;
