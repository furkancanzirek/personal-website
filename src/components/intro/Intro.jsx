import "./intro.scss";

function Intro() {
  return (
    <div className="intro">
      <div className="wrapper">
        <div className="left-wrapper">
          <div className="title">
            <span>Hello!</span>
            <h1 className="title">We have Design Experience</h1>
          </div>

          <div className="description-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          <div className="button-wrapper">
            <div className="button-contact">
              <button className="btn contact">Let's Talk</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 plane-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <div className="button-portfolio">
              <button className="btn portfolio">Portfolio</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 arrow-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
          </div>
          <div className="social-media">
            <span>Check Out My</span>
            <div className="icon github">
              <i class="fa-brands fa-github"></i>
            </div>
            <div className="icon linkedin">
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className="icon mail">
              <i class="fa-solid fa-envelope"></i>
            </div>
          </div>
        </div>
        <div className="right-wrapper">
          <div className="background">
            <img className="shape1" src="/assets/img/shape1.png" alt="" />
            <img className="shape2" src="/assets/img/shape2.png" alt="" />
            <div className="description">
              “ People ignore design <br /> &nbsp; &nbsp;that ignores people ”
            </div>
            <div className="about-me">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 about-icon"
                viewBox="0 0 20 20"
                fill="white"

              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="scroll-down">
            <div className="line1"></div>
            <div className="line2"></div>
            <span>Scroll Down</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
