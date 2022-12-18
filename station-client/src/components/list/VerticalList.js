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
// import ResultsDetail from "./ResultsDetail";

const VerticalList = ({ results, navigation }) => {
  // console.log(results);


  return (
    <View>
      
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {results.map((result) => {
          return (
            <View key={result._id} style={styles.verticalContainer}>
              <View style={styles.containerBox}>
                <View>
                  <Text style={styles.verticalTitle}>{result.title}</Text>
                  <Text style={styles.verticalTime}>
                    {moment(result.createdAt).fromNow()}
                  </Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Station Details',{id: result._id})}>
                  <Text style={styles.link}>More...</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    color: "#411900",
    fontSize: 18,
    marginTop: 15,
    marginHorizontal: 15,
    fontWeight: "bold",
  },
  viewTitle: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
    color: "white",
  },
  container: {
    margin: 10,
    padding: 10,
  },
  containerView: {
    width: 250,
    height: 230,
    backgroundColor: "#e28743",
    marginRight: 10,
    borderRadius: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  dataItem: {
    color: "white",
    marginLeft: 20,
  },
  verticalContainer: {
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    padding: 10,
  },
  containerBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  verticalTitle: {
    color: "#411900",
    fontSize: 17,
  },
  verticalTime: {
    color: "rgba(0,0,0,0.5)",
    fontSize: 14,
  },
  link:{
    color: '#4ebdd9',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default VerticalList;
