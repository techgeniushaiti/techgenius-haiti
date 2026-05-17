export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">

        <img
          src="/logo.png"
          alt="Techgenius"
          className="w-32 h-32 mx-auto animate-pulse"
        />

        <h1 className="text-5xl font-bold mt-6 text-blue-500">
          TECHGENIUS
        </h1>

        <p className="text-gray-300 mt-2">
          Chargement...
        </p>

        <div className="flex justify-center gap-2 mt-6">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
        </div>

      </div>
    </div>
  );
}