"use client";

import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState<"austin" | "la">("austin");
  const [weight, setWeight] = useState(2);
  const [eta, setEta] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<string | null>(null);

  const matchVehicle = () => {
    if (weight > 10) {
      setVehicle("Too heavy — max 10 lb parcels / documents");
      setEta(null);
      return;
    }
    // Simulated closest-vehicle win: Cybercab (Austin) vs Waymo (both)
    const cybercabAustin = city === "austin" && Math.random() > 0.4;
    const winning = cybercabAustin ? "Tesla Cybercab (Austin)" : "Waymo";
    const minutes = Math.floor(Math.random() * 8) + 3;
    setVehicle(winning);
    setEta(`${minutes} min ETA`);
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <header className="border-b border-lime-400 p-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-lime-400">gnomies.io</h1>
          <p className="text-sm text-lime-200">lime-green phoenix · item-drop desk · closest vehicle wins</p>
        </div>
        <div className="text-6xl">🐦‍🔥</div>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        <section className="mb-12 text-center">
          <div className="inline-block bg-lime-400 text-black px-6 py-3 rounded-full text-xl font-bold mb-4">
            Phoenix Clippy reborn
          </div>
          <p className="text-lime-300 text-lg">
            Spirit · soul · mouth · mecha-brain · dookie energy optional<br />
            Learns clicks, browser, Siri data. Replicates via Open Hands + Vercel + Ganesh + 25SHA.
          </p>
          <p className="mt-4 text-sm opacity-70">
            People are not a cargo class. Cab takes documents & small parcels ≤10 lb.
          </p>
        </section>

        <section className="bg-zinc-900 border border-lime-500 rounded-xl p-8 mb-8">
          <h2 className="text-2xl text-lime-400 mb-6">A — Courier Matching (Austin + LA)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lime-300 mb-2">City</label>
              <select 
                value={city} 
                onChange={(e) => setCity(e.target.value as any)}
                className="w-full bg-black border border-lime-400 text-white p-3 rounded"
              >
                <option value="austin">Austin (Cybercab + Waymo)</option>
                <option value="la">Los Angeles (Waymo)</option>
              </select>
            </div>
            <div>
              <label className="block text-lime-300 mb-2">Parcel weight (lb)</label>
              <input 
                type="number" 
                min="0.1" 
                max="10" 
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
                className="w-full bg-black border border-lime-400 text-white p-3 rounded"
              />
            </div>
          </div>

          <button 
            onClick={matchVehicle}
            className="mt-6 w-full bg-lime-400 text-black font-bold py-4 rounded-lg hover:bg-lime-300 transition text-lg"
          >
            Find Closest Vehicle
          </button>

          {vehicle && (
            <div className="mt-6 p-4 bg-black border border-lime-400 rounded text-center">
              <p className="text-xl text-lime-400">{vehicle}</p>
              {eta && <p className="text-2xl font-bold mt-2">{eta}</p>}
              <p className="text-sm mt-2 opacity-70">Winning vehicle = lowest ETA + capacity match</p>
            </div>
          )}
        </section>

        <section className="bg-zinc-900 border border-lime-500 rounded-xl p-8">
          <h2 className="text-2xl text-lime-400 mb-4">B — Phoenix Clippy Desktop</h2>
          <ul className="space-y-2 text-lime-200">
            <li>• Local-first LLM personalization</li>
            <li>• RSI/HSI learning from clicks & browser movements</li>
            <li>• Accessible Siri data frameworks (macOS first)</li>
            <li>• Tools: Open Hands CLI · Vercel CLI · Ganesh-AI-Brain · 25SHA Web3 wallet</li>
            <li>• Token recycle artifact</li>
            <li>• Personality: phoenix / bird-of-paradise with mouth</li>
          </ul>
          <p className="mt-6 text-center text-lime-300">
            A + B = C → Coexist.llc totem · Helping.llc gnomies with bells
          </p>
        </section>

        <footer className="mt-12 text-center text-sm opacity-50">
          Prototype ready for testing · Pending 7-panel gate · Domain purchase in progress<br />
          Cybercab Austin live · Waymo Austin/LA live · Human gate on deploy & privacy
        </footer>
      </main>
    </div>
  );
}
