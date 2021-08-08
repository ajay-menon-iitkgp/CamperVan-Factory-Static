class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        li.servProvButton {
          float: right;
          border-style: solid;
          border-radius: 20px;
          padding: 5px 20px;
          margin: 1% 0% 1% 15%;
          text-align: center;
        }

        @media screen and (max-width: 768px) {
          .book-now-cont {
            top: 54vh !important;
            font-size: 30px !important;
            width: 60% !important;
            margin-left: 20% !important;
          }
          div.bookingSticky {
            height: 40vh !important;
          }
          img.d-block {
            height: 60vh !important;
          }
        }

        @media screen and (max-width: 992) {
          li.servProvButton {
            margin: 2% 0% 1% 15%;
          }
        }

        a.navbar-brand {
          font-family: 'Poppins'.sans-serif;
          font-weight: 400;
          font-size: calc(1vw + 1vh + 50%);/*38px;*/
          line-height: 57px;
          margin-right: 40px;
        }

        a.nav-link {
          margin-top: 2px;
          color: #000 !important;
        }

        li.nav-item {
          margin-right: 20px;
          /*padding: 0 5px;*/
          padding-left: 20px;
          display: inline-block;
          border-color: #E7E7E7;
          border-left-style: solid;
          border-width: medium;
          font-size: 24px;
          line-height: 36px;
          color: #fff !important;
        }

        nav.navbar {
          position: fixed;
          top: 0%;
          z-index: 500;
          width: 94%;
          margin-left: 3%;
          height: 11vh;
          padding-left: 2%;
          padding-right: 4%;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        /*  border-radius: 20px;*/
          align-items: center;
          font-family: 'Poppins'.sans-serif;
          font-weight: 400;
          font-size: 24px;
          line-height: 36px;
          /*height: auto;*/
        }

        div.navCont {
          position: sticky;
          z-index: 500;
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

        img.d-inline-block {
          align-items: center;
          margin-right: 22px;
          margin-top: 8px;
        }

        div.book-now-cont {
          position: absolute;
          margin-left: 33%;
          top: 75vh;
          height: 12vh;
          width: 34%;
          text-align: center;
          background-color: #F8F8F8;
          padding: 10px;
          text-align: center;
          align-items: center;
          font-size: 36px;
          font-weight: 500;
          z-index: 250;
          border-radius: 20px;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }

        div.bookingSticky {
          /*position: -webkit-sticky;
          position: sticky;*/
          top: 100%;
          top: 0;
          height: 19vh;
          text-align: center;
          background-color: #F8F8F8;
          padding: 3% 0 3% 0;
          font-size: 30px;
          z-index: 200;
          box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
        }

        .carousel-indicators {
          position: absolute;
          top: 75%;
        }

        .carousel-indicators > li {
          border-radius: 100%;
          height: 10px;
          width: 10px;
          margin: 0 10px !important;
        }
      </style>
      <navbar>
        <nav class="navbar navbar-expand-xl navbar-light bg-light">
          <a class="navbar-brand" href="#" style="align-items: center;">
            <img src="assets/favicon/favicon.png" width="55" height="50" class="d-inline-block align-top" alt="travelkeet-logo">Travelkeet</a>
          <!--a class="navbar-brand" href="#">Travelkeet</a-->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="caravans.html">Caravans</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Caravan Parks</a>
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
            </ul>
            <li class="servProvButton">Become a Service Provider</li>
        </div>
        
        <a href="#social" alt="Login" style="margin-left: 20px;"><i class="fas fa-hiking"></i></a>
        </nav>
        </div>
    </div>

    <main>
    <!-- Landing Page Carousel -->
    <div id="carouselMainPage" class="carousel slide carousel-fade" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" style="border-bottom-left-radius: 25px; border-bottom-right-radius: 25px;">
        <div class="carousel-item active">
          <img class="d-block w-100" style="height: 81vh; object-fit: cover;" src="assets/img/carousel1.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" style="height: 81vh; object-fit: cover;" src="assets/img/carousel2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" style="height: 81vh; object-fit: cover;" src="assets/img/carousel3.jpg" alt="Third slide">
        </div>
      </div>
      <!--a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev" onclick="$('#carouselMainPage').carousel('prev')">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next" onclick="$('#carouselMainPage').carousel('next')">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a-->
    </div>

    <div class="book-now-cont">Book a Caravan</div>

    <div class="bookingSticky">BOOKING NOW</div>
      </navbar>

    `;
  }
}

customElements.define('navbar-component', Navbar);