import { Box, Flex, Text, IconButton, Image, Spacer, Grid } from "@chakra-ui/react";
import addProductButton from '../assets/addbutton.png';
import { useState } from "react";
import NewProduct from "./NewProduct";

function ArtistProducts(){
    const [productRegisterPopUpVisible, setPopupVisible] = useState(false);

    const handleRegistProductButton = () => {
        setPopupVisible(true);
    }

    const handleClosePopup = () => {
        setPopupVisible(false);
    }

    return(
        <Box>
            <Flex className="borda" bgColor={'#DFF362'} h={'106.98px'} p={'41px 40px'} align={'center'} mb={'30px'}>
                <Text fontWeight={'800'} fontSize={'34px'}>PRODUTOS</Text>
                <Spacer/>
                <IconButton isRound onClick={handleRegistProductButton}><Image src={addProductButton}/></IconButton>
                {productRegisterPopUpVisible && <NewProduct onClose={handleClosePopup}/>}
            </Flex>
            <Grid>

            </Grid>
        </Box>
    );
}

export default ArtistProducts