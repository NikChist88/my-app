import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const newValue = counters.map((counter) => counter.id === id ? { ...counter, value: counter.value + 1} : counter);
    setCounters(newValue);
  };

  const handleDecrement = (id) => {
    const newValue = counters.map((counter) => counter.id === id ? { ...counter, value: counter.value - 1} : counter);
    setCounters(newValue);
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};
export default CountersList;
