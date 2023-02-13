import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../Components/SearchBar.js";
import yelp from "../Services/yelp.js";

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  // console.log(term)

  const searchApi = async () => {
   const response = await yelpApi.get('/search')
    setResults(response.data.businesses);
  }
  return (
    <View>
      <SearchBar 
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log(`${term} was submitted`)}/>
        <Text>We have found {res.length} results</Text>
    </View>
  )
};


const styles = StyleSheet.create({

})



export default SearchScreen;