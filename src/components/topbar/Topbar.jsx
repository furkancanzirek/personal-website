import "./topbar.scss";
// import "../../../public/assets/img/logo.png"
function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="logo">
          <div className="logo-img">
            <img src="/assets/img/logo.png" alt="" />
          </div>
          <div className="logo-text">Furkan Can Zirek</div>
        </div>
        <div className="menu">
          <button>About</button>
          <button>Service</button>
          <button>Portfolio</button>
          <button>Testimonial</button>
        </div>
        <div className="search">
          <input placeholder="Search" name="" id="" />
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
