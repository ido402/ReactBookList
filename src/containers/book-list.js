import React, {Component } from 'react';
import { connect } from 'react-redux'; // getting react-redux to connect between react and reduct. 
import { selectBook} from '../actions/index';
import { bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) =>{
            return(
                <li 
                key={book.title} 
                onClick = {() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}</li>
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

//Anyhing returns from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch){
    //when selectBook is called the result will pass it to all reducers
    return bindActionCreators({ selectBook:selectBook },dispatch);
}

//promote BookList from a component to a container - neeeds to know about state change
export default connect(mapStateToProps,mapDispatchToProps)(BookList);