class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .col {
          border-radius: 30px;
          height: 30vw;
          width: 30vw;
          padding: 3%;
          margin: 0% 1% 0% 2%;
        }

        li.servProvButton {
          float: right;
          border-style: solid;
          border-radius: 20px;
          padding: 5px 20px;
          margin: 1% 0% 1% 10vw;
          text-align: center;
        }

        li.servProvButton:hover {
          background-color: #55BFAB;
          color: #fff;
          border-style: solid;
          border-radius: 20px;
          border-color: #000;
        }

        @media screen and (max-width: 768px) {
          .col {
            border-radius: 40px !important;
            margin: 5%;
          }
        }

        @media screen and (max-width: 1399) {
          li.servProvButton {
            margin: 1% 0% 1% 3vw;
          }
        }

        div.mobileNavbar {
          display: none;
          position: fixed;
          bottom: -1.5vh;
          padding: 1vh 10vw;
          height: 14vh;
          display: inline !important;
          justify-content: space-between;
          z-index: 1200;
          background-color: #fff;
          width: 100vw;
          justify-content: space-between;
          border-top-right-radius: 25px;
          border-top-left-radius: 25px;
          box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.25);
        }

        a.navbar-brand {
          font-family: 'Poppins'.sans-serif;
          font-weight: 400;
          font-size: calc(1vw + 1vh + 50%);/*38*/
          line-height: 57px;
          margin-right: 40px;
        }

        a.nav-link {
          margin-top: 2px;
          color: #000 !important;
          padding: 0px;
        }

        li.nav-item {
          margin-right: 20px;
          /*padding: 0 5px;*/
        /*  padding-left: 20px;*/
          padding: 0px 0px 0px 20px;
          display: inline-block;
          border-color: #E7E7E7;
          border-left-style: solid;
          border-width: 5px;
          font-size: 24px;/*
          line-height: 36px;*/
          color: #fff !important;
        }

        nav.navbar {
          position: fixed;
          top: 0%;
          transition: top 0.7s;
          z-index: 1001;
          width: 94%;
          margin-left: 3%;
          height: 11vh;
          padding-left: 2%;
          padding-right: 4%;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          align-items: center;
          font-family: 'Poppins'.sans-serif;
          font-weight: 400;
          font-size: 24px;/*
          line-height: 36px;*/
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }

        div.navCont {
          position: sticky;
          z-index: 1000;
        }

        @media screen and (max-width: 768px) {
          nav.navbar {
            display: none;
            position: fixed;
            top: 89vh;
            height: 11vh;
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            width: 100%;
          } 
        }

        @media screen and (min-width: 769px) {
          div.mobileNavbar {
            display: none !important;
          }
        }

        @media screen and (min-width: 769px) {
          div.MobNav {
            display: none !important;
          }
        }

        @media screen and (max-width: 768px) {
          body {
            padding-bottom: 7vh;
          }
        }

        div.MobNav {
          display: fixed;
        }

        .navbar-2 {
          padding: 1vh 4vw 1.5vh 8vw;
          align-items: center;
          filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));
        }

        .navbar-2 li.nav-item {
          border: none;
        }
      </style>
      <div class="navCont">
        <nav class="navbar navbar-expand-xl navbar-light bg-light" id="navbar">
          <a class="navbar-brand" href="index.html">
            <img src="assets/favicon/favicon.png" width="55" height="50" class="d-inline-block align-top" alt="travelkeet-logo">Travelkeet
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="caravans.html">Caravans</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="campersite.html">Caravan Parks</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Utilities
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Food & Drink</a>
                  <a class="dropdown-item" href="#">Accommodation</a>
                  <a class="dropdown-item" href="#">Utilities</a>
                </div>
              </li>
              <a href="#">
                <li class="servProvButton">Become a Service Provider</li>
              </a>
            </ul>
          </div>
          <a href="#social" alt="Login" style="margin-left: 20px;"><i class="fas fa-hiking" style="color: #000;"></i></a>
        </nav>
      </div>

      <div class="MobNav">
        <nav class="navbar-2 navbar-expand fixed-bottom navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" style="float: right;">
            <span class="navbar-toggler-icon" style="float: right;"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse" style="justify-content: space-between;float: center;">
            <a class="navbar-brand" href="index.html" style="margin: 0px !important;padding: 0 !important;">
              <img src="assets/favicon/favicon.png" width="50" height="45" class="d-inline-block align-top" alt="travelkeet-logo" style="margin-right: 0 !important;">
            </a>
            <ul class="navbar-nav mr-auto" style="margin: 0 !important;padding: 0 !important;">
              <li class="nav-item" style="margin: 1vh 1vw !important;padding: 0 !important;">
                <a class="nav-link" href="#">
                  <i class="fas fa-rv" style="font-size: 8vw;"></i>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item" style="margin: 1vh 1vw !important;padding: 0 !important;">
                <a class="nav-link" href="#">
                  <i class="fas fa-campground" style="font-size: 8vw;"></i>
                </a>
              </li>
              <li class="nav-item" style="margin: 1vh 1vw !important;padding: 0 !important;">
                <a class="nav-link" href="#">
                  <i class="far fa-university" style="font-size: 8vw;"></i>
                </a>
              </li>
              <li class="nav-item dropup" style="margin: 1vh 1vw !important;padding: 0 !important;">
                <a class="nav-link dropdown-toggle" href="https://getbootstrap.com/" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-utensils" style="font-size: 8vw;"></i>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown10">
                  <a class="dropdown-item" href="#">Food</a>
                  <a class="dropdown-item" href="#">Beverage</a>
                  <a class="dropdown-item" href="#">Utilities</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    `;
  }
}

customElements.define('navbar-component', Navbar);