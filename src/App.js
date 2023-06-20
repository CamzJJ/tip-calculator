import { useState } from "react";
import "./index.css";

function App() {
  const [totalCost, setTotalCost] = useState(0);
  const [bill, setBill] = useState(0);
  const [ownServScore, setOwnServScore] = useState(0);
  const [friendServScore, setFriendServScore] = useState(0);

  function resetCost() {
    setBill(0);
    setTotalCost(0);
    setOwnServScore(0);
    setFriendServScore(0);
  }
  return (
    <div className="App">
      <div className="wrapper">
        <h1>The tip calculator💰</h1>

        <Billing bill={bill} setBill={setBill} />

        <ServiceQuality score={ownServScore} setScore={setOwnServScore}>
          How did you like the service?
        </ServiceQuality>

        <ServiceQuality score={friendServScore} setScore={setFriendServScore}>
          How did your friend like the service?
        </ServiceQuality>

        <TotalCost
          cost={totalCost}
          setCost={setTotalCost}
          tipScore1={ownServScore}
          tipScore2={friendServScore}
          bill={bill}
        />

        <ResetButton onClick={resetCost}>Reset</ResetButton>
      </div>
    </div>
  );
}

export default App;

function Billing({ bill, setBill }) {
  return (
    <div className="input-group">
      <h3>How much was the bill?</h3>
      <input
        type="number"
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />
    </div>
  );
}
function ServiceQuality({ score, setScore, children }) {
  return (
    <div className="input-group">
      <h3>{children}</h3>
      <select
        value={score}
        onChange={(event) => setScore(Number(event.target.value))}
      >
        <option value={0}>Poor 😖(0%)</option>
        <option value={5}>Good 🙂(5%)</option>
        <option value={10}>Great 😀(10%)</option>
        <option value={20}>Excelent 🥳(20%)</option>
      </select>
    </div>
  );
}
function TotalCost({ cost, setCost, bill, tipScore1, tipScore2 }) {
  const tip = (tipScore1 + tipScore2) / 2;
  setCost(bill + tip);
  return (
    <p className="result">
      {`You pay $${cost}`} <em>{`($${bill} + $${tip})`}</em>
    </p>
  );
}
function ResetButton({ onClick, children }) {
  return (
    <button className="reset-btn" onClick={onClick}>
      {children}
    </button>
  );
}
