import type { PaginationProps } from '../../../features/plants/models/types';
import { useAppDispatch } from '../../../hooks/useDispatch'
import Button from '../Button/Button';
import ButtonMini from '../ButtonMini/ButtonMini';
import css from './Pagination.module.css'

const Pagination = ({page, perPage, totalItems, totalPages, hasNextPage, hasPrevPage, isFirstPage, isLastPage }: PaginationProps) => {
    const dispatch = useAppDispatch();
    // const visiblePages = Array.from({length: totalPages}, (_, index) => 1 + index)
    const getVisiblePages = () => {
      const delta = 2
      const start = Math.max(1, page - delta)
      const end = Math.max(totalPages, page + delta)
      return Array.from({length: end - start + 1}, (_, index) => start + index)
    }
  return (
    <div>
      {
        getVisiblePages.map(el => <ButtonMini label={el}/>)
      }

    </div>
  )
}

export default Pagination
