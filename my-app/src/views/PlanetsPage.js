import axios from "axios";
import { useEffect, useState } from "react";

export default function PlanetsPage() {
  const [planet, setPlanet] = useState([]);
  const [count, setCount] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    listPlanet();
  }, [page]);

  async function listPlanet() {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://swapi.dev/api/planets/?page=${page}`,
      });

      setPlanet(data.results);
      setCount(data.count);
    } catch (error) {
      console.log(error);
    }
  }

  function btnBack() {
    if (page > 1) {
      setPage(page - 1);
    }
    // console.log(page);
  }

  function btnNext() {
    if (page < count) {
      setPage(page + 1);
    }
    // console.log(page);
  }
  return (
    <>
      <div className="px-4 py-2 mt-6">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-[#FA7D09] dark:bg-opacity-50 dark:text-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Planet name
                </th>
                <th scope="col" className="px-6 py-3">
                  Population
                </th>
                <th scope="col" className="px-6 py-3">
                  Terrain
                </th>
                <th scope="col" className="px-6 py-3">
                  Climate
                </th>
                <th scope="col" className="px-6 py-3">
                  Diameter
                </th>
              </tr>
            </thead>
            <tbody className="">
              {planet.map((el, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:bg-opacity-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={index + 1}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {el.name}
                  </th>
                  <td className="px-6 py-4">{el.population}</td>
                  <td className="px-6 py-4">{el.terrain}</td>
                  <td className="px-6 py-4">{el.climate}</td>
                  <td className="px-6 py-4">{el.diameter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 mx-20 flex justify-end">
          <button
            onClick={btnBack}
            className="py-2 px-4 text-sm mx-3 font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </button>

          <button
            onClick={btnNext}
            className="py-2 px-4 mx-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
