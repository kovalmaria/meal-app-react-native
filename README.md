# 🍽️ Meal App

**Meal App** is a mobile application built with **React Native (Expo)** that allows users to explore and save recipes from the public [TheMealDB API](https://www.themealdb.com/).  
Users can browse meal categories, view detailed recipes, see ingredients and instructions, and add meals to their favorites.

---

## ✨ Features

✅ Browse meal categories  
✅ View meals by category  
✅ See detailed recipe information (image, ingredients, steps)  
✅ Add or remove meals from favorites  
✅ Persist favorites using **Redux**  
✅ Data fetched from **TheMealDB API**  
✅ Clean, responsive UI  

---

## 🛠️ Tech Stack

- **React Native (Expo)**
- **React Navigation**
- **Redux Toolkit**
- **TheMealDB API**
- **JavaScript (ES6+)**

---

## 📱 Screens

- **CategoriesScreen** - Displays all meal categories
- **MealsOverviewScreen** - Lists meals for a selected category
- **MealDetailScreen** - Shows detailed recipe info (image, ingredients, steps)
- **FavoritesScreen** - Displays user’s saved favorite meals

---

## 🚀 Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/kovalmaria/meal-app-react-native.git
    ```

2. **Install dependencies**
    ```bash
    cd meal-app-react-native
    npm install
    ```

3. **Start the development server**
    ```bash
    npx start
    ```

4. **Run the app on your device remotely**
    - Install the **Expo Go** app from the [App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779) or [Google Play (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent).
    - Scan the QR code displayed in your terminal or browser after running `npx expo start`.
    - The app will open on your device via Expo Go.

5. **Alternatively, use an emulator or simulator**
    - For iOS: Press `i` in the Expo CLI to open in the iOS Simulator (macOS only).
    - For Android: Press `a` in the Expo CLI to open in an Android emulator.
