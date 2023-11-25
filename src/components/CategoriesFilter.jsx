import { Button, Stack, WrapItem, Wrap, useColo } from "@chakra-ui/react";
import { useState } from "react";
import '../styles/home.css';

function CategoriesFilter() {
    const [buttonStyles, setButtonStyles] = useState({
        cinema: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        musica: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        literatura: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        artesVisuais: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        artesanato: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        papelaria: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px' },
        digital: { backgroundColor: 'white', borderBottomWidth: '3px', borderRightWidth: '3px'},
    });

    const handleButtonClick = (category) => {
        // Atualiza o estado com a nova largura do border do botão clicado
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
                <Wrap spacing={3}>
                {Object.keys(buttonStyles).map((category) => (
                    <WrapItem key={category}>
                        <Button className="categoriaFiltros" _hover={{ backgroundColor: 'none' }} {...buttonStyles[category]} onClick={() => handleButtonClick(category)}>{category.toUpperCase()}</Button>                   
                    </WrapItem>))}
                </Wrap>
            </Stack>

        </>

    );
}

export default CategoriesFilter;