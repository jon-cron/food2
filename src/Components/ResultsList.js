import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from "./ResultDetail.js";
import { withNavigation } from "react-navigation";


const ResultsList = ({title, results, navigation}) => {


return (
  <View style={styles.container}>
    <Text style={styles.titleStyle}>{title}</Text>
    <FlatList 
    horizontal
    showsHorizontalScrollIndicator={false}
    data={results}
    keyExtractor={(result) => result.id}
    renderItem={({item}) => {
      return (
        <TouchableOpacity
        onPress={() => navigation.navigate('Result', {id: item.id})}
        >
      <ResultDetail result={item}/>
        </TouchableOpacity>
      )
    }}
    />
  </View>
)
};

const styles = StyleSheet.create({
  titleStyle:{
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container:{
    marginBottom: 10
  }
});


export default withNavigation(ResultsList);