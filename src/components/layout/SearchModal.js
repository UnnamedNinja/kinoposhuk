import React from 'react'

const SearchModal = () => {
    return (
        <>
            <i className="fas fa-search" data-toggle="modal" data-target="#searchWindow"></i>

            <div className="modal fade" id="searchWindow" tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Пошук за назвою</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <input type="text" className="form-control" placeholder="Пошук..."  />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрити</button>
                        <button type="button" className="btn btn-primary">Пошук</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default SearchModal