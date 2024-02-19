import React from "react";
import Button from "../Button"; // Assuming Button component exists and is imported correctly
import './styles/Home.css'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="mb-5 text-5xl font-bold">
        Welcome to BloggerApp
      </h1>
      <p class="center">
        BloggerApp is a simple blog application that allows users to
        effortlessly share their stories and connect with their audience.
      </p>
      <Button text="Get Started" onClick={() => console.log("Button clicked")} />
      {/* Replace onClick with the desired functionality */}
    </div>
  );
};

export default Home;
