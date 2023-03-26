import axios from "axios";
import { useEffect, useState } from "react";

interface MyData {
  data: {
    API: string;
    Description: string;
    Link: string;
  };
}

function App() {
  const [api, setApi] = useState<MyData>({
    data: { API: "", Description: "", Link: "" },
  });

  const Apis = () => {
    axios.get("https://api.publicapis.org/random").then((res) => {
      console.log(res.data.entries[0]);
      setApi({ data: res.data.entries[0] });
    });
  };

  useEffect(() => {
    Apis();
  }, []);

  return (
    <div className="App w-screen h-screen bg-blue-100 flex items-center justify-center">
      <div className="w-3/5 h-2/5 bg-blue-300 rounded-2xl border-4 border-blue-500 flex flex-col items-center justify-between gap-4 p-4">
        <h1 className="text-4xl font-bold">Your random API</h1>
        <h2 className="text-3xl">{api.data.API}</h2>
        <h3 className="text-xl">{api.data.Description}</h3>
        <button
          className="bg-red-500 rounded-2xl h-2/5 w-1/3 border-red-700 border-4 capitalize text-4xl font-bold text-gray-50"
          onClick={() => {
            window.open(api.data.Link);
          }}
        >
          take me there!
        </button>
      </div>
    </div>
  );
}

export default App;
