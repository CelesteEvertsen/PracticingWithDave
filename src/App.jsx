import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "On half pound bag of Cocoa Coverd Almons Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handelChecked = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItem);
    localStorage.setItem("shoppinglist", JSON.stringify(listItem));
  };
  const handelDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem);
    localStorage.setItem("shoppinglist", JSON.stringify(listItem));
  };

  return (
    <>
      <Header title="Handleliste" />
      <Content items={items} setItems={setItems}
      handelChecked={handelChecked}
      handelDelete={handelDelete}
      />
      <Footer length={items.length} />
    </>
  );
}

export default App;
