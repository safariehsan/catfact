export default function Pagination({
  list,
  total,
  perPage,
  setCurrentPage,
  currentPage,
}) {
  const pageCount = Math.ceil(total / perPage);
  const pageNumbers = [];
  const indexOfLastFact = currentPage * perPage;
  const indexOfFirstFact = indexOfLastFact - perPage;

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <div className="border-t border-gray-200 bg-white px-4 py-3 sm:px-6 text-center">
      <nav className="isolate inline-flex flex-wrap -space-x-px shadow-sm">
        <a
          href="!#"
          onClick={(e) => paginate(1, e)}
          className={`relative inline-flex items-center border border-gray-300 bg-gray-300 px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          First
        </a>
        <a
          href="!#"
          onClick={(e) => paginate(currentPage - 1, e)}
          className={`relative inline-flex items-center border border-gray-300 bg-gray-300 px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          Previous
        </a>
        {pageNumbers.map((number) => (
          <a
            key={number}
            onClick={(e) => paginate(number, e)}
            href="!#"
            className={`relative inline-flex border items-center px-2 py-1 text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 ${
              currentPage === number ? "bg-cyan-200" : ""
            }`}
          >
            {number}
          </a>
        ))}
        <a
          href="!#"
          onClick={(e) => paginate(currentPage + 1, e)}
          className={`relative inline-flex items-center border border-gray-300 bg-gray-300 px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            currentPage === pageCount ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          Next
        </a>
        <a
          href="!#"
          onClick={(e) => paginate(pageCount, e)}
          className={`relative inline-flex items-center border border-gray-300 bg-gray-300 px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
            currentPage === pageCount ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          Last
        </a>
      </nav>
      <p className="text-md text-gray-700 mt-4">
        Showing <span className="font-medium">{indexOfFirstFact + 1}</span> to{" "}
        <span className="font-medium">{Math.min(indexOfLastFact, total)}</span>{" "}
        of <span className="font-medium">{total}</span> results
      </p>
    </div>
  );
}
