import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import { FC } from 'react';
import { PostType } from '../models/post.interface'; //add

interface CardProps {
	onOpen: () => void;
	setIsEdit: (state: boolean) => void;
	post: PostType; //add
}

const Card: FC<CardProps> = ({ onOpen, setIsEdit, post }) => {
	return (
		<Box w='100%' borderWidth='1px' borderRadius='lg'>
			<Flex direction={{ sm: 'column', lg: 'row' }}>
				<Image
					src='https://static.thenounproject.com/png/1087123-200.png'
					alt='place holder image'
					w={{ sm: '100%', lg: '20%' }}
				/>
				<Box p='6' w={{ sm: '100%', lg: '80%' }}>
					<Box
						mt='1'
						fontWeight='bold'
						fontSize='2xl'
						as='h1'
						lineHeight='tight'
						isTruncated
					>
						{post.title}
					</Box>
					<Box mt='4'>{post.body}</Box>
					<Flex mt='10' align='center' justify='center'>
						<Button colorScheme='red' variant='outline' mr='4'>
							Delete
						</Button>
						<Button
							color='white'
							borderRadius='lg'
							background='teal.500'
							_hover={{ background: 'teal' }}
							onClick={() => {
								onOpen();
								setIsEdit(true);
							}}
						>
							Edit
						</Button>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default Card;
