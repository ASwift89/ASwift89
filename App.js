import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, FlatList,Linking  } from 'react-native';
import { ImageBackground } from 'react-native'
import { TouchableOpacity } from "react-native";

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
     

        <View>
          <TouchableOpacity style={styles.item} onPress={()=> Linking.openURL("https://www.bing.com/ck/a?!&&p=3aaf123898813a2b04b8fcf0be25b88c9b8ac848b93a2f88d88cd64ea3257308JmltdHM9MTY1NTA3ODQwMCZpZ3VpZD0xNjEyZmNlMS1lNGY1LTYyMDctM2ZjMC1lZDhhZTU3YjYzNDkmaW5zaWQ9NTE4OA&ptn=3&fclid=1612fce1-e4f5-6207-3fc0-ed8ae57b6349&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGFycnlfUG90dGVyX2FuZF90aGVfUGhpbG9zb3BoZXIlMjdzX1N0b25l&ntb=1")}>
          <Text style={{ fontSize: 34}}>{item.name}</Text>
          
          </TouchableOpacity>
          
          

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
      
      


      <FlatList style={styles.item}
        data={dataFromState} 
        renderItem={ (item)}
        keyExtractor={item=>item.id} 
      />
      </View>
    

      

    </View>
    
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'cyan',
  },
  item: {
    flex: 1,

    marginTop: 24,
    padding: 30,
    textAlign: 'center',
    backgroundImage: 'url: https://th.bing.com/th/id/R.3c5b8309e28709b59af7bb92114d0bec?rik=je%2bPNWXaWCrr1w&riu=http%3a%2f%2fallhdwallpapers.com%2fwp-content%2fuploads%2f2015%2f07%2fHDR-5.jpg&ehk=gyRVeNOG2QT4DF7ckGnJdj%2bDi4t%2bwlmcsbmVe5vm770%3d&risl=&pid=ImgRaw&r=0',
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
