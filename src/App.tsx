import axios from "axios";
import { useEffect, useState } from "react";

import bgImage from "./assets/background.jpg";

interface MyData {
  data: {
    API: string;
    Description: string;
    Link: string;
    Cors: string;
    HTTPS: boolean;
    Category: string;
    Auth: string;
  };
}

function App() {
  const [api, setApi] = useState<MyData>({
    data: {
      API: "",
      Description: "",
      Link: "",
      Cors: "",
      HTTPS: false,
      Category: "",
      Auth: "",
    },
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
    <div
      id="background"
      className="App w-screen h-screen flex items-center justify-center bg-cover bg-no-repeat z-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full h-full absolute z-[1] backdrop-blur-lg backdrop-grayscale-[60%] backdrop-contrast-150 backdrop-brightness-50" />
      <div className="w-full h-full z-[2] flex items-end justify-center">
        <div className="w-[95%] h-[95%] rounded-t-[3rem] text-white bg-[#00060d] bg-opacity-40 backdrop-brightness-100 backdrop-contrast-[200%] backdrop-grayscale flex flex-col items-center justify-between p-4">
          <nav className="w-[97.25%] flex font-bold sticky justify-between gap-3 pt-2 border-b-2 border-white border-opacity-90">
            <ul className="flex grow-[3] justify-evenly">
              <li>All</li>
              <li>Categories</li>
              <li>Random</li>
            </ul>
            <ul className="h-full pb-2 flex grow gap-4 justify-evenly border-l-2 border-white border-opacity-90">
              <li>
                <a href="https://github.com/Bobber2002/random-api-generator">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://github.com/Bobber2002/random-api-generator">
                  Other Projects
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col h-full items-center w-full overflow-y-scroll">
            <div className="w-[97.25%] min-h-full flex flex-auto flex-col lg:justify-evenly justify-between pb-12 items-center border-b-2 border-white border-opacity-90">
              <h1 className="lg:text-[3vw] text-[6vw] h-1/6 font-extrabold">
                Your random API
              </h1>
              {api.data.API ? (
                <>
                  <div className="flex flex-col w-3/4 justify-top items-center h-1/3">
                    <h2 className="lg:text-[6vw] text-[12vw] break-words text-center max-w-[75%]">
                      {api.data.API}
                    </h2>
                    <h3 className="lg:text-[1.75vw] text-[3.5vw] text-center">
                      {api.data.Description}
                    </h3>
                    <h3 className="lg:text-[1.35vw] text-[2.7vw] text-center">
                      <ul className="flex gap-4">
                        <li className="capitalize">Cors: {api.data.Cors}</li>
                        <li>HTTPS: {api.data.HTTPS ? "Yes" : "No"}</li>
                        <li>Category: {api.data.Category}</li>
                        <li>Auth: {api.data.Auth ? api.data.Auth : "None"}</li>
                      </ul>
                    </h3>
                  </div>
                  <div className="w-full h-1/3 flex flex-col gap-4 justify-end items-center pt-12">
                    <button
                      onClick={() => window.open(api.data.Link)}
                      className="w-[22.75%] h-[65%] text-black text-3xl text-bold from-white via-gray-100 to-gray-300 bg-gradient-to-tr rounded-3xl drop-shadow-md"
                      style={{
                        boxShadow: " -8px 8px 0px 0px rgba(115,115,115,1)",
                      }}
                    >
                      <i>Take me there!</i>
                    </button>
                    <p className="cursor-pointer" onClick={() => Apis()}>
                      New API.
                    </p>
                  </div>
                </>
              ) : (
                <div className="grow" />
              )}
            </div>
            <footer className="min-h-[25%] w-full px-8 py-4 flex flex-col gap-4">
              <p>
                API by: <a href="https://github.com/davemachado">davemachado</a>
              </p>
              <p>
                API docs:{" "}
                <a href="https://github.com/davemachado/public-api">Github</a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
