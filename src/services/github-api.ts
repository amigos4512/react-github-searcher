import axios from 'axios';

export const authParams = {
  auth: {
    username: 'amigos4512',
    password: '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',
  },
};

export const fetchUsersRequest = (query: string) => {
  return axios.get(
    `https://api.github.com/search/users?q=${query}`,
    authParams
  );
};

export const fetchUserRequest = (username: string) => {
  return axios.get(` https://api.github.com/users/${username}`, authParams);
};
