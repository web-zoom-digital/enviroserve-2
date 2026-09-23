export type BlogCategory =
  | "All Posts"
  | "Battery Waste"
  | "e-Waste"
  | "EPR"
  | "Hazardous waste"
  | "Plastic Waste"
  | "Waste management";

export interface BlogAuthor {
  name: string;
  role: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  image: string;
  readingTime: string;
  commentsCount?: string;
  author: BlogAuthor;
  content: string[];
  tags: string[];
}
