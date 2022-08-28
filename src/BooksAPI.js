const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then((res) => res.json())
    .then((data) => data.book);

export const getAll = (setBooks) =>
  fetch(`${api}/books`, { headers })
    .then((res) => res.json())
    .then((data) =>  {setBooks(data.books)});

export const update = (id, shelf, update, setUpdate) =>
  fetch(`${api}/books/${id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => {
    res.json();
    setUpdate(!update)
  });

export const search = (query, setSeacrchBooks) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.books.error) {
        setSeacrchBooks([])
      } else {
        setSeacrchBooks(data.books)
      }
      
    });
