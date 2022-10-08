function SearchText({ changeSearchTerm, searchTerm }) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        onChange={(event) => changeSearchTerm(event.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        onClick={() => changeSearchTerm("")}
      >
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}

export default SearchText;
