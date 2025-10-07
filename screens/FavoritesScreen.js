import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList/MealsList';
import { useEffect, useState } from 'react';
import { getMealById } from '../services/meals-api';

function FavoritesScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const [favoriteMeals, setFavoriteMeals] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const mealsPromises = favoriteMealIds.map((id) => getMealById(id));
        const meals = await Promise.all(mealsPromises);
        setFavoriteMeals(meals); 
      } catch (error) {
        console.error("Error fetching favorite meals:", error);
      }
    }

    if (favoriteMealIds.length > 0) {
      fetchFavorites();
    } else {
      setFavoriteMeals([]);
    }
  }, [favoriteMealIds]);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
