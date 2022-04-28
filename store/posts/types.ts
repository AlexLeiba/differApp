import { Action } from "redux";

export interface State {
  posts: Posts[];
}

export interface Posts {
  content: {
    image: string[];
    text: string;
    video: string;
  };
  likes: string[];
  shares: string[];
  _id: string;
  author: string;
  date: Date;
  __v: number;
}

export enum ActionTypes {
  GET_POSTS_DATA = "store/properties/GET_POSTS_DATA",
}

export interface GetPostsDataAction extends Action {
  type: ActionTypes.GET_POSTS_DATA;
  payload: { data: Posts[] };
}

export type Actions = GetPostsDataAction;
