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
        <div className="row">
          <div className="column xs-4 right">
            <div>Enter two Github users</div>
            <div>
              <i className="fa fa-users fa-4x" />
            </div>
          </div>
          <div className="column xs-2">
            <div>Battle</div>
            <div>
              <i className="fa fa-fighter-jet fa-4x" />
            </div>
          </div>
          <div className="column xs-4 left">
            <div>See the winner</div>
            <div>
              <svg
                t="1573903363815"
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1460"
                width="128"
                height="128"
              >
                <path
                  d="M754.389333 423.04A254.208 254.208 0 0 0 768.042667 341.333333V256h42.666666c23.466667 0 42.666667 19.114667 42.666667 42.666667a128.042667 128.042667 0 0 1-98.986667 124.373333M512.042667 512c-94.165333 0-170.666667-76.544-170.666667-170.666667V213.333333h341.333333v128c0 94.122667-76.629333 170.666667-170.666666 170.666667M170.666667 298.666667c0-23.552 19.114667-42.666667 42.666666-42.666667h42.666667v85.333333c0 28.586667 4.864 55.978667 13.568 81.706667A128.042667 128.042667 0 0 1 170.666667 298.666667m469.333333 469.333333v42.666667H384v-42.666667c0-23.552 19.2-42.666667 42.666667-42.666667h170.666666c23.509333 0 42.666667 19.114667 42.666667 42.666667m170.666667-597.333333h-42.666667a42.666667 42.666667 0 0 0-42.666667-42.666667H298.666667a42.666667 42.666667 0 0 0-42.666667 42.666667H213.333333C142.762667 170.666667 85.333333 228.096 85.333333 298.666667c0 117.632 95.701333 213.333333 213.333334 213.333333h23.04A255.573333 255.573333 0 0 0 469.333333 593.493333V640h-42.666666c-70.570667 0-128 57.429333-128 128v85.333333a42.666667 42.666667 0 0 0 42.666666 42.666667h341.333334a42.666667 42.666667 0 0 0 42.666666-42.666667v-85.333333c0-70.570667-57.429333-128-128-128h-42.666666v-46.506667A255.36 255.36 0 0 0 702.293333 512H725.333333c117.632 0 213.333333-95.701333 213.333334-213.333333 0-70.570667-57.429333-128-128-128"
                  fill="#f4ea2a"
                  p-id="1461"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <h3 className="text-center">Players</h3>
        <div className={styles["players-container"]}>
          <div className={styles.player}>
            <h3>Player One</h3>
            <div className="row">
              <input
                type="text"
                value={player1}
                onChange={this.onChange.bind(this, "player1")}
                className={styles.player__input}
              />
              <button type="button" className={styles["submit-btn"]}>
                Submit
              </button>
            </div>
          </div>
          <div className={styles.player}>
            <h3>Player Two</h3>
            <div className="row">
              <input
                type="text"
                value={player2}
                onChange={this.onChange.bind(this, "player2")}
                className={styles.player__input}
              />
              <button type="button" className={styles["submit-btn"]}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Battle;
