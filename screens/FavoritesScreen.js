import { Text, StyleSheet } from 'react-native';

function FavoritesScreen() {
  return <Text style={styles.rootContainer}>The favorites screen!</Text>;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {  
    backgroundColor: '#3f2f25'
  }
});
