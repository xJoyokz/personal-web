"use client";

import Image from "next/image";

export default function JourneyPage() {
  return (
    <div className="journey-page">
      <div className="journey-heading">
        <div className="journey-text">
          <h1> Welcome to my journey</h1>
          <p>
            Di sini, saya mengajak Anda untuk menjelajahi perjalanan yang luar
            biasa melalui berbagai pengalaman dan cerita inspiratif. Mulai dari
            momen-momen berharga hingga tantangan yang membangun karakter,
            halaman ini dirancang untuk merangkum setiap langkah dan petualangan
            yang membentuk perjalanan hidup saya.
          </p>
        </div>
        <div className="journey-image-container">
          <Image
            width={200}
            height={200}
            src={"/img/joyokz-journey.jpg"}
            alt="joyokz-journey"
            className="image-journey"
          />
        </div>
      </div>
      <h3>Education</h3>
      <div>
        <ul className="bar">
          <li>
            <div className="journey-education">
              <h4>SMPN 1 Negara</h4>
              <p></p>
            </div>
          </li>
          <li>
            <div className="journey-education">
              <h4>SMAN 1 Negara</h4>
              <p></p>
            </div>
          </li>
          <li>
            <div className="journey-education">
              <h4>ITB STIKOM BALI</h4>
              <p></p>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
      <h3>Carrer Path</h3>
      <div>
        <ul className="bar">
          <li>
            <div className="journey-carrer">
              <h4>Its A Virus </h4>
              <p></p>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
