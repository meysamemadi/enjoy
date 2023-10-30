
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