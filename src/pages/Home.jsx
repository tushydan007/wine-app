import Card from "../components/Card";
import { useState } from "react";

const Home = ({ result }) => {
  const [searchQuery, setSearchQuery] = useState("");

  let dynamicResult = searchQuery
    ? result.filter((r) =>
        r.strDrink.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : result;

  return (
    <div>
      <div className="w-8/12 shadow-lg m-auto mt-20 px-10">
        <h2 className="font-bold text-black text-lg">
          Search Your Favorite Cocktail
        </h2>
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          id="search"
          placeholder="Search"
          className="w-full bg-slate-100 my-5 p-1 font-bold text-black text-xl"
        />
      </div>
      <h1 className="mt-36 mb-20 text-2xl font-bold text-center">Cocktails</h1>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center mt-36 gap-10">
        {dynamicResult.map((item) => (
          <Card key={item.idDrink} obj={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
