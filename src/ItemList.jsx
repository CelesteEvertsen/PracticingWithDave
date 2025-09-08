import LineItem from "./LineItem";

export default function ItemList({ items, handelChecked, handelDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handelChecked={handelChecked}
          handelDelete={handelDelete}
        />
      ))}
    </ul>
  );
}
