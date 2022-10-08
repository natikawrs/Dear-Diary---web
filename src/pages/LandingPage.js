// import { useState } from "react";
import Avatar from "../components/Avatar";
// import LoginModal from "../components/LoginModal";
import pic1 from "../images/landingpage/1.png";
import pic2 from "../images/landingpage/2.jpeg";
import pic3 from "../images/landingpage/3.jpeg";
import cs2 from "../images/carousel/cs2.jpeg";
import cs1 from "../images/carousel/cs1.jpeg";
import cs3 from "../images/carousel/cs3.png";

function LandingPage() {
  // const [open, setOpen] = useState(false);
  return (
    <div className="bg-primary pb-5">
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
              src={cs2}
              className="d-block w-100"
              style={{ height: "650px", overflow: "hidden" }}
              alt="picture1"
            />
            <div className="carousel-caption d-none d-md-block position-absolute top-0 start-0">
              <h1 className="text-primary">Dear Diary</h1>
              <p className="text-primary fs-5">
                Write what should not be forgotten.
              </p>

              {/* <p>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={() => setOpen(true)}
                >
                  Sign in now
                </button>
              </p>

              <LoginModal open={open} close={() => setOpen(false)} /> */}
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={cs1}
              className="d-block w-100"
              style={{ height: "650px", overflow: "hidden" }}
              alt="picture2"
            />
          </div>

          <div className="carousel-item">
            <img
              src={cs3}
              className="d-block w-100"
              style={{ height: "650px", overflow: "hidden" }}
              alt="picture3"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr className="featurette-divider "></hr>
      <div className="row featurette p-5">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1 text-success">
            The words of kindness are more healing to a drooping heart than balm
            or honey...
            <span className="text-danger">Sarah Fielding</span>
          </h2>
          <p className="lead text-secondary pt-5">
            The modern world is full of stressors. Making things worse, most of
            us indulge in activities that increase the effects of these and do
            little to indulge in activities that reduce the effects. A diary can
            be helpful in managing emotions and your health.
          </p>
        </div>
        <span className="col-md-5 order-md-1 ps-5">
          <Avatar src={pic2} size="250" />
        </span>
      </div>

      <hr className="featurette-divider"></hr>
      <div className="row featurette p-5">
        <div className="col-md-7 ">
          <h2 className="featurette-heading fw-normal lh-1 text-success">
            If you have no confidence in self, you are twice defeated in the
            race of life...
            <span className="text-danger">Marcus Garvey</span>
          </h2>
          <p className="lead text-secondary pt-5">
            When you think negatively of yourself, your self-perception suffers.
            And this, in turn, sinks your confidence. The opposite happens when
            you think of yourself positively. In “The Success Principles,” Jack
            Canfield argues that in order to succeed, you have to believe that
            your goal is achievable. And you must also believe that you have the
            abilities to succeed. This boosts your confidence.
          </p>
        </div>
        <span className="col-md-5 ps-5">
          <Avatar src={pic3} size="250" />
        </span>
      </div>
      <hr className="featurette-divider"></hr>
      <div className="row featurette p-5">
        <div className="col-md-7 order-md-2 ">
          <h2 className="featurette-heading fw-normal lh-1 text-success">
            Think 100 times before you take a decision. But once that decision
            is taken, stand by it as one man...
            <span className="text-danger">Muhammad Ali Jinnah</span>
          </h2>
          <p className="lead text-secondary pt-5">
            Writing ideas on paper simplifies the spider web I talked of. And it
            also clears your head so you have an objective look at your ideas
            and decisions. Looking at them on paper forces you to consider
            alternatives. You start asking why, why not, how, and more. This
            eventually leads to well thought-out decisions you will be proud to
            stand by.
          </p>
        </div>
        <span className="col-md-5 order-md-1 ps-5">
          <Avatar src={pic1} size="250" />
        </span>
      </div>
    </div>
  );
}

export default LandingPage;
