export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        {/* Main Heading */}
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Hello World
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="animate-fade-in animate-delay-300">
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Welcome to your beautiful Next.js application
          </p>
        </div>
        
        {/* Description */}
        <div className="animate-fade-in animate-delay-700">
          <p className="text-lg text-gray-500 max-w-md mx-auto">
            Built with Next.js, Tailwind CSS, and modern web technologies
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 pt-8 animate-fade-in animate-delay-1000">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>
    </main>
  );
}