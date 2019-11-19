import React from "react";
import Menu from "./Menu";

const styles = {
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "32px"
  }
};

class Header extends React.Component {
  render() {
    const { changeRouter } = this.props;

    const navs = [
      {
        title: "Popular",
        query: "/"
      },
      {
        title: "Battle",
        query: "/battle"
      }
    ];

    return (
      <div style={styles.header}>
        <div>
          <Menu links={navs} onClick={changeRouter} current={navs[0].query} />
        </div>
      </div>
    );
  }
}
export default Header;
