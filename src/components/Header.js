function Item({ props }) {
  console.log(props);
  return (
    <li>
      <a href={props.link}>{props.content}</a>
    </li>
  );
}
function Menu({ list }) {
  console.log(list);
  return (
    <ul>
      {list.map((link, ind) => (
        <Item props={link} key={ind} />
      ))}
    </ul>
  );
}
function Header() {
  const listHeader = [
    {
      link: "/about",
      content: "About Me",
    },
    {
      link: "/cart",
      content: "Gio hang",
    },
  ];
  return <Menu list={listHeader} />;
}
export default Header;
