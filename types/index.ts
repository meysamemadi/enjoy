import { title } from 'process';
import { type } from 'os';

export interface University {
  id: number;
  title: string;
  description: string;
  categories: Category[];
  main_pic: string;
  bg_pic: string;
  meta: Meta[];
  service: Service[];
  gallery : string[];
  lang:Language;
}
export interface Category {
  id: number;
  title: string;
}

export interface Meta {
  id: number;
  name: string;
  value: string;
  type: boolean
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


export interface Webinar {
  id: number;
  type: string;
  title: string;
  sub_title: string;
  subject: string;
  languages: string;
  present_by: string;
  location: string;
  main_pic: string;
  video_url?: string;
  lang: Language;
  featured : boolean;
}