import Link from "next/link";

const ButtonSpin = () => {
  return (
    <div>
      <Link href={"/projects"} className="link-none btn-spin">
        <div className="btn-spin-content">
          <span>See my projects</span> <i className="fi fi-rr-rocket-lunch"></i>
        </div>
      </Link>
    </div>
  );
};

export default ButtonSpin;
