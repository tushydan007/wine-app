import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-8/12 shadow-lg m-auto mt-20 px-10 p-28 grid place-content-center">
      <p className="mb-10 text-center font-bold text-2xl">
        Oops! It Is A Dead End
      </p>
      <button
        className="bg-gray-900 px-2 text-white uppercase font-semibold mx-auto p-3 rounded-md hover:bg-gray-500"
        onClick={() => navigate("/")}
      >
        BACK HOME
      </button>
    </div>
  );
};

export default NotFound;
