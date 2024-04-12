import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onChangeText, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
});

export default SearchBar;
