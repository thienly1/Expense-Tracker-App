# Set Up React Navigation Native Packages in Expo
1. npm install @react-navigation/native
2. expo install react-native-screens react-native-safe-area-context
3. npm install @react-navigation/native-stack
4. npm install @react-navigation/bottom-tabs
# if you got error: can't find @react-navigation/native packages
- reason: stale cache
fix: run
  + npm start -c (expo)
  + npx react-native start --reset-cache

