import { Link } from "react-router-dom";

function Item({ props }) {
  return (
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to={props.link}>
        {props.content}
      </Link>
    </li>
  );
}
function Menu({ list }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Trang chủ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {list.map((link, ind) => (
              <Item props={link} key={ind} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
function Header() {
  const listHeader = [
    {
      link: "/login",
      content: "Đăng nhập",
    },
    {
      link: "/hello",
      content: "Xin chào",
    },
    {
      link: "/car",
      content: "Xe hơi",
    },
    {
      link: "/show-group",
      content: "Nhóm",
    },
    {
      link: "/show-product",
      content: "Sản phẩm",
    },
  ];
  return <Menu list={listHeader} />;
}
export default Header;
