import { Box, Button, Input, Text, Textarea } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { ModalProp } from '../models/modal.interface';
import ModalWrap from './ModalWrap';

interface EditProps extends ModalProp {
	setIsEdit: (state: boolean) => void;
}

const Edit: FC<EditProps> = ({ isOpen, onClose, setIsEdit }) => {
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
				setIsEdit(false);
			}}
			title='Edit Post'
		>
			<form onSubmit={handleSubmit}>
				<Box mb='8'>
					<Text mb='8px'>Title</Text>
					<Input
						type='text'
						value={value.title}
						onChange={handleChange}
						name='title'
					/>
				</Box>
				<Box mb='8'>
					<Text mb='8px'>Body</Text>
					<Textarea
						value={value.body}
						onChange={handleChange}
						name='body'
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
