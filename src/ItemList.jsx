import LineItem from "./LineItem";

export default function ItemList({ items, handelChecked, handelDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          item={item}
          handelChecked={handelChecked}
          handelDelete={handelDelete}
        />
      ))}
    </ul>
  );
}
