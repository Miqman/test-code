import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();

  const [person, setPerson] = useState("");
  const [film, setFilm] = useState("");
  const [home, setHome] = useState("");
  const [linkhome, setLinkhome] = useState("");
  const [linkspecies, setLinkspecies] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    dataPerson();
    dataHome();
    dataSpecies();
  }, []);

  async function dataPerson() {
    try {
      const { data } = await axios({
        method: "get",
        url: `https://swapi.dev/api/people/${id}`,
      });
      console.log(data);
      setPerson(data);
      setFilm(data.films.length);
      setLinkhome(data.homeworld);
      setLinkspecies(data.species);
    } catch (error) {
      console.log(error);
    }
  }

  async function dataHome() {
    try {
      const { data } = await axios({
        method: "get",
        url: linkhome,
      });
      setHome(data.name);
    } catch (error) {
      console.log(error);
    }
  }
  async function dataSpecies() {
    try {
      const { data } = await axios({
        method: "get",
        url: linkspecies,
      });
      setSpecies(data.name);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="px-4 py-2 pt-8">
        <div className="flex justify-center">
          <div class="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:bg-opacity-40 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10 p-2">
              <img
                class="mb-3 w-24 h-24 rounded-full shadow-lg"
                src="https://icon-library.com/images/person-png-icon/person-png-icon-29.jpg"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {person.name}
              </h5>
              <p class="mb-1 text-sm text-gray-900 dark:text-slate-400">
                {person.birth_year}
              </p>
              <h6 class="self-start mb-1 text-lg font-medium text-gray-900 dark:text-white text-left">
                information
              </h6>
              <p class="self-start mb-5 text-md text-gray-500 sm:text-lg dark:text-gray-400">
                Eye Color: {person.eye_color}, Height: {person.height}, Mass:{" "}
                {person.mass}, Skin Color: {person.skin_color}
              </p>
              <p class="self-start mb-5 text-md text-gray-500 sm:text-lg dark:text-gray-400">
                Gender: {person.gender}, Hair Color: {person.hair_color}, Total
                Film: {film}
              </p>

              <div class="flex mt-4 space-x-3 lg:mt-6">
                <a
                  href="#"
                  className="w-full sm:w-auto bg-[#E0C097] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-[#2D2424] dark:hover:bg-[#161616] dark:focus:ring-gray-700"
                >
                  <div className="text-left">
                    <div className="mb-1 text-xs">Home World</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">
                      {home}
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="w-full sm:w-auto bg-[#E0C097] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-[#2D2424] dark:hover:bg-[#161616] dark:focus:ring-gray-700"
                >
                  <div className="text-left">
                    <div className="mb-1 text-xs">Species</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">
                      {species}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
