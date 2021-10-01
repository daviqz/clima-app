import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../interfaces/rootStackParamList";
import HistoryCommentsStyles from "./HistoryCommentsStyles";

const HistoryComments: React.FC<
  NativeStackScreenProps<RootStackParamList, "HistoryComments">
> = () => {
  return (
    <View style={HistoryCommentsStyles.container}>
      <View style={HistoryCommentsStyles.box}>
        <Text style={HistoryCommentsStyles.title}>Meus comentários</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={HistoryCommentsStyles.dateBox}>
            <Text style={HistoryCommentsStyles.date}>27/09/2021</Text>
            {Array.from({ length: 2 }).map((_, index) => (
              <View key={index} style={HistoryCommentsStyles.commentContainer}>
                <View style={HistoryCommentsStyles.boxComment}>
                  <Text style={HistoryCommentsStyles.user}>Eu</Text>
                  <Text style={HistoryCommentsStyles.comment}>Comentário</Text>
                </View>
                <View style={HistoryCommentsStyles.image} />
              </View>
            ))}
          </View>
          <View style={HistoryCommentsStyles.dateBox}>
            <Text style={HistoryCommentsStyles.date}>29/09/2021</Text>
            {Array.from({ length: 3 }).map((_, index) => (
              <View key={index} style={HistoryCommentsStyles.commentContainer}>
                <View style={HistoryCommentsStyles.boxComment}>
                  <Text style={HistoryCommentsStyles.user}>Eu</Text>
                  <Text style={HistoryCommentsStyles.comment}>Comentário</Text>
                </View>
                <View style={HistoryCommentsStyles.image} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HistoryComments;
