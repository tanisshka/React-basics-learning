import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-lg shadow-2xl rounded-2xl p-6 border border-gray-700">
        <h1 className="text-3xl font-semibold text-center mb-6 text-indigo-400">
          🔐 Modern Password Generator
        </h1>

        <div className="flex mb-4 rounded-xl overflow-hidden border border-gray-700 focus-within:border-indigo-500 transition">
          <input
            type="text"
            value={password}
            className="w-full p-3 bg-transparent text-lg outline-none text-indigo-100 placeholder-gray-400"
            placeholder="Your strong password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 font-semibold transition"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          {/* Length Slider */}
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-300">
              Length: <span className="text-indigo-400">{length}</span>
            </label>
            <input
              type="range"
              min={6}
              max={40}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-2/3 accent-indigo-500 cursor-pointer"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex justify-between text-gray-300">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={numAllowed}
                onChange={() => setNumAllowed((prev) => !prev)}
                className="accent-indigo-500"
              />
              Include Numbers
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="accent-indigo-500"
              />
              Include Symbols
            </label>
          </div>

          <button
            onClick={passwordGenerator}
            className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-lg font-semibold hover:scale-[1.03] transition-transform shadow-lg hover:shadow-indigo-500/50"
          >
            Generate Password
          </button>
        </div>
      </div>

      <p className="text-sm mt-6 text-gray-400">
        Crafted with ❤️ using <span className="text-indigo-400">React</span> +{" "}
        <span className="text-purple-400">Tailwind</span>
      </p>
    </div>
  );
}

export default App;


