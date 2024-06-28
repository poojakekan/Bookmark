import React from "react";

const BookmarkItem = ({ bookmark, onDelete, onEdit }) => {
  return (
    <div>
      <label>{bookmark.websiteTitle} </label>
      <a href={bookmark.websiteURL} target="_blank" rel="noopener noreferrer">
        {bookmark.websiteURL}
      </a>
      <button onClick={() => onDelete(bookmark._id)}>Delete</button>
      <button onClick={() => onEdit(bookmark)}>Edit</button>
    </div>
  );
};

export default BookmarkItem;