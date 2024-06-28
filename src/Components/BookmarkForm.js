import React, { useState, useEffect } from 'react';

const BookmarkForm = ({ onSubmit, editBookmark }) => {
  const [webName, setWebName] = useState('');
  const [webUrl, setWebUrl] = useState('');

  useEffect(() => {
    if (editBookmark) {
      setWebName(editBookmark.websiteTitle);
      setWebUrl(editBookmark.websiteURL);
    }
  }, [editBookmark]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ websiteTitle: webName, websiteURL: webUrl });
    setWebName('');
    setWebUrl('');
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <label htmlFor="webName">Website title</label>
      <input
        type="text"
        id="webName"
        value={webName}
        onChange={(e) => setWebName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="webUrl">Website URL</label>
      <input
        type="url"
        id="webUrl"
        value={webUrl}
        onChange={(e) => setWebUrl(e.target.value)}
        required
      />
      <br />
      <button type="submit">{editBookmark ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default BookmarkForm;