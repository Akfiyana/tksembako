import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TambahBarang from './Screen/TambahBarang';
import LihatBarang from './Screen/LihatBarang';
import EditBarang from './Screen/EditBarang';
import Login from './Login';
import MainMenu from './Screen/MainMenu';


class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() {
    const Stack = createNativeStackNavigator(); 
    return (  
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='LihatBarang' component={LihatBarang}/>
        <Stack.Screen name='EditBarang' component={EditBarang}/>
        <Stack.Screen name='Tambah Barang' component={TambahBarang}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Main Menu' component={MainMenu}/>
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}
 
export default App;