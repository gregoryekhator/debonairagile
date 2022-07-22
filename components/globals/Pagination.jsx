import React, {useState, useEffect} from 'react';

// NEXT
import Link from 'next/link';


const Pagination = ({ data, updateData }) => {
  const dataPerPage = 5;
  const numberOfPages = Math.round(data.length / dataPerPage);
  const pages = [];
  
  for(let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }
  
  const [currentPage, setCurrentPage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(dataPerPage);

  const paginate = (lvl=1) => {
    if (currentPage <= numberOfPages) {
      let paginatedData;
      
      if (lvl === 1) {
        paginatedData = data.slice(startIndex, endIndex);
        console.log(paginatedData, 'paginateup')
        updateData(paginatedData)
    
        setStartIndex(endIndex)
        setEndIndex(endIndex + dataPerPage)
  
        setCurrentPage(currentPage + 1)
      }
      else {
        paginatedData = data.slice(startIndex, endIndex);
        console.log(paginatedData, 'paginatedown')
        updateData(paginatedData)
    
        setStartIndex(endIndex)
        setEndIndex(endIndex + (dataPerPage * lvl))
  
        setCurrentPage(currentPage + (1 * lvl))
      }
    }
    return;
  }

  const depaginate = (lvl=1) => {
    if (startIndex !== 0) {
      let paginatedData;
      
     if (lvl === 1) {
        paginatedData = data.slice(startIndex - (dataPerPage * lvl), endIndex - (dataPerPage * lvl));
        console.log(paginatedData, 'depaginateup')
        updateData(paginatedData)
    
        setStartIndex(startIndex - dataPerPage)
        setEndIndex(endIndex - dataPerPage)
  
        setCurrentPage(currentPage - 1)
     }
      else {
        paginatedData = data.slice(startIndex - (dataPerPage * lvl), endIndex - (dataPerPage * lvl));
        console.log(paginatedData, 'depaginatedown')
        updateData(paginatedData)
    
        setStartIndex(startIndex - (dataPerPage * lvl))
        setEndIndex(endIndex - (dataPerPage * lvl))
  
        setCurrentPage(currentPage - (1 * lvl))
      }
    }
    return;
  }

  const handleClick = (id) => {
    if (id > currentPage) {
      let lvl = id - currentPage;
      paginate(lvl);      
    }
    else if (id < currentPage) {
      let lvl = currentPage - id;
      depaginate(lvl);
    }
    else {
      return;
    }
  }
  
  useEffect(() => {
    paginate()
  }, [])
  
  return (
   <div className="h-10 w-full bg-black flex items-start justify-center position fixed bottom-0 left-0">
    {/* Inner */}
    <div className="h-full w-11/12 md:w-5/12 bg-transparent flex items-center justify-center space-x-3">
      {/* Left */}
      <div 
      onClick={() => depaginate()}  
      className="h-7 w-12 bg-white flex items-center justify-center cursor-pointer">
        <i className="la la-angle-left text-md text-black"></i>
      </div>
     
      {
        pages && pages.map((page) => {
          return (
            <div 
            onClick={() => handleClick(page)}
            key={page} className="h-7 w-12 bg-white flex items-center justify-center cursor-pointer">
              <span className="text-md text-black">{page}</span>
            </div>
          )
        })
      }
      
      {/* Right */}
       <div 
        onClick={() => paginate()}  
         className="h-7 w-10 bg-white flex items-center justify-center cursor-pointer">
        <i className="la la-angle-right text-md text-black"></i>
      </div>
    </div>
   </div>
  )
}

export default Pagination;