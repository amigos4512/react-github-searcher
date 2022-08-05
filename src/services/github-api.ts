import axios from 'axios';

export const authParams = {
  // Temporary credentials without any rights
  auth: {
    username: 'amigos4512',
    password: atob('Z2hwX081ejREUzBYYVY3Z2g2WXdENnFQR1NOTkdaelptMzBFV1FkZQ=='),
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
