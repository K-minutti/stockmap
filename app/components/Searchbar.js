import React from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_ALPHA_API_KEY;

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", suggestions: [] };
    this.renderSuggestions = this.renderSuggestions.bind(this);
    this.suggestionSelected = this.suggestionSelected.bind(this);
  }

  handleChange = async (e) => {
    const text = e.target.value;
    if (text === "") {
      this.setState({ suggestions: [], text: "" });
    }
    if (text.length > 0) {
      const { data } = await axios.get(`api/searchKey/${text}`);
      if (data.length !== 0) {
        this.setState({ suggestions: data, text });
      } else {
        this.setState({ suggestions: [], text }); // text
      }
    }
  };

  async suggestionSelected(value) {
    await this.setState({ text: value, suggestions: [] });
    // const e = { key: "Enter", target: { value: returnObj["1. symbol"] } }; // api
    const e = { key: "Enter", target: { value: value } }; // without api
    this.props.handleKeyDown(e);
    setTimeout(() => {
      this.setState({ text: "", suggestions: [] });
    }, 1000);
  }

  renderSuggestions() {
    const suggestions = this.state.suggestions;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div>
        {suggestions.map((stock, idx) => (
          <div
            className="list-suggestion"
            key={`0${idx}` + stock["symbol"]}
            onClick={() => this.suggestionSelected(stock["symbol"])}
          >
            <p>
              {stock.symbol} <span>{stock.name}</span>{" "}
              <span>{stock.exchange}</span>
            </p>
          </div>
        ))}
      </div>
    );
  }

  handleEnterUp = async (e) => {
    if (e.key === "Enter") {
      this.setState({ text: "", suggestions: [] });
    }
  };

  render() {
    return (
      <div className="searcbar-container">
        <i className="fas fa-search"></i>
        <input
          className="search-input"
          value={this.state.text || ""}
          onChange={this.handleChange}
          onKeyDown={(e) => this.props.handleKeyDown(e)}
          onKeyUp={(e) => this.handleEnterUp(e)}
          placeholder="search symbols or enter a list of comma separated symbols..."
          type="text"
          pattern="^[A-Za-z]+$"
        />

        {this.renderSuggestions()}
      </div>
    ); //
  }
}

export default Searchbar;
