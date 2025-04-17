
const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-purple-300 to-blue-400">
      <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Events App</h1>
        <p className="text-xl text-white/90">Discover and register for amazing events!</p>
        <div className="mt-8 flex gap-4 justify-center">
          <a 
            href="/user" 
            className="px-6 py-3 bg-white text-purple-600 font-medium rounded-full hover:bg-purple-100 transition-colors"
          >
            Dashboard
          </a>
          <a 
            href="/user/discover" 
            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors"
          >
            Discover Events
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
