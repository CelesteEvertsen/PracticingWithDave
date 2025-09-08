export default function Header({ title }) {
  const headerStyles = {
    backgroundColor: "mediumblue",
    color: "#fff",
  };
  return (
    <header style={headerStyles}>
      <h1>{title}</h1>
    </header>
  );
}
