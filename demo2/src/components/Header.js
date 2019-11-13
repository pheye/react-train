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
    const links = [
      {
        title: "All",
        query: "stars:>1"
      },
      {
        title: "JavaScript",
        query: "stars:>1+language:javascript"
      },
      {
        title: "Ruby",
        query: "stars:>1+language:ruby"
      },
      {
        title: "Java",
        query: "stars:>1+language:java"
      },
      {
        title: "CSS",
        query: "stars:>1+language:css"
      }
    ];
    const navs = [
      {
        title: "Popular",
        query: "#"
      },
      {
        title: "Battle",
        query: "#battle"
      }
    ];

    return (
      <div style={styles.header}>
        <div>
          <Menu links={navs} />
        </div>
        <div>
          <Menu onClick={onClick} current={current} links={links} />
        </div>
      </div>
    );
  }
}
export default Header;
