import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Appointment } from '../../components/molecules/Appointment';
import { ButtonAdd } from '../../components/atoms/ButtonAdd';
import { ListHeader } from '../../components/atoms/ListHeader';
import { CategorySelect } from '../../components/molecules/CategorySelect';
import { AppointmentProps } from '../../types/AppointmentProps';
import { Profile } from '../Profile';

import { styles } from './styles';
import { ListDivider } from '../../components/atoms/ListDivider';

export function Home() {
  const [category, setCategory] = useState('');

  const appointments: AppointmentProps[] = [
    {
      id: '1',
      server: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida!'
    },
    {
      id: '2',
      server: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida!'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  } 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Profile />
          <ButtonAdd />
      </View>

      <CategorySelect 
        categorySelected={category}
        // dar uma olhada aq, pq eu n preciso usar a arrow function para passar essas props
        selectCategory={handleCategorySelect}
      />
        
      <View style={styles.content}>
        <ListHeader 
          title='Partidas agendadas' 
          subtitle='Total 6'
        />

        <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => (
            <Appointment data={item}/>
          )}
        />
        {/* flatList é mais performatica q scroll, ela da mais foco para os elementos que estão em tela, ela n renderiza tudo de uma vez, e sim de acordo com
        que o conteúdo vai renderizando, por isso quando falamos de coisas pequenas usamos a scroll, e quando falamos de coisas maiores, com vários itens, usamos a flat */}
      </View>
    </View>
  );
}