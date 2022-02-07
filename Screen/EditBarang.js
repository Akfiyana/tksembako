import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  Button,
  Text,
  Platform,
  TouchableOpacity,
  ListView,
  ActivityIndicator
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class EditBarangRecordActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInput_ID: "",
      TextInput_Nama: "",
      TextInput_Harga: "",
      TextInput_Stok:""

    };
  }

  componentDidMount() {
    // Received Student Details Sent From Previous Activity and Set Into State.
    this.setState({
      TextInput_ID: this.props.navigation.state.params.ID,
      TextInput_Nama: this.props.navigation.state.params.NAMA,
      TextInput_Harga: this.props.navigation.state.params.HARGA,
      TextInput_Stok: this.props.navigation.state.params.STOK,
      TextInput_Satuan: this.props.navigation.state.params.SATUAN
    });
  }

  static navigationOptions = {
    title: "EditBarangRecordActivity"
  };

  UpdateBarangRecord = () => {
    fetch("http://192.168.43.180/tksembako/backendApp/UpdateBarang.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id_barang : this.state.TextInput_ID,
        nama_barang: this.state.TextInput_Nama,
        harga_barang : this.state.TextInput_Harga,
        stok_barang : this.state.TextInput_Stok,
        satuan_barang : this.state.TextInput_Satuan
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // Showing response message coming from server updating records.
        Alert.alert(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  DeleteBarangRecord = () => {
    fetch("http://192.168.43.131/tksembako/backendApp/Hapusbarang.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id_barang : this.state.TextInput_ID
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

    this.props.navigation.navigate("Main Menu");
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 7 }}>
          {" "}
          Formulir Edit Barang{" "}
        </Text>

        <TextInput
          placeholder="Nama Barang"
          value={this.state.TextInput_Nama}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Nama: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Harga Barang"
          value={this.state.TextInput_Harga}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Harga: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="Stok Barang"
          value={this.state.TextInput_Stok}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Stok: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Satuan Barang"
          value={this.state.TextInput_Stok}
          onChangeText={TextInputValue =>
            this.setState({ TextInput_Satuan: TextInputValue })
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />


        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.UpdateBarangRecord}
        >
          <Text style={styles.TextStyle}> UPDATE DATA BARANG </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.DeleteBarangRecord}
        >
          <Text style={styles.TextStyle}> DELETE DATA BARANG </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
