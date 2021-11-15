import React, { useEffect, useState, memo } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import ImageView from "react-native-image-view";

import DayCommentsStyles from "./DayCommentsStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { darkColor } from "../../colors";
import { connect } from "react-redux";
import api, { BASE_URL } from "../../services/api";

interface DayCommentsProps {
  navigation: any;
  loggedUser?: any;
}

const DayComments: React.FC<DayCommentsProps> = ({
  loggedUser,
  navigation,
}) => {
  const [commentsDay, setCommentsDay] = useState([]);
  const [modalImage, setModalImage] = useState<any>([]);

  const addComment = () => {
    navigation.navigate(loggedUser ? "NewComment" : "Login");
  };

  useEffect(() => {
    api.get(`${BASE_URL}/comments-day`).then(async (response) => {
      setCommentsDay(response.data);
    });
  }, []);

  return (
    <View style={DayCommentsStyles.container}>
      <View style={DayCommentsStyles.box}>
        <View style={DayCommentsStyles.titleContainer}>
          <Text style={DayCommentsStyles.title}>Comentários de hoje</Text>
          <TouchableOpacity onPress={addComment}>
            <Feather name="plus-circle" size={24} color={darkColor} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {commentsDay.length === 0 && (
            <Text
              style={{
                ...DayCommentsStyles.comment,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Nenhum comentário foi feito hoje!
            </Text>
          )}
          {commentsDay.map((it: any, index) => (
            <View key={index} style={DayCommentsStyles.commentContainer}>
              <View style={DayCommentsStyles.boxComment}>
                <Text style={DayCommentsStyles.user}>{it.user_name}</Text>
                <Text style={DayCommentsStyles.comment}>{it.comment}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  setModalImage([
                    {
                      source: {
                        uri: it.image_url,
                      },
                    },
                  ])
                }
              >
                <Image
                  source={{ uri: it.image_url }}
                  style={DayCommentsStyles.image}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <ImageView
          images={modalImage}
          imageIndex={0}
          isVisible={modalImage.length > 0}
          onClose={() => setModalImage([])}
        />
      </View>
    </View>
  );
};

const mapStateToProps = ({ loggedUser }: any) => ({
  loggedUser,
});

export default connect(mapStateToProps, null)(memo(DayComments));
