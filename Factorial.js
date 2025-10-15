import React, { useState } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const factorial = (n) => {
    if (n < 0) return "Not defined for negative numbers";
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  };

  const handleCalculate = () => {
    setResult(factorial(Number(number)));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Factorial Calculator (React)</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
       
      />
      <button onClick={handleCalculate}>Find Factorial</button>
      {result !== null && <p>Factorial: {result}</p>}
    </div>
  );
}

export default FactorialCalculator;
