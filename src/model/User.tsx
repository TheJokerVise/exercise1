import { Company } from "./Company";
import { Geo } from "./Geo";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  };
  phone: string;
  website: string;
  company: Company;
}
