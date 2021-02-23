import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { ModalProp } from '../models/modal.interface';
import ModalWrap from './ModalWrap';
import { PostType } from '../models/post.interface'; //add
import { Post } from '../api/api';

interface EditProps extends ModalProp {
	setIsEdit: (state: boolean) => void;
	posts: PostType[]; //add
	setPosts: (updatedPost: PostType[]) => void; //add
	postID: number | null; //add
	setPostID: (id: number) => void; //add
}

const Edit: FC<EditProps> = ({
	isOpen,
	onClose,
	setIsEdit,
	posts,
	setPosts,
	postID,
	setPostID,
}) => {
	const [value, setValue] = useState({
		title: '',
		body: '',
	});
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		Post.getAPost(postID!)
			.then((data) =>
				setValue({ ...value, title: data.title, body: data.body })
			)
			.catch((err) => setIsError(true));
		return () => {};
	}, []);

	const handleChange = (e: React.FormEvent<EventTarget>) => {
		let target = e.target as HTMLInputElement;
		setValue({ ...value, [target.name]: target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		//add
		Post.updatePost(value, postID!)
			.then((data) => {
				let updatedPost = posts.filter((post) => post.id !== postID);
				setPosts([data, ...updatedPost]);
				setValue({ ...value, title: '', body: '' });
				onClose();
			})
			.then((err) => {
				setIsError(true);
			});
	};

	return (
		<ModalWrap
			isOpen={isOpen}
			onClose={() => {
				onClose();
				setIsEdit(false);
			}}
			title='Edit Post'
		>
			{/* Add this part */}
			{isError && (
				<Box
					mt='1'
					fontWeight='bold'
					fontSize='sm'
					as='p'
					isTruncated
					color='red'
				>
					Oop!!! Error occured.
				</Box>
			)}
			<form onSubmit={handleSubmit}>
				<Box mb='8'>
					<Text mb='8px'>Title</Text>
					<Input
						type='text'
						value={value.title}
						onChange={handleChange}
						name='title'
						required
					/>
				</Box>
				<Box mb='8'>
					<Text mb='8px'>Body</Text>
					<Textarea
						value={value.body}
						onChange={handleChange}
						name='body'
						required
					/>
				</Box>
				<Button type='submit' w='100%' colorScheme='teal' mb='8'>
					Submit
				</Button>
			</form>
		</ModalWrap>
	);
};

export default Edit;
