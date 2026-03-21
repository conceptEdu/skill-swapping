function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
        TailwindCSS v4 Test
      </h1>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Green Button
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Blue Button
        </button>
        <button className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">
          Yellow Button
        </button>
      </div>

      {/* Card */}
      <div className="mt-10 p-6 bg-white rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Card Example</h2>
        <p className="mt-2 text-gray-600">
          This card proves Tailwind utilities like padding, margin, shadow, and rounded corners are working.
        </p>
      </div>
    </div>
  );
}

export default App;