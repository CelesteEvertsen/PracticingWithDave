import { FaTrashAlt } from "react-icons/fa";
export default function LineItem({item, handelChecked, handelDelete}){
    return(
        <>
         <li className="item" key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handelChecked(item.id)}
          />
          <label
            style={item.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => handelChecked(item.id)}
          >
            {item.item}
          </label>
          <FaTrashAlt
            role="button"
            onClick={() => handelDelete(item.id)}
            tabIndex="0"
            aria-label={`Delete ${item.item}`}
          />
        </li>
        </>
    )
}