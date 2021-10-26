import { Product } from "../../models/product.model";

export type GetProductsParams = {
  filter?: string;
  floorId?: string;
  sectionId?: string;
}

export type SaveProductParams = {
  code?: string;
  floorId: string;
  sectionId: string;
  quantity: number;
};