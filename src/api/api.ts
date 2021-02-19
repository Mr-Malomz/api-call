import axios, { AxiosResponse } from 'axios';
import { PostType } from '../models/post.interface';

axios.create({
	baseURL: 'http://jsonplaceholder.typicode.com/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => axios.get(url).then(responseBody),
	post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
	put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
	delete: (url: string) => axios.delete(url).then(responseBody),
};

export const Post = {
	getPosts: (): Promise<PostType[]> => requests.get('posts'),
	getAPost: (id: string): Promise<PostType> => requests.get(`posts/${id}`),
	createPost: (post: PostType): Promise<PostType> =>
		requests.post('posts', post),
	deletePost: (id: string): Promise<void> => requests.delete(`posts/${id}`),
};
