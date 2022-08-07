import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { categories } from '../../../utils/categories';
import { Category } from '../../atoms/Category';

import { styles } from './styles';

type Props = {
    categorySelected: string;
    selectCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, selectCategory }: Props) {
    return (
        <ScrollView 
            horizontal 
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => {
                    return (
                        <Category 
                            key={category.id} 
                            title={category.title}
                            icon={category.icon}
                            checked={category.id === categorySelected}
                            onPress={() => selectCategory(category.id)}
                        />
                    )
                })
            }
        </ScrollView>
    );
}