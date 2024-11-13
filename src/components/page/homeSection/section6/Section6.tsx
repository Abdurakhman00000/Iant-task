"use client";

import React from "react";
import scss from "./Section6.module.scss";
import { useGetArticleDataQuery } from "@/redux/api/data";
import Link from "next/link";

const Section6 = () => {
  const { data } = useGetArticleDataQuery();

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
  return (
    <section className={scss.Section1}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content_text}>
            <h1>Featured Courses</h1>
            <div className={scss.content_underline}></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse <br /> varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra <br /> ornare, eros dolor interdum nulla,
              ut commodo diam libero vitae erat.
            </p>
            <button>View All Courses</button>
          </div>

          <div className={scss.main_card}>
            {data ? (
              data?.map((item) => (
                <div className={scss.card_item} key={item.id}>
                  <Link href={`data-details/${item.id}`}>
                    <img src={item.image} alt="" />
                  </Link>
                  <div className={scss.card_text}>
                    <p>{formatDate(item.created_date)}</p>
                    <h3>{item.name}</h3>
                    <p>{item.author}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className={scss.main_pagin}>
                <div className={scss.non_card}>
                  <div className={scss.block}></div>
                  <div className={scss.block}></div>
                  <div className={scss.block}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
