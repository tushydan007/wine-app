import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import { useQuery } from "react-query";
import axios from "axios";

const getCocktails = () => {
  return axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"
  );
};

function App() {
  const { data, isError, error, isLoading } = useQuery(
    "cocktails",
    getCocktails
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-56 m-auto">
        Loading...
      </div>
    );
  }
  if (isError) {
    return <div className="grid place-content-center">{error.message}</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home result={data.data.drinks} />} />
          <Route path="/about" element={<About />} />
          {/* <Route
            path="/products/:id"
            element={<ProductDetail result={data.data.drinks[0]} />}
          /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
