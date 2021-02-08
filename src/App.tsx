import './App.css';
import Header from './components/Header';
import { Box, useDisclosure } from '@chakra-ui/react';
import Card from './components/Card';
import Create from './components/Create'
import { useState } from 'react';

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCreate, setIsCreate] = useState(false)
	return (
		<>
			<div>
				<Header onOpen={onOpen} setIcreate={setIsCreate}/>
				<Box mt='20' mx='auto' width={{ sm: '100%', lg: '80%' }}>
					<Card />
				</Box>
			</div>
			{/* Create post form */}
			<Create isOpen={isOpen} onClose={onClose} />
		</>
	);
}

export default App;
