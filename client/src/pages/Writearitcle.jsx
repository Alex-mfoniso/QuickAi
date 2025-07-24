import { Sparkle } from "lucide-react";
import React from "react";

const Writearitcle = () => {
  return (
    <div className="h-full overflow-y-scroll p-6 flex flex-wrap items-start gap-4 text-slate-700">
      {/* left column */}
      <form className="w-full max-w-lg p-4 bg-white rounded-lg boreder border-gray-200">
        <div className="flex items-center gap-3">
          <Sparkle className="w-6 text-[#4a7aff]" />
          <h1 className="text-xl font-semibold">Article Configguration</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Article Topic</p>
        <input
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300" placeholder="The future of artificial intelligence is....." required
        />
        <p className="mt-4 text-sm font-medium">Article Lenghth</p>
      </form>

      {/* right column */}
      <div></div>
    </div>
  );
};

export default Writearitcle;
