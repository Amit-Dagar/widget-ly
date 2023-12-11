import { useState, useEffect } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h5 className="text-[10vw] text-white font-bold">
      {time.toLocaleTimeString("en-us", { timeStyle: "medium" })}
    </h5>
  );
}
