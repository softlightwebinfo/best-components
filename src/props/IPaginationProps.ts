import { IProps } from "../interfaces";

export interface IPaginationProps extends IProps {
  totalRecords: number,
  pageLimit?: number,
  pageNeighbours?: number,
  onPageChanged?: (e: any, page: number) => void,
  currentPage?: number;
  initial?: boolean;
}
