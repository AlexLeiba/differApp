import { PostsResponse } from "./types";
import { sendPostRequest, sendGetRequest } from "../network";
import { Posts } from "../../store/posts";

export default () => ({
  getPosts: async (token: string): Promise<Posts[]> => {
    const { data }: PostsResponse = await sendGetRequest(
      process.env.REACT_APP_BASE_URL + "/posts",
      token
    );
    return data;
  },
  createNewPost: async (token: string): Promise<Posts[]> => {
    const { data }: PostsResponse = await sendPostRequest(
      process.env.REACT_APP_BASE_URL + "/posts",
      token
    );
    return data;
  },
});
