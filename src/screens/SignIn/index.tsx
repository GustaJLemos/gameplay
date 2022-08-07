import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';

import illustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/atoms/ButtonIcon';
import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image 
        source={illustrationImg} 
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'} 
          e organize suas {'\n'} 
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title='Entrar com o Discord' 
          activeOpacity={.8}
          onPress={handleSignIn} 
        />
      </View>
    </View>
  );
}