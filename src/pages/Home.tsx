import { Box } from "@chakra-ui/react";
import Card from "../components/Card";
import Header from "../components/Header";

const Home = () => {
    return (
		<div>
			<Header />
            <Box mt='20' mx='auto' width={{sm: '100%', lg: '80%'}}>
                <Card />
            </Box>
		</div>
	);
}

export default Home
