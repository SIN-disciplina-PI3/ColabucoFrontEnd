import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react'
import theme from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ChakraProvider>

    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);
