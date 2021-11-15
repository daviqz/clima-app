import React, { useState, useEffect, memo } from "react";
import { Alert, Image, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ImageView from "react-native-image-view";

import { RootStackParamList } from "../../interfaces/rootStackParamList";
import HistoryCommentsStyles from "./HistoryCommentsStyles";
import api, { BASE_URL } from "../../services/api";
import { connect } from "react-redux";

const HistoryComments: React.FC<
  NativeStackScreenProps<RootStackParamList, "HistoryComments"> & {
    loggedUser?: any;
  }
> = ({ loggedUser }) => {
  const [comments, setComments] = useState<any>({});
  const [modalImage, setModalImage] = useState<any>([]);

  const getHistoryComments = () => {
    api.get(`${BASE_URL}/all-comments/${loggedUser.id}`).then((response) => {
      setComments(response.data);
    });
  };

  useEffect(() => {
    getHistoryComments();
  }, []);

  const deleteComment = (id: number) => {
    Alert.alert("Atenção", "Tem certeza que deseja apagar o comentário?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Apagar",
        onPress: () => {
          api.delete(`${BASE_URL}/comment/${id}`).then((response) => {
            Alert.alert("Sucesso", response.data.message);
            getHistoryComments();
          });
        },
      },
    ]);
  };

  return (
    <View style={HistoryCommentsStyles.container}>
      <View style={HistoryCommentsStyles.box}>
        <Text style={HistoryCommentsStyles.title}>Meus comentários</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {Object.keys(comments).length === 0 && (
            <Text
              style={{
                ...HistoryCommentsStyles.comment,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Nenhum comentário encontrado!
            </Text>
          )}
          {Object.keys(comments).map((key: any, i: number) => (
            <View key={i} style={HistoryCommentsStyles.dateBox}>
              <Text style={HistoryCommentsStyles.date}>{key}</Text>
              {comments[key].map((it: any, index: number) => (
                <TouchableOpacity
                  key={index}
                  style={HistoryCommentsStyles.commentContainer}
                  onPress={() => deleteComment(it.id)}
                >
                  <View style={HistoryCommentsStyles.boxComment}>
                    <Text style={HistoryCommentsStyles.user}>Eu</Text>
                    <Text style={HistoryCommentsStyles.comment}>
                      {it.comment}
                    </Text>
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
                      style={HistoryCommentsStyles.image}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
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

export default connect(mapStateToProps, null)(memo(HistoryComments));
