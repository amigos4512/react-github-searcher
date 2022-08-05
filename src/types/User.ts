export interface User {
  id: number;
  avatar_url: string;
  login: string;
  repos_url: string;
}

export interface SingleUser {
  id: number;
  avatar_url: string;
  login: string;
  email: string;
  location: string;
  created_at: Date;
  followers: number;
  following: number;
  bio: string;
  repos_url: string;
}

export interface UsersResponse {
  data: {
    items: User[];
  };
}

export interface SingleUserResponse {
  data: SingleUser;
}
