import { useState, useEffect } from "react";
import Book from "../components/Books"
import { Link } from "react-router-dom";
import { getAll, search } from "../BooksAPI";


const SearchPage02 = () => {
  const [books, setbooks] = useState([])
  const [searchBooks, setSearchBooks] = useState([])
  const [value, setValue] = useState("")
  const [update, setUpdate] = useState(true)
  
 
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      getAll(setbooks)
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    if(value === '') setSearchBooks([])
    if (isMounted && value !== '') {
      search(value, setSearchBooks);
    }

    return () => {
      isMounted = false;
    };
  }, [value]);
  
  return(
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={e => setValue(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>

        <div className="bookshelf-books">
          <ol className="books-grid">
            
          {value === '' || searchBooks === [] || searchBooks?.error ? null : 
            searchBooks.map((book, index) => {
              books.map(b => {
                if(book.id === b.id) {
                  searchBooks[index].shelf = b.shelf
                }
                return null;
                })
                return(
                  <li key={book?.id}>
                    <Book 
                      title={book?.title}
                      author={book?.authors?.toString()}
                      img={book?.imageLinks?.smallThumbnail}
                      id={book?.id}
                      update={update}
                      setUpdate={setUpdate}
                      shelf={book?.shelf ? book?.shelf : "none"}
                    />
                  </li>
                )
              })
            }
        
          </ol>
        </div>
        </div>
    )
}

export default SearchPage02