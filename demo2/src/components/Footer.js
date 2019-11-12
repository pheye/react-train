import React from "react";
import ReactDOM from "react-dom";

const styles = {
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "48px",
    backgroundColor: "#efefef"
  }
};

class Footer extends React.Component {
  render() {
    return <div style={styles.footer}>版权所有 &copy; LIUWENCAN</div>;
  }
}

export default Footer;
