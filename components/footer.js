class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          /*height: 60px;*/
          padding-top: 80px;
          padding-bottom: 40px;
          padding-left: 10%;
          padding-right: 2%;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: top;
          background-image: linear-gradient(to bottom right,#55D983,#55BFAB);
          font-family: 'Poppins', sans-serif;
        }

        .footer-heading {
        	font-weight: bold;
        	list-style: none;
          display: block;
          /*margin: 0 15px;*/
          padding-bottom: 10px;
        }

        .footer-col {
          list-style: none;
          display: inline;
          padding-bottom: 0px;
        }

        @media screen and (max-width: 768px) {
				  footer {
    				display: block;
    				padding-top: 40px;
    				padding-left: 20%;
    			}

        	li.social-row {
        		display: inline !important;
        	}

        	li.social-icons {
        		display: inline !important;
        	}
				}
        
        li {
          list-style: none;
          display: block;
          padding-bottom: 10px;
        }

        a {
          /*margin: 0 0 0 15px;*/
          color: inherit;
          text-decoration: none;
        }
        
        a:hover {
          /*padding-bottom: 5px;*/
          text-decoration: none;
          color: #fff;
          /*margin: 0 15px 0 0;*/
        }
        
        .social-icons {
        	margin: 0 0 0 15px;
        	display: block;
          color: inherit;
          text-decoration: none;
          color: #fff;
				}

				.social-icons:hover {
          /*padding-bottom: 5px;*/
          text-decoration: none;
          color: #000;
          /*margin: 0 15px 0 0;*/
        }

        .fa-facebook-f:hover {
        	color: #000000 !important;
        }
        .fa-instagram:hover {
        	color: #000000 !important;
        }
        .fa-twitter:hover {
        	color: #000000 !important;
        }
        .fa-youtube:hover {
        	color: #000000 !important;
        }

        .social-row {
          font-size: 27px;
          display: block;
        }

        ul.social-row {
        	padding: 20px 0 0 0;
        	display: block;
        }
        
        .social-row {
          margin: 0 15px 5px 15px;
          font-size: 27px;
          display: block;
        }

      </style>
      <footer>
        <ul class="footer-col">
        	<li class="footer-heading">Company</li>
          <li><a href="#company">About</a></li>
          <li><a href="#company">Careers</a></li>
          <li><a href="#company">Partnership</a></li>
          <li><a href="#company">Investor Relations</a></li>
        </ul>
        <ul class="footer-col">
        	<li class="footer-heading">Explore</li>
          <li><a href="#explore">Camper Vans</a></li>
          <li><a href="#explore">Camping Parks</a></li>
          <li><a href="#explore">Utility Sites</a></li>
          <li><a href="#explore">Troop Support</a></li>
          <li><a href="#explore">Become a Service Provider</a></li>
          <li><a href="#explore">Advertising</a></li>
        </ul>
        <ul class="footer-col">
        	<li class="footer-heading">Terms and Policies</li>
          <li><a href="#terms">Privacy Statement</a></li>
          <li><a href="#terms">Terms of Use</a></li>
          <li><a href="#terms">Sustainable Goals</a></li>
        </ul>
        <ul class="footer-col">
        	<li class="footer-heading">Help</li>
          <li><a href="#help">Help and Support</a></li>
          <li><a href="#help">Contact Us</a></li>
        </ul>
        <ul class="social-row">
          <li class="social-icons"><a href="#social" alt="Facebook"><i class="fab fa-facebook-f" style="color:#fff"></i></a></li>
          <li class="social-icons"><a href="#social" alt="Instagram"><i class="fab fa-instagram" style="color:#fff"></i></a></li>
          <li class="social-icons"><a href="#social" alt="Twitter"><i class="fab fa-twitter" style="color:#fff"></i></a></li>
          <li class="social-icons"><a href="#social" alt="Youtube"><i class="fab fa-youtube" style="color:#fff"></i></a></li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);