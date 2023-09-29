import { Link } from "react-router-dom";

const Card = ({ obj }) => {
  return (
    <div className="w-56 shadow-xl">
      <figure className="w-full h-4/6 overflow-hidden">
        <img
          src={obj.strDrinkThumb}
          alt=""
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="p-3">
        <h2 className="font-bold text-lg">{obj.strDrink}</h2>
        <p className="text-base font-semibold text-black">{obj.strGlass}</p>
        <p className="te text-slate-300">{obj.strAlcoholic}</p>

        <Link
          to={`/products/${obj.idDrink}`}
          className="bg-gray-900 px-2 text-white uppercase font-semibold"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
