import { useState } from "react";

function App() {
  const [color, setColor] = useState("linear-gradient(135deg, #232526 0%, #414345 100%)");

  const colors = [
    { name: "Midnight", value: "linear-gradient(135deg, #232526 0%, #414345 100%)" },
    { name: "Sapphire", value: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)" },
    { name: "Burgundy", value: "linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)" },
    { name: "Forest", value: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)" },
    { name: "Steel", value: "linear-gradient(135deg, #485563 0%, #29323c 100%)" },
    { name: "Royal Gold", value: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" },
    { name: "Velvet", value: "linear-gradient(135deg, #41295a 0%, #2f0743 100%)" },
    { name: "Ocean Depth", value: "linear-gradient(135deg, #000046 0%, #1cb5e0 100%)" },
  ];

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center transition-all duration-700 ease-in-out"
      style={{ background: color }}
    >
      <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-16 text-white/90 select-none drop-shadow-lg">
        Modern Color Changer
      </h1>

      <div className="flex flex-wrap justify-center gap-6 px-6 py-5 rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
        {colors.map((col, i) => (
          <button
            key={i}
            onClick={() => setColor(col.value)}
            className="w-32 h-12 rounded-xl text-sm font-medium text-white/90 shadow-lg 
                       hover:scale-110 active:scale-95 transition-all duration-300
                       border border-white/20 flex items-center justify-center tracking-wide"
            style={{
              background: col.value,
            }}
          >
            {col.name}
          </button>
        ))}
      </div>

      <p className="fixed bottom-6 text-sm text-white/70 tracking-wider">
        Built with ❤️ using React + Tailwind
      </p>
    </div>
  );
}

export default App;
