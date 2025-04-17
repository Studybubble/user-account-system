
const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-purple-100 to-blue-100">
      <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Events App</h1>
        <p className="text-xl text-gray-700">Discover and register for amazing events!</p>
        <div className="mt-8 flex gap-4 justify-center">
          <a 
            href="/user" 
            className="px-6 py-3 bg-white text-purple-600 font-medium rounded-full hover:bg-purple-50 transition-colors"
          >
            Dashboard
          </a>
          <a 
            href="/user/discover" 
            className="px-6 py-3 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-600 transition-colors"
          >
            Discover Events
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
