import React, { Component } from 'react';
import { StyleSheet, Platform, View,ActivityIndicator, Text, FlatList, TouchableOpacity} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const url = 'http://192.168.43.180/tksembako/backendApp/lihatbarang.php'

class LihatBarang extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            dataapi : [],
            isLoading:true
        };
        this.arrayholder =[];
    };
    componentDidMount(){
        this.getData(url).then(data=>{
            this.setState({dataapi:data})
        })
    };
    getData = async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        return data
    };
   /* renderSeparator =()=>{
        return(
            <View
            style={{
                height: 1,
                width: '86%',
                backgroundColor: '#CED0CE',
                
            }}
            />
        );
    };*/
    GetBarangIDFunction = (
        id_barang,
        nama_barang,
        harga_barang,
        stok_barang,
        satuan_barang
      ) => {
        this.props.navigation.navigate("EditBarang", {
          ID: id_barang,
          NAMA: nama_barang,
          HARGA: harga_barang,
          STOK: stok_barang,
          SATUAN: satuan_barang
        });
      };
    /*searchFilterFunction = text=>{
        this.setState({
            value : text,
        });
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
            const textData = text.toUpperCase();
      
            return itemData.indexOf(textData) > -1;
          });
          this.setState({
            data: newData,
          });
    };
    renderHeader = () => {
        return (
          <SearchBar
            placeholder="Type Here..."
            lightTheme
            round
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />
        );
      };
*/
    render() {
        //if (this.state.loading) {
        //    return (
        //    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //    <ActivityIndicator />
         //     </View>
        //    );
        //  };
        return ( 
            <View style={{flex:1}}>
                <FlatList
                data = {this.state.dataapi}
                renderItem = {({item,index})=>(
                    <View style={{
                        backgroundColor:'#212121',
                        marginTop:5,
                        marginHorizontal:20,
                        padding:20,
                        borderRadius:10,
                    }}>
                        <Text style={{color:'white'}}
                        style={styles.rowViewContainer}
                        onPress={this.GetBarangIDFunction.bind(
                          this,
                          item.id_barang,
                          item.nama_barang,
                          item.harga_barang,
                          item.stok_barang,
                          item.satuan_barang,
                        )}
                        >Kode : {item.id_barang}</Text>
                        <Text style={{color:'white'}}>Nama : {item.nama_barang}</Text>
                        <Text style={{color:'white'}}>harga : {item.harga}</Text>
                        <Text style={{color:'white'}}>Stok : {item.stok} {item.satuan}</Text>
                    </View>
                )}
                
                />
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={styles.TouchableOpacityStyle}
                  onPress={()=>this.props.navigation.push('EditBarang')}
                  >
                     <Text style={styles.TextStyle}>
                      {" "}
                        EDIT{" "}
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  activeOpacity={0.4}
                  style={styles.TouchableOpacityStyle}
                  onPress={()=>this.props.navigation.push('Main Menu')}
                  >
                     <Text style={styles.TextStyle}>
                      {" "}
                        Home{" "}
                      </Text>
                  </TouchableOpacity>
            </View>
         );
    }
}
 
export default LihatBarang;

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: "25%",
    backgroundColor: "#30cb63"
  },

  TextStyle: {
    color: "#fff",
    textAlign: "center"
  },
})