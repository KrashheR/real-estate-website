export interface IConstructor {
  id: number;
  type: string;
  question: string;
  filter: string;
  variants: Variant[];
}

interface Variant {
  answer: string;
  value: string | number | string[];
}

export interface UserChoices {
  minPrice: number | null;
  maxPrice: number | null;
  objectType: string;
  completionDates: string[];
}
