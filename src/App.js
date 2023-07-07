function App() {
  return (
    <div className="App">
      <header>
        <section class="hero">
          <nav>
            <div class="logo">
              <h1>STEFO</h1>
              <div class="underline"></div>
            </div>
            <div class="contact-info">
                <div class="contact-item">
                  <div class="contact-icon hero-phone"></div>
                  <p>+44(0)7484127079</p>
                </div>
                <div class="contact-item ">
                  <div class="contact-icon hero-mail"></div>
                  <p>info@STEFO.co.uk</p>
                </div>
            </div>
          </nav>
          <div class="hero-content">
            <h1 class="hero-title">Pick A Home For The Experience You Want</h1>
            <h3 class="hero-subTitle">Stay for weeks or months in homes that have it all</h3>
            <a href="#" class="button hero-button">Search Properties</a>
          </div>
        </section>
        <div class="search-container">
          <form action="" class="property-search-form" autoComplete="off">
            <div class="property-search-item property-search-location">
              <label for="location" class="label location-label">Where</label>
              <select type="text" id="location" class="dropdown location-search">
                <option value="" disabled selected>Locations</option>
                <option value="London">London</option>
                <option value="Leicester">Leicester</option>
                <option value="Manchester">Manchester</option>
                <option value="Newcastle">Newcastle</option>
                <option value="Birmingham">Birminham</option>
              </select>
            </div>
            <div class="vertical-line"></div>
            <div class="property-search-item property-search-startDate">
              <label for="startDate" class="label start-label">Check in</label>
              <input type="date" placeholder="Add date" id="startDate" class="dropdown start-date"/>
            </div>
            <div class="vertical-line"></div>
            <div class="property-search-item property-search-endDate">
              <label for="endDate" class="label end-label">Check out</label>
              <input type="date"  placeholder="Add date" id="endDate" class="dropdown end-date"/>
            </div>
            <div class="vertical-line"></div>
            <div class="property-search-item property-search-guests">
              <label for="guests" class="label guests-label">Who</label>
              <select id="guests" name="Guests" class="dropdown guests-dropdown">
                <option value="" disabled selected>Add guests</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="property-search-item button property-search-button">
              <input type="submit" value="Search" class="search-button"/>
            </div>
          </form>
        </div>
      </header>
      <section class="locations-container">
        <div class="locations">
          <div class="locations-text">
            <h3 class="locations-title">Our Locations</h3>
            <div class="underline layover-line"></div>
            <h4 class="locations-subtitle">Discover the magic of your next holiday by exploring  a variety of captivating cities.</h4>
          </div>
          <div class="locations-blocks">
            <div class="location-block top-block-1">
              <div class="location-image location-img1">
                <p>Liverpool</p>
              </div>
            </div>
            <div class="location-block top-block-2">
              <div class="location-image location-img2">
                <p>Leicester</p>
              </div>
            </div>
            <div class="location-block bottom-block">
              <div class="location-image location-img3">
                <p>London</p>
              </div>
            </div>
            <div class="block-hide"></div>
          </div>
        </div>
      </section>
      <section class="about-container">
        <div class="about">
          <div class="about-item about-image"></div>
          <div class="about-item about-text-container">
            <h3 class="about-title">Welcome to STEFO Holiday Homes</h3>
            <p class="about-text">STEFO, a family-owned company, offers a unique blend of warmth, hospitality, and homely comfort, making us your ideal choice for holiday home rentals. Our commitment to fairness, friendliness, and creating unforgettable holiday experiences sets us apart in the holiday home market.</p>
            <h4 class="about-subtitle">Our Vision</h4>
            <p class="about-text">Our vision is to craft a world where holiday homes are more than just places to stay; they become cherished spaces where memories are made, families connect, and the spirit of vacation truly comes to life. We strive to create a seamless, enjoyable journey for our guests, where every holiday home feels like a personal paradise.</p>
            <a href="#" class="button about-button">Find Out More</a>
          </div>
        </div>
      </section>
      <section class="banner1-container">
        <div class="banner1">
          <div class="banner1-header">
            <h3 class="banner1-title">We've Got You Covered</h3>
            <p class="banner1-subtitle">Our curated homes are beautifully designed with enough room for everyone and large open spaces to enjoy together.</p>
          </div>
          <div class="banner1-items-container">
            <div class="banner1-item">
              <div class="banner1-icon key"></div>
              <h4 class="banner1-text-title">24 Hour Self Check-in</h4>
              <p class="banner1-text">Smart locks and key boxes mean you can check in whenever suits.</p>
            </div>
            <div class="banner1-item">
              <div class="banner1-icon towel"></div>
              <h4 class="banner1-text-title">Hotel Quality Amenities</h4>
              <p class="banner1-text">We provide fresh linens, towels, toiletries for everyone.</p>
            </div>
            <div class="banner1-item">
              <div class="banner1-icon calendar"></div>
              <h4 class="banner1-text-title">Ultimate Flexibility</h4>
              <p class="banner1-text">Choose your length of stay, short and long stays availiable.</p>
            </div>
            <div class="banner1-item">
              <div class="banner1-icon hands"></div>
              <h4 class="banner1-text-title">All About You</h4>
              <p class="banner1-text">24/7 resident support and dedicated maintenance.</p>
            </div>
          </div>
          
        </div>
      </section>
      <section class="banner2-container">
        <div class="banner2"></div>
        <div class="banner-layover">
          <h3 class="layover-item layover-title">The STEFO Experience, Our Promise To You</h3>
          <div class="underline layover-line"></div>
          <div className="layover-item layover-text-container">
            <p class="layover-text">The STEFO Experience is a commitment to providing our guests with a truly immersive, enjoyable, and memorable holiday. From the moment you step into one of our properties, you'll see and feel the STEFO difference.<br/><br/>Every property in our portfolio is handpicked and maintained to the highest standards of quality and cleanliness. We ensure that our homes are not just places to stay, but spaces that add value to your holiday experience. Our properties come with modern amenities and facilities, offering you all the comforts and conveniences of home, even when you're miles away.</p>
            <p class="layover-text-color">A promise of unrivaled quality, impeccable service, and an unforgettable holiday. It's not just about where you stay, but how you stay. That's the STEFO difference.</p>
          </div>
        </div>
      </section>
      <section class="partner-container">
        <div class="partner">
          <div class="partner-item partner-img"></div>
          <div class="partner-item partner-text-container">
            <h3 class="partner-title">Become A Partner</h3>
            <div class="underline partner-line"></div>
            <h4 class="partner-subtitle">Interested in real estate? Join the family</h4>
            <p class="partner-text">We are always on the lookout for beautiful homes to become part of our exclusive collection of holiday rentals. Submit your property or learn more about partnering with STEFO.</p>
            <a href="#" class="button partner-button">Contact Us</a>
          </div>
        </div>
      </section>
      <footer>
        <div class="foot-content-container">
          <div class="foot-item foot-title-container">
            <div class="foot-title">
              <h1 class="foot-logo">STEFO</h1>
              <div class="underline foot-line"></div>
            </div>
            <div class="foot-contact-info">
                <div class="foot-contact-item">
                  <div class="foot-contact-icon foot-phone"></div>
                  <p>+44(0)7354849281</p>
                </div>
                <div class="foot-contact-item">
                  <div class="foot-contact-icon foot-mail"></div>
                  <p>info@STEFO.co.uk</p>
                </div>
            </div>
          </div>
          <div class="foot-item links-container">
            <div class="links">
              <h4 class="quick-links-title">Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div class="foot-item links-container">
            <div class="links">
              <ul>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="foot-item foot-copyright">
            <div class="social-icons">
              <a class="social-icon instagram"></a>
              <div class="social-icon twitter"></div>
              <div class="social-icon linkedin"></div>
            </div>
            <div class="copyright-text">© STEFO - All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
