export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <div className="mb-6 animate-spin">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="mx-auto">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="#D01EDA"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="#0ADC7D"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Loading...</h2>
      <p className="text-gray-400 text-center max-w-md">Please wait while we prepare your experience.</p>
    </div>
  );
} 