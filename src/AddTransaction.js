import React, { useState, useContext } from "react";
import { GlobalContext } from "./GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    if (amount !== 0) {
      console.log(e);

      addTransaction(newTransaction);
    } else {
      return false;
    }
  };

  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter text"
          ></input>
        </div>
        <div className="form-control">
          <label>
            Amount
            <br />
            (negative - expense,positive + income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter Amount"
          ></input>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
