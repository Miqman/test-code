import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PeoplePage() {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    listPeople();
  }, [page]);

  async function listPeople() {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://swapi.dev/api/people/?page=${page}`,
      });
      console.log(data);
      setPeople(data.results);
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
      <div className="px-4 py-2">
        <div className="mx-20 flex flex-wrap justify-center py-10">
          {people.map((el, index) => (
            <a
              className="block p-6 max-w-xs bg-gradient-to-r from-orange-800 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-2 mt-5 cursor-pointer"
              key={index}
              onClick={() => navigate(`/detail/${index + 1}`)}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {el.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-slate-300">
                Gender: {el.gender}
                <br />
                Eye Color: {el.eye_color} <br />
                Hair Color: {el.hair_color}
              </p>
            </a>
          ))}
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
