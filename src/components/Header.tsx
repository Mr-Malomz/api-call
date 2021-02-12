import { Button, Flex, Heading, Link } from '@chakra-ui/react';
import { FC } from 'react';

interface HeaderProp {
	onOpen: () => void;
	setIscreate: (state: boolean) => void;
}

const Header: FC<HeaderProp> = ({ onOpen, setIscreate }) => {
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
				onClick={() => {
					onOpen();
					setIscreate(true)
				}}
			>
				Create
			</Button>
		</Flex>
	);
};

export default Header;
