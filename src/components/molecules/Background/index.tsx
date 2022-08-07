import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { theme } from '../../../global/styles/theme';

import { styles } from './styles';

type Props = {
  children: React.ReactNode
}

export function Background({children}: Props) {
  const {secondary80, secondary100} = theme.colors 
  // IMPORTANTE DIZER Q SE TIVER UM BACKROUND EM QUALQUER OUTRO STYLE NO FILHO ELE SOBREESCREVE O NOSSO LINEAR 

  return (
    <LinearGradient 
      style={styles.container}
      colors={[secondary80, secondary100]}  
    >
      {children}
    </LinearGradient>
  );
}