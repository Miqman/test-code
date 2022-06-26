import { useNavigate } from "react-router-dom";

export default function NavbarComponent() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col h-[150px]">
        <div className="flex flex-auto h-[100px] justify-between px-5 py-2">
          <div className="text-white">
            <h1>.</h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[160px] h-[70px]"
              src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png"
              alt=""
              height="700"
              width="350"
            ></img>
          </div>
          <div className="text-white">
            <h1>.</h1>
          </div>
        </div>
        <div className="flex flex-auto h-[50px] justify-center divide-x divide-orange-200">
          <div className=" p-1 px-3 items-center flex  justify-center">
            <h1
              className="uppercase font-bold text-orange-400 text-[24px] cursor-pointer"
              onClick={() => navigate("/")}
            >
              home
            </h1>
          </div>
          <div className=" p-1 px-3 items-center flex  justify-center">
            <h1
              className="uppercase font-bold text-orange-400 text-[24px] cursor-pointer"
              onClick={() => navigate("/film")}
            >
              Film
            </h1>
          </div>
          <div className=" p-1 px-3 items-center  flex justify-center">
            <h1
              className="uppercase font-bold text-orange-400 text-[24px] cursor-pointer"
              onClick={() => navigate("/people")}
            >
              People
            </h1>
          </div>
          <div className=" p-1 px-3  items-center flex justify-center">
            <h1
              className="uppercase font-bold text-orange-400 text-[24px] cursor-pointer"
              onClick={() => navigate("/planet")}
            >
              Planets
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
