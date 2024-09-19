import { useCallback, useEffect, useRef, useState } from "react";

import reactLogo from "./assets/react.svg";
import "./App.scss";

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = useCallback((): void => {
    setCount((count: number): number => count + 1);
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button!.addEventListener("click", handleButtonClick);
    }

    return () => {
      if (button) {
        button!.removeEventListener("click", handleButtonClick);
      }
    };
  }, [handleButtonClick]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={buttonRef}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
