export interface ReadTimeResults {
  text: string;
  time: number;
  words: number;
  minutes: number;
}

export type ArticleType = {
  datePublished: string;
  lastUpdated: string;
  title: string;
  excerpt: string;
  slug: string;
  content: any;
  tags: any;
  readingTime: ReadTimeResults;
};
