import React from 'react'
import Pagination from '@material-ui/lab/Pagination';

const PageNumbers = (props) => {

    const handleChange = (e, value) => {
        props.loadPage(value, props.searchValue)
    }

    return (
        <div className="page-numeration">
            <Pagination 
                className="pagination" 
                count={props.totalPages} 
                color="primary" 
                onChange={handleChange}
                page={props.page ? props.page : 1}
            />
        </div>
    )
}



export default PageNumbers
