const VideoDubberPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 md:px-8 lg:px-16">
      <nav className="w-full max-w-7xl py-4 mb-0">
        <div className="flex justify-center mb-0">
          <div className="w-full flex justify-start max-w-3xl mb-0">
            <div className="flex items-center mb-0">
              <a href="#" className="text-blue-500 hover:text-blue-700 mb-0">Home</a>
              <span className="mx-2">/</span>
              <a href="#" className="text-blue-500 hover:text-blue-700 mb-0">Product</a>
              <span className="mx-2 mb-0">/</span>
              <span className="text-gray-500 mb-0">VideoDubber - Fast Video Translator</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex-1 flex flex-col items-center justify-center w-full mt-0">
        <div className="w-full max-w-3xl text-left">
          <div className="flex items-start mb-1 mt-0"> 
            <img src="/lip.png" alt="Lip Icon" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 mt-1 !important">VideoDubber - Fast Video Translator</h1>
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 flex-1">Translate videos in your own voice, globalize in a click!</p>
            <div className="flex items-center gap-4 ml-4">
              <select className="p-2 md:p-3 lg:p-4 border border-gray-300 rounded bg-gray-100 cursor-pointer">
                <option>Visit</option>
              </select>
              <button className="px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 bg-red-500 text-white rounded">UPVOTE 134</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDubberPage;
