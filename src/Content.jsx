import "./Content.css";
import ItemList from "./ItemList";


export default function Content({ items, handelChecked, handelDelete }) {
  // .filter funker som en slette knapp,
  //  fordi det går gjennom hele Arrayet å returenre kun det som er true. 
  // Så den beholder Ture og fjerne False.
  return (
    <main>
      {items.length ? (
       <ItemList
       items = {items}
       handelChecked={handelChecked}
       handelDelete={handelDelete}
       />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List is empty</p>
      )}
    </main>
  );
}
