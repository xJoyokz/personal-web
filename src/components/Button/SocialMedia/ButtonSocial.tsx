import Link from "next/link";

const ButtonMedia = () => {
  return (
    <div className="btn-media-container">
      <ul className="wrapper">
        <Link
          href={"https://www.linkedin.com/in/jaya-wicaksana-625144234/"}
          className="link-none"
        >
          <li className="icon linked-in">
            <i className="item-icon fi fi-brands-linkedin "></i>
          </li>
        </Link>
        <Link href={"https://www.instagram.com/xjoyokz/"} className="link-none">
          <li className="icon instagram">
            <i className="item-icon fi fi-brands-instagram "></i>
          </li>
        </Link>
        <Link href={"https://github.com/xjoyokz"} className="link-none">
          <li className="icon github">
            <i className="item-icon fi fi-brands-github "></i>
          </li>
        </Link>
        <Link href={"mailto:jaya.profesional@gmail.com"} className="link-none">
          <li className="icon email">
            <i className="item-icon fi fi-rr-envelope"></i>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ButtonMedia;
