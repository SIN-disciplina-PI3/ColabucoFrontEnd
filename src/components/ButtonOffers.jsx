import { Box, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";

function ButtonOffers() {
    const [buttonStyles, setButtonStyles] = useState({
        promocao: { width: '100%', height: '64px', backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
    });

    const formatCategoryName = (category) => {
        return category === 'promocao' ? 'PROMOÇÃO' : category.toUpperCase();
    };

    const handleButtonClick = (category) => {
        setButtonStyles((prevStyles) => ({
            ...prevStyles,
            [category]: {
                ...prevStyles[category],
                backgroundColor: prevStyles[category].backgroundColor === 'white' ? '#09F' : 'white',
                borderBottomWidth: prevStyles[category].borderBottomWidth === '3px' ? '5px' : '3px',
                borderRightWidth: prevStyles[category].borderRightWidth === '3px' ? '5px' : '3px',
            },
        }));
    };

    return (
        <>
        <Stack>
            {Object.keys(buttonStyles).map((category) => (
            <Box key={category}>
                <Button className="categoriaFiltros" _hover={{ backgroundColor: 'none' }} {...buttonStyles[category]} onClick={() => handleButtonClick(category)}>{formatCategoryName(category)}</Button>
            </Box>))}
            </Stack>
        </>
    )


}

export default ButtonOffers