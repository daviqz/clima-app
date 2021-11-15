import React, { memo } from "react";
import { Alert, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { removeLoggedUser } from "../../services/asyncStorage";
import { connect } from "react-redux";
import { signOut } from "../../store/Actions";

const LogoutButton = ({ loggedUser, signOutDispatch }: any) => {
  const logOut = () => {
    Alert.alert(
      "Atenção",
      `Tem certeza que deseja sair da sua conta, ${loggedUser.name}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: () => {
            removeLoggedUser();
            signOutDispatch();
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={logOut}>
      <Feather name="log-out" size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
});

const mapStateToProps = ({ loggedUser }: any) => ({
  loggedUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  signOutDispatch: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(LogoutButton));
