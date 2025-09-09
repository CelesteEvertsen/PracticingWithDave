export default function Input({colorValue, setColorValue}){
    return(
       <form action="" onSubmit={(e) => e.preventDefault}>
        <label >AddColor </label>
        <input type="text" autoFocus placeholder=" Add Color Name" required
        value={colorValue}
        onChange={(e)=> setColorValue(e.target.value)} />

       </form>
    )
}