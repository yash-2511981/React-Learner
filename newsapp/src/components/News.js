import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=be08e7a9ddde4dc28c8d6974fbd262c0&page=1&pageSize=10";
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    console.log(this.state.articles.length);
  }

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / 15)) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=be08e7a9ddde4dc28c8d6974fbd262c0&page=${
        this.state.page + 1
      }&pageSize=10`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=be08e7a9ddde4dc28c8d6974fbd262c0&page=${
      this.state.page - 1
    }&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    let { state } = this.props;
    return (
      <>
        <Spinner loading={this.state.loading} />
        <div className={`my-5 container shadow-lg p-4 rounded bg-${state.bg}`}>
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

          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className={`btn btn-sm btn-${state.btn} mt-auto`}
              onClick={this.handlePreviousClick}
            >
              &larr; Previous
            </button>
            <div
              className={`container border rounded text-center  d-flex align-items-center bg-${state.btn}`}
              style={{ height: "40px", width: "80px" }}
            >
              Page-{this.state.page}
            </div>
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 15)
              }
              className={`btn btn-sm btn-${state.btn} mt-auto`}
              onClick={this.handleNextClick}
            >
              next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
