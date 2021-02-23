import './App.css';
import Header from './components/Header';
import { Box, useDisclosure } from '@chakra-ui/react';
import Card from './components/Card';
import Create from './components/Create';
import { useEffect, useState } from 'react';
import Edit from './components/Edit';
import { PostType } from './models/post.interface';
import { Post } from './api/api';

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isCreate, setIsCreate] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [postID, setPostID] = useState<number | null>(null)

	const [posts, setPosts] = useState<PostType[]>([]);
	const [isError, setIsError] = useState<boolean>(false);

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
						//Modify this section 
						posts.map((post) => (
							<Card
								key={post.id}
								onOpen={onOpen}
								setIsEdit={setIsEdit}
								post={post}
								setPostID={setPostID}
								posts={posts} //add
								setPosts={setPosts} //add
							/>
						))
					)}
				</Box>
			</div>

			{isCreate && (
				<Create
					isOpen={isOpen}
					onClose={onClose}
					setIsCreate={setIsCreate}
					posts={posts}
					setPosts={setPosts}
				/>
			)}
			{/* modify edit component with posts and setPosts */}
			{isEdit && (
				<Edit
					isOpen={isOpen}
					onClose={onClose}
					setIsEdit={setIsEdit}
					posts={posts}
					setPosts={setPosts}
					postID= {postID}
					setPostID ={setPostID}
				/>
			)}
		</>
	);
}

export default App;
