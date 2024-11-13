"use client";

import React from "react";
import scss from "./Section7.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFormTelegram {
  email: string;
}

/// imports from ENV
const TG_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
const CHAD_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAD_ID;
/// imports from ENV

const Section7 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IFormTelegram>({
    mode: "onChange",
  });

  const botsMessageModel = (data: IFormTelegram) => {
    const messageTG = `User's email: <b>${data.email}</b>\n`;
    return messageTG;
  };

  const onSumbit: SubmitHandler<IFormTelegram> = async (data) => {
    try {
      await axios.post(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        chat_id: CHAD_ID,
        parse_mode: "html",
        text: botsMessageModel(data),
      });
      reset();
      toast.success("Сообщение успешно отправлено!", {
        className: "toast-custom",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Пожалуйста, попробуйте позже.", {
        className: "toast-custom",
        autoClose: 2000,
      });
      console.log(error);
    }
  };
  return (
    <section className={scss.Section7}>
      <div className="container">
        <div className={scss.content}>
          <h1>You have the power to define your future.</h1>
          <div className={scss.input_block}>
            <form onSubmit={handleSubmit(onSumbit)}>
              <input type="text" placeholder="EMAIL ADDRESS" {...register('email', {required: true})}/>
              {isSubmitting ? (
              <button  disabled>SEND...</button>
            ) : (
              <button className="hover-target">SUBMIT</button>
            )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
