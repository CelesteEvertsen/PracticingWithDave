import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };
  const handelChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };
  const handelDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setAndSaveItems(listItem);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    console.log(newItem);
    setNewItem("");
  };

  return (
    <>
      <Header title="Handleliste" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handelSubmit={handelSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        setItems={setItems}
        handelChecked={handelChecked}
        handelDelete={handelDelete}
      />

      <Footer length={items.length} />
    </>
  );
}

export default App;
