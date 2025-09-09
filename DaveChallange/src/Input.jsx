import colorNames from "colornames";

export default function Input({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) {
  return (
    <form action="" onSubmit={(e) => e.preventDefault}>
      <label>AddColor </label>
      <input
        type="text"
        autoFocus
        placeholder=" Add Color Name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
       <button 
    type="button" 
    onClick={()=> setIsDarkText(!isDarkText)}> 
    Toggle text color</button>
    </form>
   
  );
}
