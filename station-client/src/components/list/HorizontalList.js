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

const HorizontalList = ({  results}) => {
  // console.log(results);

  const newImage =
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/Coffee_trees.jpg";

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {results.map((result) => {
          return (
            <View key={result._id} style={styles.containerView}>
              {result.photo ? (
                <Image source={{ uri: result.photo }} style={styles.image} />
              ) : (
                <Image source={newImage} style={styles.image} />
              )}
              <Image />
              <View style={styles.viewTitle}>
                <Text style={styles.title}>{result.title}</Text>
              </View>
              <Text style={styles.dataItem}>
                {moment(result.createdAt).format('YYYY-MM-DD')} This station was created
              </Text>
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

export default HorizontalList;
