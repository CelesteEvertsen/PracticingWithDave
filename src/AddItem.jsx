import { FaPlus } from "react-icons/fa";
import './AddItem.css'
import { useRef } from "react";

export default function AddItem({newItem, setNewItem, handelSubmit}) {
  const inputRef = useRef();
  return (
    <>
      <form className="addForm" onSubmit={handelSubmit}>
        <label htmlFor="addItem">Add Item </label>
        <input
          autoFocus
          ref={inputRef}
          type="text"
          id="addItem"
          placeholder="Add Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button  type="submit" aria-label="Add Item" onClick={()=> inputRef.current.focus()}>
          <FaPlus />
        </button>
      </form>
    </>
  );
}
