import './App.css';
import Header from './components/Header';
import { Box, useDisclosure } from '@chakra-ui/react';
import Card from './components/Card';
import Create from './components/Create';
import { useState } from 'react';
import Edit from './components/Edit';

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isCreate, setIsCreate] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	return (
		<>
			<div>
				<Header onOpen={onOpen} setIscreate={setIsCreate} />
				<Box mt='20' mx='auto' width={{ sm: '100%', lg: '80%' }}>
					<Card onOpen={onOpen} setIsEdit={setIsEdit} />
				</Box>
			</div>
			{/* Create post form */}
			{isCreate && (
				<Create
					isOpen={isOpen}
					onClose={onClose}
					setIsCreate={setIsCreate}
				/>
			)}
			{isEdit && (
				<Edit isOpen={isOpen} onClose={onClose} setIsEdit={setIsEdit} />
			)}
		</>
	);
}

export default App;
