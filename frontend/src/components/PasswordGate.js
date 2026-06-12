import { useState } from "react";

const PASSWORD = "skola30preview";
const STORAGE_KEY = "preview_access";

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "1"
  );
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) return children;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
        <div className="text-4xl mb-4">🔒</div>
        <h1 className="text-xl font-semibold text-gray-800 mb-1">Private Preview</h1>
        <p className="text-gray-500 text-sm mb-6">Enter the password to view this site.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            className={`border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 transition ${
              error
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
          />
          {error && (
            <p className="text-red-500 text-xs">Incorrect password. Try again.</p>
          )}
          <button
            type="submit"
            className="bg-gray-900 text-white rounded-lg py-2 text-sm font-medium hover:bg-gray-700 transition"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
