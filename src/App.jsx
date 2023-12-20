import logo from "./logo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBarComponent from "./component/TopBarComponent";
import MyFooter from "./component/MyFooterComponent";
import AllTheBooks from "./component/AllTheBooks";
import SingleBook from "./component/SingleBook";

function App() {
  return (
    <div>
      <header>
        <TopBarComponent />
      </header>
      <section>
        <SingleBook></SingleBook>
      </section>
      <main>
        <AllTheBooks></AllTheBooks>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
