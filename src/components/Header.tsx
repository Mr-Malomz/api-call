import { Button, Flex, Heading, Link } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			wrap='wrap'
			padding='1.5rem'
			bg='teal.500'
			color='white'
			// {...props}
		>
			<Flex align='center' mr={5}>
				<Heading as='h1' size='lg' letterSpacing={'-.1rem'}>
					<Link href='/'>api-call</Link>
				</Heading>
			</Flex>
			<Button
				color='white'
				background='gray.600'
				_hover={{ background: 'gray.800' }}
			>
				Create
			</Button>
		</Flex>
	);
};

export default Header;
