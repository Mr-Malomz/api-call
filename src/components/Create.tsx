import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { ModalProp } from '../models/modal.interface';
import ModalWrap from './ModalWrap';
import { PostType } from '../models/post.interface';
import { Post } from '../api/api';

interface CreateProps extends ModalProp {
	setIsCreate: (state: boolean) => void;
	posts: PostType[];
	setPosts: (updatedPost: PostType[]) => void;
}

const Create: FC<CreateProps> = ({
	isOpen,
	onClose,
	setIsCreate,
	posts,
	setPosts,
}) => {
	const [value, setValue] = useState({
		title: '',
		body: '',
	});
	const [isError, setIsError] = useState<boolean>(false);

	const handleChange = (e: React.FormEvent<EventTarget>) => {
		let target = e.target as HTMLInputElement;
		setValue({ ...value, [target.name]: target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		//add
		Post.createPost(value)
			.then((data) => {
				setPosts([data, ...posts]);
				setValue({ ...value, title: '', body: '' });
				onClose();
			})
			.then((err) => {
				setIsError(true)
			});
	};

	return (
		<ModalWrap
			isOpen={isOpen}
			onClose={() => {
				onClose();
				setIsCreate(false);
			}}
			title='Create New Post'
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
					Oop!!! Error creating post
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

export default Create;
