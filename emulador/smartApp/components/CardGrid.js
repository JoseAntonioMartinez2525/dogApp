import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardGrid = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
  },
});

export default CardGrid;
