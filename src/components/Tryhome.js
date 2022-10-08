function Tryhome() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://res.cloudinary.com/crazyindog/image/upload/v1664436058/crazyindog/Cover_mhnjrs.jpg"
            className="d-block w-100"
            style={{ height: "587px", overflow: "hidden" }}
            alt="picture1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>First slide label</h1>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/crazyindog/image/upload/v1664436058/crazyindog/Cover_mhnjrs.jpg"
            className="d-block w-100"
            style={{ height: "587px", overflow: "hidden" }}
            alt="picture2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Second slide label</h1>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/crazyindog/image/upload/v1664436058/crazyindog/Cover_mhnjrs.jpg"
            className="d-block w-100"
            style={{ height: "587px", overflow: "hidden" }}
            alt="picture3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h1>Third slide label</h1>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Tryhome;
