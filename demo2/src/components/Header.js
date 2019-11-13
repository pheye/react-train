import React from "react";
import Menu from "./Menu";

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
};

class Header extends React.Component {
  render() {
    const { onClick, current } = this.props;
    return (
      <div style={styles.header}>
        <Menu onClick={onClick} current={current} />
      </div>
    );
  }
}
export default Header;
