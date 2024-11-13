"use client";
import React, { FC, useState, useEffect } from "react";
import scss from "./Section4.module.scss";
import { IoStar } from "react-icons/io5";

const Section4: FC = () => {
  const testimonials = [
    {
      descr:
        "“Kate's courses are a game changer. She's thorough, organized, and anyone—from beginners to experts—can learn something from her courses and take their skills to the next level up new.”",
      author: "James Brown, Influencer",
    },
    {
      descr:
        "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe temporibus ipsum debitis quibusdam. Tempora, quibusdam accusantium! Expedita temporibus beatae error build up new!”",
      author: "Anna White, Developer",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className={scss.Section5}>
      <div className="container">
        <div className={scss.content}>
          <ul>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
          </ul>
          <div className={scss.title}>
            <p>{testimonials[current].descr}</p>
          </div>
          <span>{testimonials[current].author}</span>
          <div className={scss.indicators}>
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`${scss.circle} ${
                  current === index ? scss.active : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;