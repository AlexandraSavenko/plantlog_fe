import type { PaginationProps } from "../../../features/plants/models/types";
import ButtonMini from "../ButtonMini/ButtonMini";
import css from "./Pagination.module.css";

const Pagination = ({
  page,
  totalPages,
  hasNextPage,
  hasPrevPage,
  onPageChange,
}: PaginationProps) => {
  const visiblePages = Array.from(
    { length: totalPages },
    (_, index) => 1 + index,
  );

  //for some reasone the function won't return the array but instead the whole function is returned
  //     const getVisiblePages = () => {
  //   const delta = 2
  //   const start = Math.max(1, page - delta)
  //   const end = Math.min(totalPages, page + delta)
  //   return Array.from(
  //     { length: end - start + 1 },
  //     (_, index) => start + index
  //   )
  // }
  return (
    <ul className={css.paginationList}>
      <li className={`${css.li} ${!hasPrevPage && css.disabled}`}>
        <ButtonMini disabled={!hasPrevPage} onClick={() => {onPageChange(page - 1)}} icon="pagination-backwards" />
      </li>
      {visiblePages.map((el) => (
        <li className={`${css.li}`} key={el}>
          <ButtonMini isActive={el === page} onClick={() => { console.log("button pressed"); onPageChange(el)}} label={el} />
        </li>
      ))}
      <li className={`${css.li} ${!hasNextPage && css.disabled}`}>
        <ButtonMini disabled={!hasNextPage} onClick={() => {onPageChange(page + 1)}} icon="pagination-forwards" />
      </li>
    </ul>
  );
};

export default Pagination;
