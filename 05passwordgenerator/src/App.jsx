import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false); // New state for copy message

  const passwordRef = useRef();

  // using usecallBack function which uses cache to re-render
  const generatePassword = useCallback(
    () => {
      let pass = "";
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      if (numberAllowed) str += "0123456789";
      if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";
      for (let i = 1; i < length; i++) {
        const char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }

      setPassword(pass);
    },
    [length, numberAllowed, charAllowed] // dependencies array , it will be okay unless we change the dependencies on a regular basis
  );

  // used for generating as soon as the page reloads , we want it to work everytime
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    // just taking what is there in password variable and writting it in the clipboard

    passwordRef.current?.select(); // ? is used for safety

    setCopied(true); // Show "Copied!" message
    setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Password generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-gray-200 rounded-2xl"
          placeholder="Password"
          readOnly
          ref={passwordRef} // i can just grab this input field by ref
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-full"
        >
          Copy
        </button>
      </div>

      {copied && (
        <p className="text-green-400 text-sm mb-2 text-center">
          ✅ Password copied!
        </p>
      )}

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            name=""
            id=""
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)} // setting the value of length by target value
          />
          <label htmlFor="length">Length :{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
