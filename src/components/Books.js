import { update as up } from '../BooksAPI';

const Book = ({title, author, img, shelf, id, update, setUpdate}) => {
    return(
        <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url("${img}")`,
                }}
                ></div>
                <div className="book-shelf-changer">
                <select 
                    onChange={e => {
                        up(id, e.target.value, update, setUpdate);
                    }}
                    value={shelf}
                >
                    <option value="non" disabled>
                    Move to...
                    </option>
                    <option value="currentlyReading">
                    Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
        </div>
    )
}

export default Book