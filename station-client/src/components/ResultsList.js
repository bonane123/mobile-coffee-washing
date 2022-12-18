import React from "react";
import moment from "moment";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import HorizontalList from "./list/HorizontalList";
import VerticalList from "./list/VerticalList";
// import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  // console.log(results);



  return (
    <View>
      <View style={styles.headerView}>

      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity>

      <Text style={styles.logoutBtn}>Logout</Text>
      </TouchableOpacity>
      </View>
      
      <HorizontalList
      results={results}
      navigation={navigation}
      />
      <VerticalList
      results={results}
      navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerView:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTitle: {
    color: "#411900",
    fontSize: 18,
    marginTop: 15,
    marginHorizontal: 15,
    fontWeight: "bold",
  },
  logoutBtn:{
    color: "white",
    backgroundColor: "#411900",
    fontSize: 18,
    marginTop: 15,
    marginHorizontal: 15,
    fontWeight: "bold",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    textDecorationLine: "underline",
  }
});

export default ResultsList;
