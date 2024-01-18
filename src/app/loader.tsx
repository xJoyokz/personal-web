import Image from "next/image";

export default function Loading() {
  return (
    <div className="loading">
      <Image
        className="image-loading"
        width={500}
        height={500}
        src="/img/joyokz-logo.svg"
        alt="Logo"
      />
    </div>
  );
}
