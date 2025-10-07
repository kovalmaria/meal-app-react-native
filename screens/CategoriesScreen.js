import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { useEffect, useState } from 'react';
import { getCategories } from '../services/meals-api';

function CategoriesScreen({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
        const data = await getCategories();
        setCategories(data);
      }
    fetchCategories();
  }, []);

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.strCategory,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.strCategory}
        color={'#e4baa1'}
        onPress={pressHandler}
        image={itemData.item.strCategoryThumb}
      />
    );
  }

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.idCategory}
      renderItem={renderCategoryItem}
      numColumns={2}
      style={{ flex: 1, backgroundColor: '#3f2f25' }}
    />
  );
}

export default CategoriesScreen;
