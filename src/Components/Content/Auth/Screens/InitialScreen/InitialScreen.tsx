// PLUGINS IMPORTS //
import React from "react"
import { Image, ImageBackground, StyleSheet } from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const InitialScreen: React.FC<PropsType> = (props) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("~/Images/bg-2.png")}
    >
      <Image style={styles.logo} source={require("~/Images/logo-big.png")} />
      <Button
        onPress={() => props.navigation.navigate("LoginScreen")}
        text="Вход"
        buttonStyle={{ marginTop: 30, paddingVertical: 13 }}
        textStyle={{
          fontWeight: "bold",
        }}
      />
      <Button
        onPress={() => props.navigation.navigate("RegisterScreen")}
        text="Регистрация"
        buttonStyle={{
          backgroundColor: "rgba(0, 57, 45, 0.20)",
          position: "absolute",
          bottom: 38,
        }}
        textStyle={{
          color: "#00392D",
          fontWeight: "bold",
          paddingVertical: 13,
        }}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },

  logo: {
    width: 124,
    height: 106,
    resizeMode: "center",
  },
})

export default InitialScreen
