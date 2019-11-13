import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import Content from "./Content";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 0,
    margin: 0,
    minHeight: "100vh"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "stars:>1" };
  }

  onClick = query => {
    console.log("query", query);
    this.setState({
      query
    });
  };

  render() {
    const { query } = this.state;

    return (
      <div style={styles.container}>
        <Header onClick={this.onClick} current={query} />
        <Content query={query} />
        <Footer />
      </div>
    );
  }
}

export default App;
