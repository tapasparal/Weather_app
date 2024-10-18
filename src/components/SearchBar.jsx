import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({ fetchWeatherData }) => {
  const [cityName, setCityName] = useState('');
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={{ fontSize: 25, marginLeft: 50 }}
        placeholder='Enter city name'
        value={cityName}
        onChangeText={(e) => setCityName(e)}
      />
      <EvilIcons name="search" size={28} color="black" onPress={()=>fetchWeatherData(cityName)} />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 20,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: 'lightgrey',
    borderColor: 'lightgrey'
  }
})