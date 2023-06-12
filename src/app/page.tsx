 'use client'
import { useState } from 'react'

export default function Home() {
  const [pointA, setPointA] = useState<string>('');
  const [pointB, setPointB] = useState<string>('');
  const [calculatedDistance, setCalculatedDistance] = useState<number | undefined>(undefined);

  const calculateDistance = () => {
    setCalculatedDistance(100);
  };

  const handlePointAChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPointA(String(event.target.value));
  }

  const handlePointBChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPointA(String(event.target.value));
  }

  return (
    <main>
      <h1 className="text-6xl font-extrabold text-center text-gradient bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 tracking-tight leading-tight">
        Distance Calculator
      </h1>

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="37.773972,-122.431297"
          className="p-2 m-2 border border-gray-300 rounded-md"
          value={pointA}
          onChange={handlePointAChange}
        />
        <input
          type="text"
          placeholder="34.052235,-118.243683"
          className="p-2 m-2 border border-gray-300 rounded-md"
          value={pointB}
          onChange={handlePointBChange}
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 m-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          onClick={calculateDistance}
        >
          Calculate
        </button>
      </div>

      {calculatedDistance && <div className="flex justify-center mt-4">
        <p className="text-2xl font-semibold">
          Distance: {calculatedDistance}km
        </p>
      </div>}
    </main>
  )
}
