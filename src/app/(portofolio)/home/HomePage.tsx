"use client";

import ButtonMedia from "@/components/Button/SocialMedia/ButtonSocial";
import ButtonSpin from "@/components/Button/Spin/ButtonSpin";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-text">
          <p className="home-heading">
            Hello! <br />I am <span className="home-name"> Jaya Wicaksana</span>
          </p>
          <p>
            I am a Front End Developer with over 2 years of experience. I love
            the world of web development and am committed to creating visually
            appealing and user-friendly interfaces.
          </p>
          <div className="home-button">
            <ButtonSpin />
          </div>
        </div>
        <div className="home-image-container">
          <Image
            src="/img/joyokz.png"
            alt="Picture of the author"
            className="image-author"
            width={300}
            height={500}
          />
          <ButtonMedia />
        </div>
      </div>
    </div>
  );
}
