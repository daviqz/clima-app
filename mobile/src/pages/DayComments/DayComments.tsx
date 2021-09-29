import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import DayCommentsStyles from "./DayCommentsStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

interface DayCommentsProps {
  navigation: any;
}

const DayComments: React.FC<DayCommentsProps> = ({ navigation }) => {
  const addComment = () => {
    navigation.navigate("NewComment");
  };

  return (
    <View style={DayCommentsStyles.container}>
      <View style={DayCommentsStyles.titleContainer}>
        <Text style={DayCommentsStyles.title}>Comentários de hoje</Text>
        <TouchableOpacity onPress={addComment}>
          <Feather name="plus-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {Array.from({ length: 5 }).map((_, index) => (
          <View key={index} style={DayCommentsStyles.commentContainer}>
            <View style={DayCommentsStyles.boxComment}>
              <Text style={DayCommentsStyles.user}>Usuário</Text>
              <Text style={DayCommentsStyles.comment}>Comentário</Text>
            </View>
            <View style={DayCommentsStyles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DayComments;
