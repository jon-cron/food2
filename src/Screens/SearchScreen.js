import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../Components/SearchBar.js";


const SearchScreen = () => {
  const [term, setTerm] = useState('')
  // console.log(term)
  return (
    <View>
      <SearchBar 
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log(`${term} was submitted`)}/>
    </View>
  )
};


const styles = StyleSheet.create({

})



export default SearchScreen;