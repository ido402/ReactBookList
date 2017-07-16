import React, {Component } from 'react';
import { connect } from 'react-redux'; // getting react-redux to connect between react and reduct. 

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) =>{
            return(
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render(){
        return (
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        )
    }
}

//the glew between react and redux
function mapStateToProps(state) {
    //return will show up as props in BookList
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);