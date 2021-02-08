import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';
import { FC } from 'react';
import { ModalProp } from '../models/modal.interface';


const ModalWrap: FC<ModalProp> = ({ isOpen, onClose, title, children }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default ModalWrap;
