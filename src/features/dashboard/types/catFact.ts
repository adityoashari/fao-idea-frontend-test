import { TNextLink } from "../../../app/types/apiResponse";

export type TCatFact = {
  fact: string;
  length: number;
};

export type TCatFactResponse = {
  current_page: string;
  data: TCatFact[];
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
