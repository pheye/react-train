import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import Card from "./Card";
import Loading from "./Loading";

const styles = {
  center: {
    textAlign: "center"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 0,
    margin: 0,
    minHeight: "100vh"
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: "48px"
  }
};

// 下面是Header, Content, Footer这三个Layout组件

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      end: false,
      items: []
    };
  }

  componentDidMount() {
    this.search();
  }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.search();
    }
  }

  search = async (page = 1) => {
    const { query } = this.props;
    const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories&page=${page}`;
    console.log("url", url);
    this.setState({ loading: true });
    try {
      const res = await axios.get(url);
      console.log("res", res.data);
      this.setState(state => ({
        items: [...state.items, ...res.data.items]
      }));
    } catch (e) {
      console.log("error", e);
      this.setState({
        end: true
      });
    }
    this.setState({ loading: false });
  };

  render() {
    const { items, loading, end } = this.state;
    const cards = items.map((item, key) => (
      <Card key={key} source={item} index={key + 1} />
    ));
    return (
      <InfiniteScroll
        initialLoad={false}
        pageStart={1}
        loadMore={this.search}
        hasMore={!loading || end}
        loader={null}
      >
        <div style={styles.content}>{cards}</div>
        {loading && <Loading />}
      </InfiniteScroll>
    );
  }
}

export default Content;
