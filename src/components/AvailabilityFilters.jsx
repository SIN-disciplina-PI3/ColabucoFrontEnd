import { Button, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";
import '../styles/home.css';

function AvailabilityFilters() {
    const [buttonStyles, setButtonStyles] = useState({
        preVenda: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px'},
        prontaEntrega: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px'},
        porEncomenda: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px'},
    });

    const formatCategoryName = (category) => {
        switch (category) {
        case 'preVenda' :
            return 'PRÉ-VENDA';
        case 'prontaEntrega' :
            return 'PRONTA ENTREGA'
        case 'porEncomenda' :
            return'POR ENCOMENDA';
        default :
            return category.toUpperCase();
        }
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
            <Stack pt='100px'>
                <Stack>
                    {Object.keys(buttonStyles).map((category) => (
                        <Box key={category}>
                            <Button w='100%'className="categoriaFiltros" _hover={{ backgroundColor: 'none' }} {...buttonStyles[category]} onClick={() => handleButtonClick(category)}>{formatCategoryName(category)}</Button>
                        </Box>))}
                </Stack>
            </Stack>
        </>
    );
}

export default AvailabilityFilters;