import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "../Components/SearchBar.js";
import useResults from "../Hooks/useResults.js";
import ResultsList from "../Components/ResultsList.js";



const SearchScreen = () => {
  const filterResultsByPrice = (price) => {
    return results.filter(r => {
      return r.price === price;
    });
    };
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults();
  return (
    <>
      <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}/>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </ScrollView>
    </>
  )
};


const styles = StyleSheet.create({

})



export default SearchScreen;