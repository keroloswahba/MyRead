import { useState, useEffect } from "react";
import Book from "../components/Books";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";


const MainPage01 = ({showSearchPage, setShowSearchpage}) => {
    const [books, setbooks] = useState([])
    const [update, setUpdate] = useState(true)

  
    useEffect(() => {
      getAll(setbooks);
    }, [update])
    
    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">

                    {books.filter(book => book.shelf === 'currentlyReading').map(book => (
                        <li key={book?.id}>
                          <Book 
                            title={book?.title}
                            author={book?.authors.toString()}
                            img={book?.imageLinks?.smallThumbnail}
                            id={book?.id}
                            update={update}
                            setUpdate={setUpdate}
                            shelf={book?.shelf}
                          />
                        </li>
                      ))
                    }

                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                   
                  {books.filter(book => book.shelf === 'wantToRead').map(book => (
                      <li key={book?.id}>
                        <Book 
                          title={book?.title}
                          author={book?.authors.toString()}
                          img={book?.imageLinks?.smallThumbnail}
                          id={book?.id}
                          update={update}
                          setUpdate={setUpdate}
                          shelf={book?.shelf}
                        />
                      </li>
                    ))
                  }
                
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                   
                  {books.filter(book => book.shelf === 'read').map(book => (
                      <li key={book?.id}>
                        <Book 
                          title={book?.title}
                          author={book?.authors.toString()}
                          img={book?.imageLinks?.smallThumbnail}
                          id={book?.id}
                          update={update}
                          setUpdate={setUpdate}
                          shelf={book?.shelf}
                        />
                      </li>
                    ))
                    }
                  
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search" />
          </div>
        </div>
    )
}

export default MainPage01