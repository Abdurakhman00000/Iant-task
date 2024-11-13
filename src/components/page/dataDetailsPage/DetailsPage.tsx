"use client";

import React, { useEffect, useState } from "react";
import scss from "./DetailsPage.module.scss";
import { useGetCoursesDataQuery } from "@/redux/api/data";
import { useParams } from "next/navigation";
import Loader from "@/components/ui/loader/Loader";

// interface IProductFromApi {
//   id: number;
//   name: string;
//   author: string;
//   price: number;
//   image: string;
//   description: string;
//   city: string;
//   created_date: string;
//   updated_date: string;
// }

const DetailsPage = () => {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";
  const { data } = useGetCoursesDataQuery();
  const itemDet = data?.find((item) => item.id.toString() === id);


  function formatDate(dateString: string | undefined): string {
    if (!dateString) {
        return "Invalid date"; 
    }
    
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}


  const [isLoadinger, setIsLoadinger] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadinger(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoadinger) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <section className={scss.DetailsPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content_head}>
            <div className={scss.line}></div>
            <h1>Course Details</h1>
          </div>
            <div className={scss.main_details}>
            <div className={scss.details_img}>
              <img src={itemDet?.image} alt="" />
            </div>

            <div className={scss.details_text}>
              <h1>{itemDet?.name}</h1>
              <p><span>Автор:</span>{itemDet?.author}</p>
              <p><span>Описание:</span>{itemDet?.description}</p>
              <p><span>Цена:</span>{itemDet?.price}</p>
              <p><span>Город:</span>{itemDet?.city}</p>
              <p><span>Дата добавление:</span>{formatDate(itemDet?.created_date)}</p>
              <p><span>Дата обновление:</span>{formatDate(itemDet?.updated_date)}</p>
            </div>
            </div>



            <div className={scss.main_descr}>
              <h3>Подробнее описание:</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius porro consequatur doloribus dolorem quasi! Deleniti, harum velit? Dolore at aspernatur iste. Adipisci soluta non animi neque alias laudantium, hic esse eum temporibus dolore suscipit deleniti voluptatibus nam quia? Numquam architecto adipisci doloremque eaque nemo repellat at possimus ipsam. Natus nam excepturi optio, harum illo laboriosam officiis sit doloribus consequuntur consequatur voluptatum! Voluptates sit tempora et porro nostrum earum reiciendis maxime qui corrupti sapiente, similique veritatis. Natus velit labore officiis earum in recusandae, eius maxime ut blanditiis! A alias ex hic molestiae dolor, necessitatibus velit excepturi numquam eius nihil, delectus vel.</p>
            </div>



            <div className={scss.main_actors}>
              <h1>Авторы:</h1>
            <div className={scss.details_actors}>
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/048/174/549/non_2x/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg" alt="" />
            </div>
            </div>


            <div className={scss.similar}>
              <h1>Похожие курсы:</h1>
              <div className={scss.main_card}>
            {data ? (
              data?.map((item) => (
                <div className={scss.card_item} key={item.id}>
                    <img src={item.image} alt="" />
                  <div className={scss.card_text}>
                    <h3>{item.name}</h3>
                    <p>{item.author}</p>
                    <h5>$ {item.price} USD</h5>
                    <button>LEARN MORE</button>
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
      </div>
    </section>
  );
};

export default DetailsPage;
