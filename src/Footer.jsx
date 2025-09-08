export default function  Footer ({length}){
  
     const footerStyles = {
         backgroundColor: 'mediumblue',
        color: '#fff',

    }
    return(
        <footer style={footerStyles}>
        <p>{length} List {length === 1 ? "Item" : "Items"}</p>
        </footer>
    )
}