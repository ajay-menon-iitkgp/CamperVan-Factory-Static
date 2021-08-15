class SearchBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        div.search-icon {
          width: 7vw;
          height: 7vw;
          border-radius: 50%;
          background: #fff;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          z-index: 999;
          margin-left: 0vw;
        }

        div.search-icon-last {
          width: 7vw;
          height: 7vw;
          border-radius: 50%;
          background: #fff;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          z-index: 999;
        }

        div.inset-search {
          width: 5.5vw;
          height: 5.5vw;
          border-radius: 50%;
          background: #fff;
          z-index: 999;
          margin: 0.75vw 0 0 0.75vw;
          background-image: linear-gradient(to bottom right,#55D983,#55BFAB);
        }

        div.search-field {
          margin-left: -5vw;
          margin-right: -5vw;
          margin-top: 4vh;
          width: 26vw;
          padding-left: 6vw;
            height: 8vh;
            background: #fff;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          z-index: 800;
        }

        div.search-date-field {
          margin-left: -3vw;
          margin-right: -3vw;
          margin-top: 4vh;
          width: 22vw;
          height: 8vh;
          background: #fff;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          z-index: 800;
          font-size: 18px;
        }

        input.date-input {
          width: 14vw;
          margin-top: 1.5vh;
          margin-left: 0vw;
          height: 5vh;
        }

        input.location-input {
          outline: 0;
          border-width: 0 0 2px;
          border-color: #000;
          height: 6vh;
          width: 14vw;
          margin-right: 9vw;
          padding: 5px;
          font-size: 18px;
        }

        div.daterangepicker {
          font-family: 'Poppins'.sans-serif;
          z-index: 999;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }

        @media screen and (max-width: 768px) {
          div.container-large {
            display: none !important;
          }
        }

        @media screen and (min-width: 769px) {
          div.container-mob {
            display: none;
          }
        }

        button.mob-search {
          font-family: 'Poppins'.sans-serif;
          font-weight: 500;
          background: #55D983;
          color: white;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          width: 50%;
          padding: 8px 10% 10px 10%;
          margin-right: 10%;
          margin-top: 2vh;
          border: 1px solid black;
          transition: background-color 0.5s;
          font-size: 5vw;
        }

        button.mob-search:hover {
          background-color: #55C6A1;
        }

        .mob-location {
          padding: 3vh 2vw;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
          width: 90%;
          margin-left: -1%;
          margin-top: 2vh;
          margin-bottom: 2vh;
          padding-bottom: 2vh;
          padding-left: 8vw;
          padding-top: 2vh;
          border-radius: 15px;
        }

        .mob-datepicker {
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
          width: 80%;
          margin-left: 5%;
          margin-top: 2vh;
          margin-bottom: 1vh;
          padding-bottom: 1vh;
          border-radius: 15px;
        }

        .mob-locations-inputs {
          width:60%;
          margin-left: 7vw;
        }

        input.mob-date-input {
          width: 80%;
          border: none;
          font-size: 65%;
          float: center;
          text-align: center;
        }

        input.mob-location-input {
          width: 100%;
          height: 5vh;
          border: none;
          font-size: 65%;
        }

        @media screen and (min-width: 576px) and (max-width: 768px) {
          .mob-datepicker {
            margin-top: 5vh !important;
            margin-bottom: 5vh !important;
          }
        }

      </style>
      <div class="container-large" style="padding: 0px; margin: 0px;">
        <div class="row">
          <div class="search-icon">
            <div class="inset-search"><i class="fas fa-map-marker-alt" style="margin: 1vw 0 0 0;font-size: 3.5vw;font-size: 3.5vw;"></i></div>
          </div>
          <div class="search-field">
            <input class="location-input" placeholder="From where?" type="text"/>
          </div>
          <div class="search-icon">
            <div class="inset-search"><i class="fas fa-map-marker-alt" style="margin: 1vw 0 0 0;font-size: 3.5vw;font-size: 3.5vw;"></i></div>
          </div>
          <div class="search-field">
            <input class="location-input" placeholder="And where to?" type="text"/>
          </div>
          <div class="search-icon">
            <div class="inset-search"><i class="far fa-calendar-alt" style="margin: 1vw 0 0 0;font-size: 3.5vw;font-size: 3.5vw;"></i></div>
          </div>
          <div class="search-date-field">
            <!--input type="text" name="daterange" value="01/01/2018 - 01/15/2018" /-->
            <input type="text" name="datefilter" value="" class="date-input"/>

            <script>
              $(function() {
                $('input[name="datefilter"]').daterangepicker({
                    autoUpdateInput: false,
                    locale: {
                        cancelLabel: 'Clear'
                    }
                });
                $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
                    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
                });
                $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
                    $(this).val('');
                });
              });
            </script>

          </div>
          <div class="search-icon-last">
            <div class="inset-search">
              <a href="caravans.html">
                <i class="fas fa-search" style="margin: 1vw 0 0 0;font-size: 3.2vw;font-size: 3.2vw;"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container-mob">
        <div class="mob-location">
          <div class="row">
            <i class="fal fa-route" style="font-size: 10vh;"></i>
            <div class="mob-locations-inputs">
              <div class="row">
                <input class="mob-location-input" placeholder="From where?" type="text"/>
              </div>
              <div class="row">
                <input class="mob-location-input" placeholder="To where?" type="text"/>
              </div>
            </div>
          </div>
        </div>
        <div class="mob-datepicker">
          <input type="text" name="datefilter" value="From Date | To Date" class="mob-date-input"/>
          <script>
          $(function() {
            $('input[name="datefilter"]').daterangepicker({
              autoUpdateInput: false,
              locale: {
                cancelLabel: 'Clear'
              }
            });
            $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
              $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
            });
            $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
              $(this).val('');
            });
          });
          </script>
        </div>
        <button class="mob-search">
          Search
        </button>
      </div>
    `;
  }
}

customElements.define('searchbar-component', SearchBar);