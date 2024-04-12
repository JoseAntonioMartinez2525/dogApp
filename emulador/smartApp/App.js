import React from 'react';
import { View } from 'react-native';
import SearchBar from './components/SearchBar';
import CardGrid from './components/CardGrid';
import HeaderWithLogo from './components/HeaderWithLogo';


const App = () => {
  return (
    <View>
      <HeaderWithLogo title="Mi Aplicación" />
      <SearchBar
        placeholder="Buscar..."
        onChangeText={(text) => console.log(text)}
      />
      <CardGrid title="Título de la carta" description="Descripción de la carta." />
    </View>
  );
};

export default App;

