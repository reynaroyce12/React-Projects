import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function goLeft() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function goRight() {
    console.log(index);
    if (index < people.length - 1) {
      setIndex(index + 1);
    }
  }

  function randomPersom() {
    let randomNum = Math.floor(Math.random() * people.length);
    if (randomNum === index) {
      randomNum += 1;
    }
    setIndex(randomNum);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="author">{name}</div>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={goLeft}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={goRight}>
          <FaChevronRight />
        </button>
      </div>
      <button className="prev-btn" onClick={randomPersom}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
