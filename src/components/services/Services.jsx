import "./services.scss";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Services() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="slide-up" className="services">
      <div className="wrapper">
        <div className="left-wrapper">
          <div className="title">
            <span>Özgeçmiş</span>
            <h1 className="title">Yetenekler & Tecrübe</h1>
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
          <div className="skills-wrapper">
            <h1>Yetenekler</h1>
          <div className="skills">
            <div className="skill">
              <div className="skill-icon">
                <i class="fa-brands fa-react"></i>
              </div>
              <span className="skill-text">React</span>
            </div>
            <div className="skill">
              <div className="skill-icon">
              <i class="fa-brands fa-css3-alt"></i>
              </div>
              <span className="skill-text">CSS</span>
            </div>
            <div className="skill">
              <div className="skill-icon">
              <i class="fa-brands fa-node-js"></i>
              </div>
              <span className="skill-text">NodeJS</span>
            </div>
            <div className="skill">
              <div className="skill-icon">
              <i class="fa-brands fa-js-square"></i>
              </div>
              <span className="skill-text">Javascript</span>
            </div>
          </div>
          </div>
          
        </div>
        <div className="right-wrapper">
          <div className="service">
            <div className="line"></div>
            <div className="content">
              <div className="service-number">
                <span className="service-number-span">2020-2021</span>
              </div>

              <div className="service-title">
                <span className="service-title-span">Gönüllü Stajyer</span>
                <span className="service-explore">Greensoft Yazılım</span>
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
          <div className="service">
            <div className="line"></div>
            <div className="content">
              <div className="service-number">
                <span className="service-number-span">2020-2021</span>
              </div>

              <div className="service-title">
                <span className="service-title-span">
                  Stajyer <br />
                </span>
                <span className="service-explore">TÜRASAŞ</span>
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

          <div className="service">
            <div className="line"></div>
            <div className="content">
              <div className="service-number">
                <span className="service-number-span">2019-2020</span>
              </div>

              <div className="service-title">
                <span className="service-title-span">Freelancer</span>
                <span className="service-explore">Fiverr,Bionluk</span>
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
