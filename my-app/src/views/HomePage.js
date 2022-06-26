import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-4 py-2">
        <div className="mx-20 flex flex-wrap justify-center py-10">
          <div
            className="rounded-lg h-[200px] w-[500px] flex justify-center items-center border border-orange-400 mx-5 mt-5 hover:bg-orange-400 cursor-pointer"
            onClick={() => navigate("/people")}
          >
            <h1 className="text-white font-bold uppercase leading-8 text-[30px]">
              People
            </h1>
          </div>
          <div
            className="rounded-lg h-[200px] w-[500px] flex justify-center items-center border border-orange-400 mx-5 mt-5 hover:bg-orange-400 cursor-pointer"
            onClick={() => navigate("/planet")}
          >
            <h1 className="text-white font-bold uppercase leading-8 text-[30px]">
              Planets
            </h1>
          </div>
          <div
            className="rounded-lg h-[200px] w-[500px] flex justify-center items-center border border-orange-400 mx-5 mt-5 hover:bg-orange-400 cursor-pointer"
            onClick={() => navigate("/film")}
          >
            <h1 className="text-white font-bold uppercase leading-8 text-[30px]">
              film
            </h1>
          </div>
          <div className="rounded-lg h-[200px] w-[500px] flex justify-center items-center border border-orange-400 mx-5 mt-5 hover:bg-gradient-to-r from-orange-700 via-amber-900 to-orange-500 cursor-pointer">
            <h1 className="text-white font-bold uppercase leading-8 text-[30px]">
              species
            </h1>
          </div>
          <div className="rounded-lg h-[200px] w-[500px] flex justify-center items-center border border-orange-400 mx-5 mt-5 hover:bg-gradient-to-r from-orange-700 via-amber-900 to-orange-500 cursor-pointer">
            <h1 className="text-white font-bold uppercase leading-8 text-[30px]">
              vechiles
            </h1>
          </div>
          <div className="rounded-lg h-[200px] w-[500px] flex justify-center items-center border border-orange-400 mx-5 mt-5 hover:bg-gradient-to-r from-orange-700 via-amber-900 to-orange-500 cursor-pointer">
            <h1 className="text-white font-bold uppercase leading-8 text-[30px]">
              startships
            </h1>
          </div>
        </div>
        <h1>Home start wars nih ygy</h1>
      </div>
    </>
  );
}
