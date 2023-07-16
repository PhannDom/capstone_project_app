import { Routes, Route } from "react-router-dom";
import { Home, Navigation, Authentication, Shop } from "routes/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" index element={<Home />} />
        <Route path="shop" index element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
