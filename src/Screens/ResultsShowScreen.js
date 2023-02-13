import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import yelp from "../Services/yelp.js"


const ResultShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
const id = navigation.getParam('id');

const getResult = async (id) => {
  const res = await yelp.get(`/${id}`)
  setResult(res.data)
  console.log(result)
};
useEffect(() => {
getResult(id);
}, []);

if(!result){
  return null;
}

return (
  <>
    <Text>{result.name}</Text>
    <FlatList
    data={result.photos}
    keyExtractor={(photo) => photo}
    renderItem={({item}) => {
      return <Image style={styles.image} source={{uri: item}}/>
    }}
    />
  </>
)
};

const styles = StyleSheet.create({
image:{
  height: 200,
  width: 300
}
});


export default ResultShowScreen;