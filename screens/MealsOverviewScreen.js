import { useEffect, useLayoutEffect, useState } from 'react';

import MealsList from '../components/MealsList/MealsList';
import { getMealsByCategory } from '../services/meals-api';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const [meals, setMeals] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: catId,
    });
  }, [catId, navigation]);

  useEffect(() => {
    async function fetchMeals() {
        const data = await getMealsByCategory(catId);
        setMeals(data || []);
      }
    fetchMeals();
  }, []);



  return <MealsList items={meals} />;
}

export default MealsOverviewScreen;
