/* eslint-disable @typescript-eslint/no-unused-vars */
namespace DATA {
  type GetCoursesDataResponse = {
    id: number;
    name: string;
    author: string;
    price: number;
    image: string;
    description: string;
    city: string;
    created_date: string;
    updated_date: string;
  }[];
  type GetCoursesDataRequest = void;



  type GetWorkshopDataResponse = {
    id: number;
    name: string;
    description: string;
    created_date: string;
  }[];
  type GetWorkshopDataRequest = void;



  type GetArticlesDataResponse = {
    id: number;
    course_name: string;
    course_id: string;
    name: string;
    author: string;
    image: string;
    created_date: string;
    updated_date: string;
  }[];
  type GetArticlesDataRequest = void;
}
