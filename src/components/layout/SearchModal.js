import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchForMovies } from '../../store/actions/moviesActions'

class SearchModal extends Component {

    state = {
        searchValue: ''
    }

    modalCloseRef = React.createRef();

    handleChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchForMovies('1', this.state.searchValue)
        this.modalCloseRef.current.click();
        this.setState({
            searchValue: ''
        })
    }

    render() {
        return (
            <>
                <i className="fas fa-search" data-toggle="modal" data-target="#searchWindow"></i>
                <div className="modal fade" id="searchWindow" tabIndex="-1" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Пошук за назвою</h5>
                            <button ref={this.modalCloseRef} type="button" className="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <input 
                                value={this.state.searchValue} 
                                type="text" className="form-control" 
                                placeholder="Пошук..."  
                                onChange={this.handleChange}
                                />
                                <div className="modal-btns">
                                    <button type="submit" className="btn btn-primary"><i className="fas fa-search"></i></button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchForMovies: (pageNumber, value) => dispatch(searchForMovies(pageNumber, value))
    }
}

export default connect(null, mapDispatchToProps)(SearchModal)