import { Posts } from "../../store/posts/types";
import { AxiosResponse } from "axios";

export interface Credentials {
  token: string;
}

export interface Account {
  email_address: string;
  loggedIn: boolean;
}

export interface Token {
  token: string;
}

export interface RegisterData {
  avatar: {
    large: string;
  };
  id: string;
  dateRegistered: Date;
  online: boolean;
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_URL: string;
  password: string;
  __v: number;
}

export interface PostsData {
  content: {
    image: Array<number>;
    text: string;
    video: string;
  };
  likes: Array<string>;
  shares: Array<string>;
  _id: string;
  author: string;
  date: Date;
  __v: number;
}

export interface TokenResponse extends AxiosResponse {
  data: Token;
}

export interface RegisterResponse extends AxiosResponse {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface PostsResponse extends AxiosResponse {
  data: Posts[];
}
