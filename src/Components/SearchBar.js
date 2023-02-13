import { Text, View, StyleSheet, TextInput } from 'react-native'
import React  from 'react'
import {Feather} from '@expo/vector-icons'
// NOTE to use icons import the library from expo and use the library as a component and the name is the exact icon you wish to use.
// NOTE 'https://icons.expo.fyi/' use this to find icons and which library to use
const SearchBar = ({term, onTermChange}) => {
    return (
      <View style={styles.bg}>
        <Feather 
          name="search" style={styles.iconStyle}/>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          // NOTE it is generally a good idea to set autoCapitalize="none" and autoCorrect={false} in an input field
          onChangeText={newTerm => onTermChange(newTerm)}
          value={term}
          style={styles.inputStyle}
          placeholder="   Search"/>
      </View>
    )
  }
const styles = StyleSheet.create({
  bg:{
    backgroundColor: '#DFF0F2',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    // alignItems: "center"
  },
  inputStyle:{
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 10
  }
})
export default SearchBar