import { useFonts } from 'expo-font';
import React from 'react';
import { SignIn } from './src/screens/SignIn';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { StatusBar } from 'react-native';
import { Background } from './src/components/molecules/Background';
import { Routes } from './src/routes';
import { Loading } from './src/components/atoms/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium, 
    Rajdhani_500Medium, 
    Rajdhani_700Bold
  })

  if(!fontsLoaded) {
    // esse componente vai segurar a tela de splash pra gente até tudo no nosso app carregar, inclusive as nossas fontes
    return <Loading />
  }

  return (
    <Background>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent' 
        translucent
      />
      <Routes />
    </Background>
  );
}
