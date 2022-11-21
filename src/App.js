import Favorites from "./components/Favorites/Favorites";
import Meals from "./components/Meals/Meals";
import Modal from "./components/Modal/Modal";
import Search from "./components/Search/Search";

function App() {
  return (
    <main>
      <Search/>
      <Favorites/>
      <Meals/>
      <Modal/>
    </main>
  );
}

export default App;
