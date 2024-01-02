import { City } from './../app/[lang]/have-your-own-trip/_components/photographer/city';
import { title } from "process";
import { FreeConsultation } from "./../app/[lang]/educational/[[...category]]/_components/free-consultation";

export interface University {
  id: number;
  title: string;
  description: string;
  categories: Category[];
  main_pic: string;
  bg_pic: string;
  meta: Meta[];
  service: Service[];
  gallery: string[];
  lang: Language;
}
export interface Category {
  id: number;
  title: string;
}

export interface Meta {
  id: number;
  name: string;
  value: string;
  type: boolean;
}

export interface Language {
  id: number;
  name: string;
  code: string;
}

export interface Service {
  id: number;
  title: string;
}

export interface UniversitySuccess {
  id: number;
  title: string;
  time: string;
  main_pic: string;
}

export interface Webinar {
  id: number;
  type: "webinar" | "video";
  title: string;
  sub_title: string;
  subject: string;
  languages: string;
  present_by: string;
  description: string;
  location: string;
  main_pic: string;
  video_url?: string;
  lang: Language;
  featured: boolean;
  start_date: string;
  start_time: string;
  organizer: string;
}

export interface MedicalSpecialService {
  id: number;
  title: string;
  short_description: string;
  subtitle_one: string;
  subtitle_two: string;
  description_one: string;
  description_two: string;
  image: string;
  image_bg: string;
  image_one: string;
  image_two: string;
}

export interface FreeConsultation {
  status: boolean;
  data: any;
}

// medical

export interface specialService {
  id: string;
  title: string;
  short_description: string;
  subtitle_one: string;
  subtitle_two: string;
  description_one: string;
  description_two: string;
  image: string;
  image_bg: string;
  image_one: string;
  image_two: string;
}

export interface City {
  id: string;
  name: string;
  description: string;
  image_one: string;
  image_two: string;
}
