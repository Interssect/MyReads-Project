import React, {Component} from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";

const getThumbnail = (book) => {
	if (typeof(book.imageLinks) !== 'undefined') {
		return book.imageLinks.smallThumbnail;} else {
		return 'http://via.placeholder.com/128x193?text=No%20Cover'
	}
}
class Book extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		changeShelf: PropTypes.func.isRequired
	};
	render() {
		const {
			book
		} = this.props;
		return ( < div className = "book"id = {book.id} > 
				 < div className = "book-top" > 
				 < div className = "book-cover" style = {
				{
					width: 128,
					height: 193,
					backgroundImage: `url(${getThumbnail(book)})`}} > 
                 < /div> < ShelfChanger book = {book}
			     changeShelf = {this.props.changeShelf}/> 
                 < /div>
                 < div className = "book-title" > {book.name} < /div> 
                 < div className = "book-authors" > {book.authors} < /div> 
                 < /div>)
	}
}
export default Book;