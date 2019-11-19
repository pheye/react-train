import React from "react";
import { withFormik } from "formik";
import styles from "./index.less";

class Players extends React.Component {
  loadRepo(player) {
    const { values } = this.props;
    console.log("player", values[player]);
  }

  render() {
    const {
      values,
      errors,
      handleSubmit,
      handleChange,
      handleBlur
    } = this.props;

    return (
      <>
        <h3 className="text-center">Players</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles["players-container"]}>
            <div className={styles.player}>
              <h3>Player One</h3>
              <div className="row">
                <input
                  type="text"
                  name="player1"
                  value={values.player1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.player__input}
                  placeholder="github username"
                />
                <button
                  type="button"
                  className={styles["submit-btn"]}
                  disabled={errors.player1}
                  onClick={() => this.loadRepo("player1")}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className={styles.player}>
              <h3>Player Two</h3>
              <div className="row">
                <input
                  type="text"
                  name="player2"
                  value={values.player2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.player__input}
                  placeholder="github username"
                />
                <button
                  type="button"
                  className={styles["submit-btn"]}
                  disabled={errors.player2}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default withFormik({
  validateOnMount: true,
  mapPropsToValues: () => ({
    player1: "",
    player2: ""
  }),
  validate: values => {
    const errors = {};
    console.log("hello", values);
    if (!values.player1) {
      errors.player1 = "不能为空";
    }
    if (!values.player2) {
      errors.player2 = "不能为空";
    }
    return errors;
  },
  handleSubmit: values => {
    console.log("submit", values);
  }
})(Players);
