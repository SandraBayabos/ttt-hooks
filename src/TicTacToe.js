// square
// value (prop)
// onclick function (prop)

function Square(props) {
  return (
    <button className="Square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// board
// state
// boardState
// turnState
// handleclick
// copy of our boardState
// if the index of the state of the board is filled, return
// mutate copy and add X or O
// calculate next turn
// set state of the board
// set state of the turn

// function that calculates the winner
