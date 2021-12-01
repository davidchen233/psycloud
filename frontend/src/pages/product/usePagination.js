import { useMemo } from 'react';

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 0,
  currentPage,
}) => {
  // 產出頁碼陣列
  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  // The useMemo callback will run when any value in its dependency array changes
  const paginationRange = useMemo(() => {
    // 計算總頁數
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    // 如果頁數小於初始化頁數 =============================================================
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    //Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    // 判斷是否要顯示 ...
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    // 宣告第一頁和最後一頁的index
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // 如果頁數小於初始化頁數 =============================================================
    // 只顯示右邊的 ... ==================================================================
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, '...', totalPageCount];
    }
    // 只顯示右邊的 ... ==================================================================
    // 只顯示左邊的 ... ==================================================================
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, '...', ...rightRange];
    }
    // 只顯示左邊的 ... ==================================================================
    // 顯示兩邊的 ... ====================================================================
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }
    // 顯示兩邊的 ... ====================================================================
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

export default usePagination;
