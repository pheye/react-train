import React from "react";

const styles = {
  center: {
    textAlign: "center"
  }
};

class Loading extends React.Component {
  render() {
    return <div style={styles.center}>正在加载...</div>;
  }
}

export default Loading;
