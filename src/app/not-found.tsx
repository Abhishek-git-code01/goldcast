import Link from 'next/link'; // Add this import

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-7xl font-bold mb-4 text-[#D01EDA]">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="px-6 py-3 bg-gradient-to-r from-[#D01EDA] to-[#0ADC7D] rounded-xl text-white font-semibold shadow-lg hover:scale-105 transition">
        Go Home
      </Link>
    </div>
  );
}