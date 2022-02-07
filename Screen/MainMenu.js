import React, { Component } from "react";

import { StyleSheet, View, Alert, TextInput, Text, Platform, TouchableOpacity,Image} from "react-native";


class MainMenu extends Component {
  static navigationOptions = {
    title: "Tambah Barang"
  };

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  
  Lihat_Stok_Barang = () => {
    this.props.navigation.navigate("LihatBarang");
  };
  Tambah_Stok_Barang = () => {
    this.props.navigation.navigate("Tambah Barang");
  };
  Edit_Stok_Barang = () => {
    this.props.navigation.navigate("EditBarang");
  };

  render() {
    return (
      <View style={styles.MainContainer}>
           <Image 
       style={{width: 200, height: 200}}
       resizeMode="contain"
       source = {require('./logo.png')} 
      />
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
          {" "}
          Selamat Datang{" "}
        </Text>
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
          {" "}
          DI Toko Sembako Berkah Jaya . . .!{" "}
        </Text>
        <Text style={{ fontSize: 15, marginBottom: 7 }}>
          {" "}
          Silahakan Pilih Menu Dibawah ini{" "}
        </Text>
        <Text style={{ fontSize: 15, marginBottom: 7 }}>
          {" "}{" "}
        </Text>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.Lihat_Stok_Barang}
        >
          <Text style={styles.TextStyle}>
            {" "}
            TAMPILKAN SELURUH DATA BARANG{" "}
          </Text>
        </TouchableOpacity>
   
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.Tambah_Stok_Barang}
        >
          <Text style={styles.TextStyle}>
            {" "}
            TAMBAH BARANG{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.Edit_Stok_Barang}
        >
          <Text style={styles.TextStyle}>
            {" "}
            EDIT DATA BARANG{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default MainMenu ;

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: "center",
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff"
  },

  MainContainer_For_Show_StudentList_Activity: {
    flex: 1,
    paddingTop: Platform.OS == "ios" ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
  },

  TextInputStyleClass: {
    textAlign: "center",
    width: "90%",
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: "#30cb63",
    borderRadius: 5
  },

  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: "90%",
    backgroundColor: "#30cb63"
  },

  TextStyle: {
    color: "#fff",
    textAlign: "center"
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  }
});
