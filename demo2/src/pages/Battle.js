import React from "react";
import styles from "./Battle.less";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "facebook",
      player2: ""
    };
  }

  onChange = (name, e) => {
    console.log("e", name, e);
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    const { player1, player2 } = this.state;

    console.log("styles", styles);
    return (
      <div>
        <h2 className="text-center">Instructions</h2>
        <div className={styles["players-container"]}>
          <div className={styles.player}>
            <h3>Player1</h3>
            <input
              type="text"
              value={player1}
              onChange={this.onChange.bind(this, "player1")}
            />
            <button type="button" className={styles["submit-btn"]}>
              Search
            </button>
          </div>
          <div className={styles.player}>
            <h3>Player2</h3>
            <input
              type="text"
              value={player2}
              onChange={this.onChange.bind(this, "player2")}
            />
            <button type="button" className={styles["submit-btn"]}>
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Battle;
