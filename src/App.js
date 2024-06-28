import React, { useState, useEffect } from "react";
import axios from "axios";
import BookmarkForm from "./Components/BookmarkForm";
import BookmarkList from "./Components/BookmarkList";
import "./App.css";

const apiURL ="https://crudcrud.com/api/2f2e1f0302a14be9a43f3f384b06cc48/bookmarkLinks"

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [editBookmark, setEditBookmark] = useState(null);

  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios
      .get(apiURL)
      .then((response) => {
        setBookmarks(response.data);
      })
      .catch((error) => console.error(error));
  };

  const handleFormSubmit = (bookmarkDetails) => {
    if (editBookmark) {
      updateBookmark(editBookmark._id, bookmarkDetails);
    } else {
      addBookmark(bookmarkDetails);
    }
  };

  const addBookmark = (bookmarkDetails) => {
    axios
      .post(apiURL, bookmarkDetails)
      .then((response) => {
        getDataFromServer();
      })
      .catch((error) => console.error(error));
  };

  const updateBookmark = (id, updatedDetails) => {
    axios
      .put(`${apiURL}/${id}`, updatedDetails)
      .then((response) => {
        getDataFromServer();
        setEditBookmark(null);
      })
      .catch((error) => console.error(error));
  };

  const deleteBookmark = (id) => {
    axios
      .delete(`${apiURL}/${id}`)
      .then((response) => {
        getDataFromServer();
      })
      .catch((error) => console.error("Error deleting bookmark:", error));
  };

  const handleEdit = (bookmark) => {
    setEditBookmark(bookmark);
  };
  return (
    <div className="App">
      <h1>Bookmark Website</h1>
       <BookmarkForm onSubmit={handleFormSubmit} editBookmark={editBookmark} />
       <h3>All Bookmarks</h3>
       <BookmarkList
        bookmarks={bookmarks}
        onDelete={deleteBookmark}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
