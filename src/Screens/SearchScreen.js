import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../Components/SearchBar.js";


const SearchScreen = () => {
  const [term, setTerm] = useState('')
  console.log(term)
  return (
    <View>
      <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)}/>
    </View>
  )
};


const styles = StyleSheet.create({

})



export default SearchScreen;