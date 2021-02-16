import React from "react";
import { connect } from "react-redux";
import CanvasChart from "./CanvasChart";
import getTradingViewRatings from "./other/TradingView";

class Analysis extends React.Component {
  constructor() {
    super();
    this.state = {
      tvRatingsLoaded: false,
      tvRatings: [],
    };
    this.renderRatings = this.renderRatings.bind(this);
    // this.grabTradingViewRatings = this.grabTradingViewRatings.bind(this);
  }

  async componentDidMount() {
    const symbols = this.props.symbols;
    const scripts = getTradingViewRatings(symbols);
    for (const symbol in scripts) {
      this[symbol].appendChild(scripts[symbol]);
    }

    await this.setState({
      tvRatingsLoaded: true,
    });
    // this.grabTradingViewRatings();
  }

  renderRatings(ratings) {
    if (ratings.length === 0) {
      return null;
    }
    return (
      <div>
        {ratings.map((rating) => {
          <div style={{ background: "BF80FF" }}>{rating}</div>;
        })}
      </div>
    );
  }

  // grabTradingViewRatings() {
  //   if (this.state.tvRatingsLoaded) {
  //     const ratingsArray = [];
  //     //   "speedometerSignal-pyzN--tL buyColor-4BaoBngr"

  //     // <main> --> div.tv-ratings-container --> div.rating-container -->
  //     this.setState({ tvRatings: ratingsArray });

  //     ///
  //   } else {
  //     return null;
  //   }
  // }

  render() {
    const symbols = this.props.symbols;
    return (
      <div>
        <h1>Technical Ratings</h1>
        <hr></hr>
        <div className="tv-ratings-container">
          {symbols[0] &&
            symbols.map((symbol, idx) => {
              return (
                <div
                  key={idx}
                  className="rating-container"
                  style={{
                    height: "400px",
                    width: "380px",
                    backgroundColor: "#fff",
                  }}
                  ref={(el) => (this[symbol] = el)}
                ></div>
              );
            })}
        </div>

        <div>
          <h1>More Analysis...</h1>
          <hr></hr>

          <CanvasChart />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    symbols: state.symbols,
    // analytics: state.symbolAnalyses
  };
};

export default connect(mapState)(Analysis);
