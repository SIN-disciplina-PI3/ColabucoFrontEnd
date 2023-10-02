import { Button, Image } from "@chakra-ui/react";

function ArtistProfile(props){
    return(
        <Button mx={4} w={'250px'} h={'250px'} border={'solid 4px black'} borderRadius={'100%'} bg={'none'}>
            <Image src={props.picture} />
        </Button>
    );
}

export default ArtistProfile;