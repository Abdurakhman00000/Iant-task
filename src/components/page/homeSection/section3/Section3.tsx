"use client";
import React, { useState } from "react";
import scss from "./Section3.module.scss";
import { useGetWorkshopDataQuery } from "@/redux/api/data";

const Section4 = () => {
  const { data } = useGetWorkshopDataQuery();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={scss.Section3}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content_text}>
            <h1>Upcoming Free Workshops</h1>
            <div className={scss.content_underline}></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse <br /> varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla,
              ut commodo diam libero vitae erat.
            </p>
            <button>VIEW ALL WORKSHOPS</button>
          </div>
          <div className={scss.main_card}>
            {data?.map((item) => (
              <div
                className={`${scss.card_item} ${
                  expandedId === item.id ? scss.expanded : ""
                }`}
                key={item.id}
              >
                <div className={scss.card_text}>
                  <h3>{item.name}</h3>
                  <span>{item.description}</span>
                  {expandedId === item.id && (
                    <p className={scss.additionalInfo}>{item.description}</p>
                  )}
                  <button onClick={() => toggleExpand(item.id)}>
                    {expandedId === item.id ? "SHOW LESS" : "LEARN MORE"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;