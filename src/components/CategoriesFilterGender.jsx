import { Button, Stack, WrapItem, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import '../styles/home.css';

function CategoriesFilterGenres() {
    const [buttonStyles, setButtonStyles] = useState({
        roupa: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        grafite: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        rock: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        animes: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        mpb: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        culturaPop: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        digital: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
    });

    const formatCategoryName = (category) => {
        return category === 'culturaPop' ? 'CULTURA POP' : category.toUpperCase();
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
                <Wrap spacing={3.5}>
                    {Object.keys(buttonStyles).map((category) => (
                        <WrapItem key={category}>
                            <Button className="categoriaFiltros" _hover={{ backgroundColor: 'none' }} {...buttonStyles[category]} onClick={() => handleButtonClick(category)}>{formatCategoryName(category)}</Button>
                        </WrapItem>))}
                </Wrap>
            </Stack>
        </>
    );
}

export default CategoriesFilterGenres;