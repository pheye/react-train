import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Popular from "@/pages/Popular";
import Battle from "@/pages/Battle/index";

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
      query: "stars:>1"
    };
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
      <Router basename={process.env.BASE}>
        <div style={styles.container}>
          <Header onClick={this.onClick} changeRouter={this.changeRouter} />
          <Switch>
            <Route exact path="/">
              <Popular query={query} current={query} onClick={this.onClick} />
            </Route>
            <Route path="/battle" component={Battle} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default hot(App);
