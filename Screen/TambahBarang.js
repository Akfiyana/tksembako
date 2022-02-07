import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";


class TambahBarang extends Component {
  static navigationOptions = {
    title: "Tambah Barang"
  };

  constructor(props) {
    super(props);
    this.state = {
      TextInput_Nama_Barang: "",
      TextInput_Harga_Barang: "",
      TextInput_Stok_Barang: "",
      TextInput_Satuan_Barang:""
    };
  }

  InsertBarangRecordsToServer = () => {
    fetch("http://192.168.43.180/tksembako/backendApp/inputbarang.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
        nama_barang: this.state.TextInput_Nama_Barang,

        harga_barang: this.state.TextInput_Harga_Barang,

        stok_barang: this.state.TextInput_Stok_Barang,
        satuan_barang: this.state.TextInput_Satuan_Barang
  
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  Lihat_Stok_Barang = () => {
    this.props.navigation.navigate("LihatBarang");
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
          {" "}
          Penambahan Barang{" "}
        </Text>

        <TextInput
          placeholder="Nama Barang"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Nama_Barang: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Harga Barang"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Harga_Barang: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Stok"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Stok_Barang: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="Stok"
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Satuan_Barang: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />


        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.InsertBarangRecordsToServer}
        >
          <Text style={styles.TextStyle}>
            {" "}
            TAMBAHKAN DATA BARANG{" "}
          </Text>
        </TouchableOpacity>

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
        
      </View>
    );
  }
}
export default TambahBarang ;

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
