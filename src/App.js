import "./App.scss";
import 'swiper/swiper.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routers from "./config/Routers";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routers />
            {/* <Footer /> */}
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
