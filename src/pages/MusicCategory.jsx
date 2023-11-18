import { Box, Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function MusicCategory() {
    return (
        <Box className="content">
            <Navbar />
            <Heading>Categoria de música</Heading>
        </Box>
    );
}

export default MusicCategory;