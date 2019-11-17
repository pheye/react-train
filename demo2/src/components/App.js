import { hot } from "react-hot-loader/root";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Popular from "@/pages/Popular";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: "0 32px",
    margin: 0,
    minHeight: "100vh"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "stars:>1",
      router: Popular
    };
  }

  onClick = query => {
    console.log("query", query);
    this.setState({
      query
    });
  };

  changeRouter = async query => {
    console.log("query", query);
    let module = null;
    switch (query) {
      case "/battle":
        module = await import(
          /* webpackChunkName: "Battle" */ "@/pages/Battle"
        );
        this.setState({
          router: module.default
        });
        break;
      case "/":
      default:
        this.setState({
          router: Popular
        });
        break;
    }
  };

  render() {
    const { query, router } = this.state;

    const Router = router;
    return (
      <div style={styles.container}>
        <Header
          onClick={this.onClick}
          current={query}
          changeRouter={this.changeRouter}
        />
        <Content router={<Router query={query} />} />
        <Footer />
      </div>
    );
  }
}

export default hot(App);
