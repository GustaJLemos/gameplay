import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles';
import { theme } from '../../../global/styles/theme';

type Props = TouchableOpacityProps

export function ButtonAdd({...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <MaterialCommunityIcons 
            name='plus'
            color={theme.colors.heading}
            size={24}
        />
    </TouchableOpacity>
  );
}