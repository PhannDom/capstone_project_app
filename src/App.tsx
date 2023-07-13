import { Routes, Route } from "react-router-dom";
import { Home, Navigation, SignIn } from "routes/index";

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" index element={<Home />} />
        <Route path="shop" index element={<Shop />} />
        <Route path="sign-in" index element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
