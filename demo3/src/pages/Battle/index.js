import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { parse } from "qs";
import Result from "./Result";
import Battle from "./Battle";

class BattleContainer extends React.Component {
  onBattle = (player1, player2) => {
    const { history, match } = this.props;
    history.push(`${match.path}/result?player1=${player1}&player2=${player2}`);
  };

  onReset = () => {
    const { match, history } = this.props;
    const { path } = match;
    history.push(path);
  };

  render() {
    const { match, location } = this.props;
    const { path, url } = match;
    const { player1, player2 } = parse(location.search.substring(1));
    console.log("params", match, location);

    if (url !== location.pathname && !(player1 && player2)) {
      return <Redirect to={{ pathname: `${url}` }} />;
    }
    return (
      <div>
        <Switch>
          <Route exact path={path}>
            <Battle onBattle={this.onBattle} />
          </Route>
          <Route exact path={`${path}/result`}>
            <Result
              player1={player1}
              player2={player2}
              onReset={this.onReset}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BattleContainer;
