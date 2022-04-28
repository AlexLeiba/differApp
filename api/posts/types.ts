import { Posts } from "../../store/posts/types";
import { AxiosResponse } from "axios";

export interface PostsResponse extends AxiosResponse {
  data: Posts[];
}
