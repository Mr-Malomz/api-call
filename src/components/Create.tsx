import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { ModalProp } from '../models/modal.interface';
import ModalWrap from './ModalWrap';

interface CreateProps extends ModalProp {
	setIsCreate: (state: boolean) => void;
}

const Create: FC<CreateProps> = ({ isOpen, onClose, setIsCreate }) => {
	const [value, setValue] = useState({
		title: '',
		body: '',
	});

	const handleChange = (e: React.FormEvent<EventTarget>) => {
		let target = e.target as HTMLInputElement;
		setValue({ ...value, [target.name]: target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(value);
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
