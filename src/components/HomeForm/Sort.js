function Sort() {
  return (
    <div className="container-fluid mx-1  d-flex justify-content-between">
      <div>
        <small className="text-secondary fs-5 fw-3">Recents:</small>
      </div>

      <div className="collapse  d-flex justify-content-end gap-3">
        <small className="text-secondary fs-5 fw-3 ">Search by Mood</small>
        <select
          className="form-select form-select-m text-secondary"
          style={{ width: "9rem" }}
        >
          <option selected>Select here</option>
          <option value="Sunny Day">Sunny Day</option>
          <option value="Rainy Day">Rainy Day</option>
          <option value="Autum Chill">Autum Chill</option>
          <option value="Blossom">Blossom</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
