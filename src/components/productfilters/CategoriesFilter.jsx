import { Button, Stack, WrapItem, Wrap } from "@chakra-ui/react";
import { useState } from "react";

function CategoriesFilter() {
    const [buttonStyles, setButtonStyles] = useState({
        cinema: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        musica: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        literatura: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        artesVisuais: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        artesanato: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        papelaria: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        digital: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
    });

    const formatCategoryName = (category) => {
        switch (category) {
            case 'musica' :
                return 'MÚSICA';
            case 'artesVisuais' :
                return 'ARTES VISUAIS';
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
            <Stack>
                <Wrap spacing={3}>
                    {Object.keys(buttonStyles).map((category) => (
                        <WrapItem key={category}>
                            <Button className="categoriaFiltros" _hover={{ backgroundColor: 'none' }} {...buttonStyles[category]} onClick={() => handleButtonClick(category)}>{formatCategoryName(category)}</Button>
                        </WrapItem>))}
                </Wrap>
            </Stack>
        </>
    );
}

export default CategoriesFilter;