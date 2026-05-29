export interface Movie {
  id: number;
  title: string;
  titleEn: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  cast: string;
  summary: string;
  recommendReason: string;
  posterUrl: string;
}
