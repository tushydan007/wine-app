import { Link } from "react-router-dom";

const ProductDetail = ({ result }) => {
  return (
    <div>
      <div>
        <Link>BACK HOME</Link>
        <h1>{result.strDrink}</h1>
      </div>
      <div className="grid grid-cols-2">
        <figure>
          <img src={result.strDrinkThumb} alt="" />
        </figure>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetail;
