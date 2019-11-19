import React from "react";
import axios from "axios";
import ResultCard from "./ResultCard";
import Loading from "@/components/Loading";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  action: {
    textAlign: "center",
    margin: "16px auto"
  }
};

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        name: props.player1,
        score: 0,
        loading: true
      },
      player2: {
        name: props.player2,
        score: 0,
        loading: true
      }
    };
  }

  async componentDidMount() {
    const { player1, player2 } = this.props;
    this.init("player1", player1);
    this.init("player2", player2);
  }

  init = async (type, name) => {
    const res = await axios.get(`https://api.github.com/users/${name}`);
    this.setState({
      [type]: { ...res.data, score: res.data.public_repos, loading: false }
    });
  };

  render() {
    const { onReset } = this.props;
    const { player1, player2 } = this.state;
    if (player1.loading || player2.loading) {
      return <Loading />;
    }
    if (player1.score > player2.score) {
      player1.role = "Winner";
      player2.role = "Loser";
    } else {
      player1.role = "Loser";
      player2.role = "Winner";
    }

    return (
      <div>
        <div style={styles.container}>
          <ResultCard player={player1} type={player1.role} />
          <ResultCard player={player2} type={player2.role} />
        </div>
        <div style={styles.action}>
          <button onClick={onReset}>RESET</button>
        </div>
      </div>
    );
  }
}

export default Result;
