import React from 'react';

const SetPages = ({productsPerPage, allProductsLength, paged, previousPage, nextPage, currentPage}) => {

    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(allProductsLength/productsPerPage); i++) {
      pageNumbers.push(i+1);
    };
  
    return (
      <nav className='row mb-3'>
        <div className='col-6 offset-3'>
          <div className='row justify-content-center'>
            { currentPage > 1 && <button className="col-1 text-center" onClick={previousPage}>{'<'}</button> }
            { 
            pageNumbers?.map( num => {
              return (
                  <button 
                    key={num}
                    className={num === currentPage ? "col-1 bg-success text-center" : "col-1 bg-warning opacity-50 text-center"} 
                    onClick={() => paged(num)} 
                  >
                    {num}
                  </button>
              )
            })
            }
            { currentPage < Math.ceil(allProductsLength/productsPerPage) && <button className="col-1 text-center" onClick={nextPage}>{'>'}</button>}
          </div>
        </div>
      </nav>
    );
  };

  export default SetPages;