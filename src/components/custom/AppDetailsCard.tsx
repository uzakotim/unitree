
function AppDetailsCard({ app }: { app: any }) {

  return (
    <div
      className="
        absolute z-10         
        bg-white/90 backdrop-blur-sm 
        w-[250px] md:w-[500px]
        p-2 sm:p-3 md:p-5 

        rounded-xl shadow-2xl 
        transform transition-all duration-500 ease-in-out 

        hover:scale-105 hover:shadow-3xl
        h-auto
      "
    >
      {/* Title + Icon */}
      <div className="flex items-center mb-1 sm:mb-2 md:mb-3">
        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-slate-800 leading-tight">
          {app.title}
        </h3>
      </div>


        {/* JSON Box */}
        {/* Details Section */}
        <div className="bg-gray-50/50 p-3 sm:p-4 md:p-5 rounded-xl shadow-inner border border-gray-200">

        {/* Features */}
        {app.json.features && (
            <div className="mb-4">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-800 uppercase tracking-wider mb-1">
                Features
            </h4>

            <ul className="space-y-1">
                {app.json.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-center text-xs sm:text-sm text-gray-700">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                    {feature}
                </li>
                ))}
            </ul>
            </div>
        )}

        {/* Compatibility */}
        {app.json.compatibility && (
            <div>
            <h4 className="text-xs sm:text-sm font-semibold text-slate-800 uppercase tracking-wider mb-1">
                Compatibility
            </h4>

            <div className="flex flex-wrap gap-2">
                {app.json.compatibility.map((c: string, i: number) => (
                <span
                    key={i}
                    className="px-3 py-1 text-xs sm:text-sm bg-green-500 text-white rounded-lg shadow-sm"
                >
                    {c}
                </span>
                ))}
            </div>
            </div>
        )}

        </div>


    {/* Price */}
        <p className="text-sm text-right sm:text-md md:text-xl font-semibold text-slate-800 mt-2">
            {app.price}
        </p>
    
      {/* Button */}
      <button className="
        mt-2
        w-full 
        py-1.5 sm:py-2 md:py-3 
        bg-slate-800 text-white 
        text-xs sm:text-sm md:text-base 
        font-bold rounded-2xl 
        hover:bg-indigo-700 
        transition-colors duration-300 
        shadow-lg 
        focus:outline-none focus:ring-4 focus:ring-indigo-300
      ">
        Learn More
      </button>
    </div>
  );
}

export default AppDetailsCard;
