import ReactPaginate from "react-paginate";

type Props = {
  pages: number;
  handlePageClick: (selectedItem: { selected: number }) => void;
};

export default function Paginator({ pages, handlePageClick }: Props) {
  return (
    <>
      {pages > 1 && (
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pages}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          activeClassName="active"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
}
