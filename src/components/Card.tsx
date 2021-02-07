import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';

const Card = () => {
	return (
		<Box w='100%' borderWidth='1px' borderRadius='lg'>
			<Flex direction={{ sm: 'column', lg: 'row' }}>
				<Image
					src='https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg'
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
						Image Title for placeholder element
					</Box>
					<Box mt='4'>
						quia et suscipit\nsuscipit recusandae consequuntur
						expedita et cum\nreprehenderit molestiae ut ut quas
						totam\nnostrum rerum est autem sunt rem eveniet
						architecto
					</Box>
					<Flex mt='10' align='center' justify='center'>
						<Button
							colorScheme='red'
							variant='outline'
							// _hover={{ background: 'gray.800' }}
							mr='4'
						>
							Delete
						</Button>
						<Link
							color='white'
							px='8'
							py='2'
							fontWeight='semibold'
							borderRadius='lg'
							background='teal.500'
							_hover={{ background: 'teal' }}
						>
							Edit
						</Link>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default Card;
