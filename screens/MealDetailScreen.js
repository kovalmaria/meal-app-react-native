import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import { addFavorite, removeFavorite } from '../store/favorites';
import { getMealById } from '../services/meals-api';

function MealDetailScreen({ route, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const { mealId } = route.params;

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const [meal, setMeal] = useState(null);

  const changeFavoriteStatusHandler = useCallback(() => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }, [dispatch, mealId, mealIsFavorite]);

  useEffect(() => {
    async function fetchMeal() {
      const data = await getMealById(mealId);
      setMeal(data);
    }
    fetchMeal();
  }, [mealId]);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

const ingredients = [];
if (meal) {
  const seen = new Set();
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]?.trim();
    const measure = meal[`strMeasure${i}`]?.trim();

    if (ingredient && ingredient.length > 0) {
      const text = measure ? `${ingredient} - ${measure}` : ingredient;
      if (!seen.has(text)) {
        ingredients.push(text);
        seen.add(text);
      }
    }
  }
}

  if (!meal) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
      <Text style={styles.title}>{meal.strMeal}</Text>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{meal.strInstructions}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '90%',
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
