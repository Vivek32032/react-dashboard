import React from "react";
import { Link } from "react-router-dom";
// import articles from "../data/article.json"

class Articles extends React.Component {
  constructor(props){
    super()
  
  this.state = {
    searchTerm: ""
  };
}

  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };
  render() {
    let articles = this.props.articles
    let filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(this.state.searchTerm)
    );
    return (
      <div>
        <input
          placeholder="Search"
          className="search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <ul className="articles">
          {filteredArticles.map((article) => (
            <li key={article.slug}>
              <Link to={"/articles/" + article.slug}>
                {article.title}
              </Link>
              <small>{article.author}</small>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Articles
