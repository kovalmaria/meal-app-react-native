import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';

function MealsList({items}) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.idMeal,
      title: item.strMeal,
      imageUrl: item.strMealThumb,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.idMeal}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
