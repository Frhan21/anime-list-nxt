const Pagination = ({ page
    , lastPage, setPage
}) => {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const handleNextPage = () => {
        return (
            setPage((prevState) => prevState + 1),
            scrollTop(),
        )
    }

    const handlePrevPage = () => {
        return (
            setPage((prevState) => prevState - 1),
            scrollTop(),
        )
    }
    return (
        <>
            <div className="flex justify-center items-center p-4 gap-4 text-color-dark">
                <div className={`cursor-pointer bg-color-accent p-2 rounded border-2 border-color-accent transition-all duration-300 ease-in-out ${page === 1 ? 'opacity-0' : 'hover:bg-color-dark hover:text-color-accent hover:border-color-accent'
                    }`} onClick={page === 1 ? null : handlePrevPage}>Prev</div>
                <div className="cursor-pointer bg-color-accent py-2 px-4 rounded border-2 border-color-accent hover:bg-color-dark hover:text-color-accent hover:border-color-accent transition-all duration-300 ease-in-out">{page} of {lastPage}</div>
                <div
                    className={`cursor-pointer bg-color-accent p-2 rounded border-2 border-color-accent transition-all duration-300 ease-in-out ${page === lastPage ? 'opacity-0' : 'hover:bg-color-dark hover:text-color-accent hover:border-color-accent'
                        }`}
                    onClick={page === lastPage ? null : handleNextPage}
                >
                    Next
                </div>

            </div>
        </>
    )
}

export default Pagination;