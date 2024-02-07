import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../constants";

const styles = StyleSheet.create({
  animatedBox: {
    flex: 1,
    backgroundColor: "#ff7070",
    padding: 20
  },
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#a90000",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center"
  },
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: "#a90000"
  },
  applyBtn: {
    // flex: 1,
    backgroundColor: "#ffebeb",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: SIZES.medium,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.medium
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    fontFamily: FONT.bold
  }
});

export default styles;
