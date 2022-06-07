import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, FlatList } from 'react-native';
const data = [
  { name: 'Harry Potter and the Sorcerers Stone', id: '1' },
  { name: 'Harry Potter and the Chamber of Secrets', id: '2' },
  { name: 'Harry Potter and the Prisoner of Azkaban', id: '3' },
  { name: 'Harry Potter and the Goblet of Fire', id: '4' },
  { name: 'Harry Potter and the Order of the Phoenix', id: '5' },
  { name: 'Harry Potter and the Half-Blood Prince', id: '6' },
  { name: 'Harry Potter and the Deathly Hallows', id: '7' },
  { name: 'A Example', id: '8' },
  { name: 'B Example', id: '9' },
  { name: 'C Example', id: '10' }
];
const App = () =>{
  const [dataFromState, setData] = useState(data);

  const item = ({item}) =>{
    return(
        <View style={{backgroundColor:"green"}}>
          <Text style={{ fontSize: 34}}>{item.name}</Text>
        </View>
    );
  }
  const searchName = (input)=>{
    
    let data = dataFromState
    let searchData = data.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLowerCase())
    });
    setData(searchData)
  }
  
  return (
    <View style={styles.container}>
      <View>
      <TextInput style={styles.search}
        placeholder="Search Book"
        onChangeText={(input) => {
          searchName(input);
        }}

      />
      </View>
      

      
      <FlatList style={styles.item}
        data={dataFromState} 
        renderItem={ item }
        keyExtractor={(item, index) => index.toString()} 
      />
    

      

    </View>
    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'gray',
  },
  item: {
    flex: 1,
    marginHorizontal: 500,
    marginTop: 24,
    padding: 30,
    textAlign: 'center',
    backgroundColor: 'blue',
    fontSize: 24,
  },
  search: {
    width: '25%',
    backgroundColor: 'grey',
    borderRadius: '15px',
    border: '1px #000 solid',
    padding: '5px 5px 5px 25px',
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 700,
    zIndex: 5,
    
  },
  
});
export default App;