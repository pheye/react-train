import React from "react";

const styles = {
  nav: {
    display: "flex",
    listStyleType: "none",
    flexDirection: "row"
  },
  navItem: {
    display: "inline-flex",
    padding: "8px 16px"
  }
};
// 这里是所有普通的Components组件
class Menu extends React.Component {
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

    // 现在样式变内联了，如何实现:hover, :active的功能？
    const children = links.map((item, key) => (
      <li style={styles.navItem} key={key}>
        <a
          href="#"
          onClick={() => onClick(item.query)}
          style={current === item.query ? { color: "red" } : { color: "black" }}
        >
          {item.title}
        </a>
      </li>
    ));
    return <ul style={styles.nav}>{children}</ul>;
  }
}
export default Menu;
