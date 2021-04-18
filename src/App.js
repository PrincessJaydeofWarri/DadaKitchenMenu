import { useState } from "react";
import Catagories from "./Catagories";
import Menu from "./Menu";
import items from "./data";
import Navbar from "./Components/Navbar";

const allTypes = ["all", ...new Set(items.map((item) => item.type))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [types] = useState(allTypes);

  const filterItems = (type) => {
    if (type === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.type === type);
    setMenuItems(newItems);
  };

  return (
    <main>
      <Navbar />
      <section className="menu section">
        <div className="title">
          <h2>Dada's Kitchen Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Catagories types={types} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
