import "./services.scss";
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
function Services() {
  useEffect(()=>{
    Aos.init()
    },[])
  return (
    <div data-aos="slide-up"  className="services" >
      <div className="wrapper">
        <div className="left-wrapper">
          <div className="title">
            <span>Service</span>
            <h1 className="title">Services I Offer</h1>
          </div>

          <div className="description-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 minus"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={"50px"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M20 12H4"
              />
            </svg>
            <div className="description">
              <p>
                Merhaba! Ben Furkan Can Zirek.Yazılım geliştiriyorum daha
                ayrıntılı bilgi için siteyi inceleyebilirsin.
              </p>
            </div>
          </div>
        </div>
        <div className="right-wrapper">
          <div className="service1">
            <div className="line"></div>
            <div className="content">
              <div className="service-number">
                <span className="service-number-span">01/</span>
              </div>

              <div className="service-title">
                <span className="service-title-span">
                  Web UI/UX <br /> Design
                </span>
                <span className="service-explore">Explore</span>
              </div>
              <div className="service-button">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 arrow-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="service1">
            <div className="line"></div>
            <div className="content">
              <div className="service-number">
                <span className="service-number-span">01/</span>
              </div>

              <div className="service-title">
                <span className="service-title-span">
                  Web UI/UX <br /> Design
                </span>
                <span className="service-explore">Explore</span>
              </div>
              <div className="service-button">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 arrow-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="service1">
            <div className="line"></div>
            <div className="content">
              <div className="service-number">
                <span className="service-number-span">01/</span>
              </div>

              <div className="service-title">
                <span className="service-title-span">
                  Web UI/UX <br /> Design
                </span>
                <span className="service-explore">Explore</span>
              </div>
              <div className="service-button">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 arrow-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
