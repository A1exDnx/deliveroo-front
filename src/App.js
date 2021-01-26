import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// import des composants
import Header from "./components/Header";
import Restau from "./components/Restau";
import Content from "./components/Content";

// import des images

function App() {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend-dnx.herokuapp.com/"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Header />
      <Restau restau={data.restaurant} />
      <Content
        categories={data.categories}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
}

export default App;
