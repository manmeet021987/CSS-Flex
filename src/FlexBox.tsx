import "./styles.css";

export default function FlexBox() {
  return (
    <body>
      {/* <div className="container">
        <div className="item-1">---1---</div>
        <div className="item-2">---2---</div>
        <div className="item-3">---3---</div>
      </div> */}

      {/* <div className="container">
        <div className="itemA">A</div>
        <div className="itemB">B</div>
        <div className="itemC">C</div>
        <div className="itemC">D</div>
        <div className="itemC">E</div>
        <div className="itemC">F</div>
      </div>
      <div className="cont">
        <div className="itemA">A</div>
        <div className="itemB">B</div>
        <div className="itemC">C</div>
        <div className="itemC">D</div>
        <div className="itemC">E</div>
        <div className="itemC">F</div>
      </div> */}
      <h1>Your affordibility</h1>
      <div className="container">
        <div className="outer">
          <div className="inner">
            <label>CommBank estimated market price</label>
            <label>585000</label>
          </div>
          <div className="inner">
            <label>Savings for a deposit</label>
            <label>$0</label>
          </div>
          <div className="inner">
            <label>Total Annual Income</label>
            <button>Add income</button>
          </div>
          <div className="inner">
            <button className="rounded-button">Save this calculation</button>
          </div>
        </div>
      </div>
      <div className="costtypes">
        <div className="inner-col">Repayments</div>
        <div className="inner-col">Upfront costs</div>
        <div className="inner-col">Borrowing Power</div>
      </div>
    </body>
  );
}
