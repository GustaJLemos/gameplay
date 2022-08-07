import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { AppointmentProps } from '../../../types/AppointmentProps';
import { categories } from '../../../utils/categories';

import PlayerSvg from '../../../assets/player.svg'
import CalendarSvg from '../../../assets/calendar.svg'

import { styles } from './styles';
import { theme } from '../../../global/styles/theme';
import { ServerIcon } from '../../atoms/ServerIcon';

type Props = TouchableOpacityProps & {
    data: AppointmentProps
};

export function Appointment({ data, ...rest }: Props) {
    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.server
    const { primary, on } = theme.colors

  return (
    <TouchableOpacity {...rest}>
        <View style={styles.container}>
            <ServerIcon />

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        { data.server.name }
                    </Text>

                    <Text style={styles.category}>
                        { category.title }
                    </Text>
                </View>

                <View style={styles.footer}>
                    <View style={styles.dateInfo}>
                        <CalendarSvg />

                        <Text style={styles.date}>
                            { data.date }
                        </Text>
                    </View>

                    <View style={styles.playersInfo}>
                        <PlayerSvg fill={owner ? primary : on}/>

                        <Text style={[styles.player, {color: owner ? primary : on}]}>
                            { owner ? 'Anfitrião' : 'Visitante'}
                        </Text>
                    </View>
                </View>
                
            </View>
        </View>
    </TouchableOpacity>
  );
}