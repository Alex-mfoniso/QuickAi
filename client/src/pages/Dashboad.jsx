import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Sparkle } from "lucide-react";

const Dashboad = () => {
  const [creation, setCreation] = useState([]);

  const getDashboardData = async () => {
    setCreation(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);
  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        {/* total creation card */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p>Total Creation</p>
            <h2>{creation.length}</h2>
          </div>
          <div>
            <Sparkle className="w-5 text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboad;
