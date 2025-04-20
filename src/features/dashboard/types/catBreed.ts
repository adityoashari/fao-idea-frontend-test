import { TNextLink } from "../../../app/types/apiResponse";

export type TCatBreed = {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
};

export type TCatBreedResponse = {
  current_page: string;
  data: TCatBreed[];
  first_page_url: string;
  from: number;
  last_page: string;
  last_page_url: string;
  links: TNextLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};
