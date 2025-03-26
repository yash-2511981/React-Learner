import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=be08e7a9ddde4dc28c8d6974fbd262c0&page=${this.state.page
      }&pageSize=10`;
    this.setState({ loading: true });
    this.props.setProgress(30)
    let data = await fetch(url);
    this.props.setProgress(60)
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews();
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=be08e7a9ddde4dc28c8d6974fbd262c0&page=${this.state.page
      }&pageSize=10`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
    });
  }

  render() {
    let { state } = this.props;
    const { articles, loading, totalResults } = this.state;
    return (
      <>
        <div className={`my-5 container shadow-lg p-4 rounded bg-${state.bg}`}>

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner loading={loading} />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((article, index) => (
                  <div key={index} className="col-md-3 mb-4">
                    <NewsComponent
                      author={article.author}
                      title={article.title}
                      description={article.description}
                      image={article.urlToImage}
                      url={article.url}
                      state={state}
                    />
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
