import { Box, Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function LiteratureCategory(){
    return(
        <Box className="content">
            <Navbar />
            <Heading>Categoria de literatura</Heading>
        </Box>
    );
}

export default LiteratureCategory;