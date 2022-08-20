import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/signIn.component";

const Shop = () => {
  return <h1>This is shop page</h1>;
};

// const Contact = () => {
//   return <h2>Hello Contact Page</h2>;
// };

// const About = () => {
//   return <h3>Hello About Page</h3>;
// };

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signIn" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
