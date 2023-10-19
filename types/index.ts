
export interface University {
  id: number;
  title: string;
  description: string;
  categories: Category[];
  main_pic: string;
  bg_pic: string;
  lang:Language
}
export interface Category {
  id: number;
  title: string;
}

export interface Language {
  id: number;
  name: string;
  code: string;
}
