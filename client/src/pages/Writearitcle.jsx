import { Edit, Sparkle } from "lucide-react";
import react, { useState } from "react";

const Writearitcle = () => {
  const articleLength = [
    { length: 800, text: "Short (500-800 words)" },
    { length: 1200, text: "medium (800-1200 words)" },
    { length: 1600, text: "long (1200+ words)" },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);

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
          <Sparkle className="w-6 text-[#4a7aff]" />
          <h1 className="text-xl font-semibold">Article Configguration</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Article Topic</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="The future of artificial intelligence is....."
          required
        />
        <p className="mt-4 text-sm font-medium">Article Lenghth</p>
        <div className="flex flex-wrap gap-3 mt-3 sm:max-w-9/11">
          {articleLength.map((item, index) => (
            <span
              onClick={() => setSelectedLength(item)}
              key={index}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedLength.text === item.text
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-500 border-gray-300"
              }`}
            >
              {item.text}
            </span>
          ))}
        </div>
        <br />{" "}
        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-[#226bff] to-[#65adff] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Edit className="w-5" />
          Generate Article
        </button>
      </form>

      {/* right column */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <Edit className="w-6 h-5 text-[#4a7aff]" />
          <h1 className="text-xl font-semibold">Generated Article </h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Edit className="w-9 h-9 text-[#4a7aff]" />
            <p>Enter a topic and click "Generate article" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writearitcle;
