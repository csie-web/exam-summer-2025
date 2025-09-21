import './Paginator.css'
import React, { useState } from 'react'

const Paginator = (props) => {
  const { onPageChange, onPageSizeChange, totalRecords } = props
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  return (
    <div className='paginator'>
      <div className='navigators'>
        <button onClick={() => {
          if (page > 0) {
            setPage(page - 1)
            onPageChange(page - 1)
          }
        }}
          disabled={page === 1}
        >Previous
        </button>
        <button onClick={() => {
          if (page < Math.ceil(totalRecords / pageSize)) {
            setPage(page + 1)
            onPageChange(page + 1)
          }
        }}
          disabled={page >= Math.ceil(totalRecords / pageSize)}
        >Next
        </button>
      </div>
      <label>Page: {page}/{Math.ceil(totalRecords / pageSize)}</label>
      <label>
        Page Size:
        <input
          type='number' value={pageSize} onChange={e => {
            setPageSize(e.target.value)
            onPageSizeChange(e.target.value)
          }}
        />
      </label>
    </div>
  )
}

export default Paginator
