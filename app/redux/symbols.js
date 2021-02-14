export const setSymbols = (symbols) => ({
  type: "SET_SYMBOLS",
  symbols,
});

//helper function to ensure no duplicate symbols
function union(setA, setB) {
  let _union = new Set(setA);
  for (let elem of setB) {
    _union.add(elem);
  }
  return _union;
}

// reducer
const symbolsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SYMBOLS":
      let set = union(state, action.symbols);
      return [...set];
    default:
      return state;
  }
};

export default symbolsReducer;
