import React from 'react';

const SetPages = ({productsPerPage, allProductsLength, paged, previousPage, nextPage, currentPage}) => {

    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(allProductsLength/productsPerPage); i++) {
      pageNumbers.push(i+1);
    };
  
    return (
      <nav className='row mb-3'>
        <div className='col-6 offset-6'>
          <div className='row justify-content-end pe-3 mt-3'>
            { currentPage > 1 && <button type="button" className="col-1 btn btn-outline-secondary" onClick={previousPage}>{'<'}</button> }
            { 
            pageNumbers?.map( num => {
              return (
                  <button 
                    key={num}
                    type="button"
                    className={num === currentPage ? "col-1 btn bg-black text-white text-center border-2" : "col-1 btn btn-outline-secondary"}
                    onClick={() => paged(num)} 
                  >
                    {num}
                  </button>
              )
            })
            }
            { currentPage < Math.ceil(allProductsLength/productsPerPage) && <button type="button" className="col-1 btn btn-outline-secondary" onClick={nextPage}>{'>'}</button>}
          </div>
        </div>
      </nav>
    );
  };

  export default SetPages;