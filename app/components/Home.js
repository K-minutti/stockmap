import React from "react";
import { connect } from "react-redux";
import Searchbar from "./Searchbar";
import { setSymbols } from "../redux/symbols";
import axios from "axios";
import Analysis from "./Analysis";
import CanvasChart from "./CanvasChartAVD";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loadingAnalysis: false,
      doneAnalyzing: null,
    };
  }

  handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      let symbols = [];
      const text = e.target.value;
      text.trim();
      if (text.includes(",")) {
        symbols = text.split(",").map((t) => t.trim());
      } else {
        symbols.push(text);
      }
      await this.props.addSymbols(symbols);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loadingAnalysis: true });
    try {
      const symbols = this.props.symbols;
      console.log("symbols on analyze submit ---> ", symbols);
      await axios.post("/api/symbols/analyze", { symbols });
      setTimeout(() => {
        this.setState({
          loadingAnalysis: false,
          doneAnalyzing: true,
        });
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const symbols = this.props.symbols;
    const canRenderAnalysis =
      !this.state.loadingAnalysis && this.state.doneAnalyzing;
    console.log("THIS IS THE SYMBOLS STATE OBJ --->", symbols);
    return (
      <div className="home-main-container">
        {canRenderAnalysis ? (
          <Analysis />
        ) : (
          <React.Fragment>
            <Searchbar handleKeyDown={this.handleKeyDown} />
            <p className="symbol-list">
              <strong>Symbols: </strong> {symbols.join("  ")}
            </p>
            <hr></hr>
            <div className="btn-analyze-container">
              <button
                className="btn-analyze"
                type="submit"
                onClick={(e) => this.handleSubmit(e)}
              >
                Analyze
              </button>
            </div>
          </React.Fragment>
        )}
        <div>
          <CanvasChart />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    symbols: state.symbols,
  };
};

// everytime a user hits enter in search bar we want to update the state
const mapDispatch = (dispatch) => {
  return {
    addSymbols: (symbols) => dispatch(setSymbols(symbols)),
  };
};

export default connect(mapState, mapDispatch)(Home);
