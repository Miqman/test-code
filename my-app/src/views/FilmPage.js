import axios from "axios";
import { BsPersonCircle } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

export default function FilmPage() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    listFilm();
  }, []);

  async function listFilm() {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://swapi.dev/api/films/`,
      });
      console.log(data.results);
      setFilm(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="px-4 py-2">
        <div className="mx-20 py-10">
          {film.map((el, index) => (
            <div
              className="p-4 w-full mt-5 text-center bg-gradient-to-r from-[#2D2424] via-[#5C3D2E] to-[#B85C38] rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
              key={index + 1}
            >
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                {el.title}
              </h5>
              <p className="mb-5 text-base text-gray-200 sm:text-lg dark:text-gray-300">
                {el.opening_crawl}
              </p>
              <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="w-full sm:w-auto bg-[#E0C097] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-[#2D2424] dark:hover:bg-[#161616] dark:focus:ring-gray-700"
                >
                  <BsPersonCircle className="mr-3 w-7 h-7" />
                  <div className="text-left">
                    <div className="mb-1 text-xs">Director</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">
                      {el.director}
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="w-full sm:w-auto bg-[#E0C097] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-[#2D2424] dark:hover:bg-[#161616] dark:focus:ring-gray-700"
                >
                  <RiPlayList2Fill className="mr-3 w-7 h-7" />

                  <div className="text-left">
                    <div className="mb-1 text-xs">Episode</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">
                      {el.episode_id}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
