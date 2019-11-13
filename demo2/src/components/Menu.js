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
    const { onClick, current, links } = this.props;

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
