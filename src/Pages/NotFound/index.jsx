function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-coal text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! Siden du leter etter finnes ikke.</p>
      <a
        href="/"
        className="px-4 py-2 bg-white text-coal rounded-lg hover:bg-gray-200 transition"
      >
        Tilbake til forsiden
      </a>
    </div>
  );
}

export default NotFound;
