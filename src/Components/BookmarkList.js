import React from 'react';
import BookmarkItem from './BookmarkItem';

const BookmarkList = ({ bookmarks, onDelete, onEdit }) => {
  return (
    <div id="bookmark">
      {bookmarks.map((bookmark) => (
        <BookmarkItem
          key={bookmark._id}
          bookmark={bookmark}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default BookmarkList;