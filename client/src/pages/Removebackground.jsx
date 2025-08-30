import { Edit, Eraser, Hash, Sparkle, Sparkles } from "lucide-react";
import react, { useState } from "react";

const Removebackground = () => {
  const [input, setInput] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // if (!input) return;
    // // Here you would typically send the input to your backend to generate the article
    // console.log("Generating article for:", input, "with length:", selectedLength);
    // setInput(""); // Reset input after submission
    // setSelectedLength(articleLength[0]); // Reset selected length after submission
  };
  return (
    <div className="h-full overflow-y-scroll p-6 flex flex-wrap items-start gap-4 text-slate-700">
      {/* left column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg boreder border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#ff4938]" />
          <h1 className="text-xl font-semibold">Background Removal</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Upload image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="image/*"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
          required
        />
     
       <p className="mt-1 text-xs font-light text-gray-500">Supported formats: JPG, PNG. and any other image format</p>
        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-[#f6ab41] to-[#ff4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Eraser className="w-5" />
       Remove Background
        </button>
      </form>

      {/* right column */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <Eraser className="w-6 h-5 text-[#ff4938]" />
          <h1 className="text-xl font-semibold">Processed Image </h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Eraser className="w-9 h-9 " />
            <p>Upload an image an click "Remove Background" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Removebackground;
