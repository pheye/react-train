import { hot } from "react-hot-loader/root";
import React from "react";
import Result from "./Result";
import Battle from "./Battle";

class BattleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: null,
      player2: null
    };
  }

  onBattle = (player1, player2) => {
    this.setState({
      player1,
      player2
    });
  };

  onReset = () => {
    this.setState({
      player1: null,
      player2: null
    });
  };

  render() {
    const { player1, player2 } = this.state;
    if (player1 && player2) {
      return (
        <Result player1={player1} player2={player2} onReset={this.onReset} />
      );
    }
    return <Battle onBattle={this.onBattle} />;
  }
}

export default hot(BattleContainer);
