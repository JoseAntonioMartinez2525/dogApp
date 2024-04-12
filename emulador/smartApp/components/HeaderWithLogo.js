import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HeaderWithLogo = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/favicon.png')} // Ruta de tu logo
        style={styles.logo}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HeaderWithLogo;
