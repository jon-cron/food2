import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from "../Components/SearchBar.js";
import yelp from "../Services/yelp.js";

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  // console.log(term)

  const searchApi = async () => {
   const res = await yelp.get('/search', {params: {
    limit: 20,
    term,
    location: 'boise'
   }})
    setResults(res.data.businesses);
  }
  return (
    <View>
      <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}/>
        <Text>We have found {results.length} results</Text>
    </View>
  )
};


const styles = StyleSheet.create({

})



export default SearchScreen;