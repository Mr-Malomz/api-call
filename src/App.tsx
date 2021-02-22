import './App.css';
import Header from './components/Header';
import { Box, useDisclosure } from '@chakra-ui/react';
import Card from './components/Card';
import Create from './components/Create';
import { useEffect, useState } from 'react';
import Edit from './components/Edit';
import { PostType } from './models/post.interface'; //add
import { Post } from './api/api';

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isCreate, setIsCreate] = useState(false);
	const [isEdit, setIsEdit] = useState(false);

	//add
	const [posts, setPosts] = useState<PostType[]>([]);
	const [isError, setIsError] = useState<boolean>(false);

	//add
	useEffect(() => {
		Post.getPosts()
			.then((data) => {
				setPosts(data);
			})
			.catch((err) => {
				setIsError(true);
			});
		return () => {};
	}, []);

	return (
		<>
			<div>
				<Header onOpen={onOpen} setIscreate={setIsCreate} />
				<Box mt='20' mx='auto' width={{ sm: '100%', lg: '80%' }}>
					{/* Modify this section */}
					{isError ? (
						<Box
							mt='1'
							fontWeight='bold'
							fontSize='xl'
							as='h6'
							isTruncated
							color='red'
						>
							Oop!!! Error getting posts
						</Box>
					) : (
						posts.map((post) => (
							<Card
								key={post.id}
								onOpen={onOpen}
								setIsEdit={setIsEdit}
								post={post}
							/>
						))
					)}
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
