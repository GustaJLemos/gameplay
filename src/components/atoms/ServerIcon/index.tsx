import React from 'react';
import { Image, View } from 'react-native';
import DiscordSvg from '../../../assets/discord.svg'
import { theme } from '../../../global/styles/theme';

import { styles } from './styles';

export function ServerIcon() {
  const uri = 'https://www.freepik.com/free-photos-vectors/discord-icon'

  return (
    <View style={styles.image}>
      <DiscordSvg  width={54} height={54} />
    </View>
  );
}