import { decreament, increament, setSpan } from "@/features/counterSlice";
import { useCounterDispatch, useCounterSelector } from "@/store/hooks";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function MainPage() {
  //   const state = useCounterSelector((state) => state.counter);
  const state = useSelector((state: RootState) => state.counter);
  const dispatch = useCounterDispatch();
  const [localSpan, setLocalSpan] = useState(state.span);

  const handleChange = (e: any) => {
    setLocalSpan(e.target.value);
    console.log(e.target.value);
    const num = Number(e.target.value);

    dispatch(setSpan(num));
  };

  return (
    <div>
      <p className="text-3xl font-bold">{state.value}</p>
      <button
        className="px-5 py-3 bg-green-300"
        onClick={() => dispatch(increament())}
      >
        +
      </button>
      <button
        className="px-5 py-3 bg-red-300"
        onClick={() => dispatch(decreament())}
      >
        -
      </button>
      <div>
        <p>span - {state.span}</p>
        <input
          type="number"
          value={localSpan}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
}
