<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
  <title>Abdul's Barbers | Premium Grooming · Buncrana</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- NAVIGATION -->
  <nav class="navbar" id="navbar">
    <div class="container nav-inner">
      <a href="#" class="nav-logo">
        <span class="logo-icon"><i class="fas fa-cut"></i></span>
        <span class="logo-text">Abdul's <em>Barbers</em></span>
      </a>
      <ul class="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#hours">Hours</a></li>
        <li><a href="#location">Location</a></li>
      </ul>
      <a href="tel:0830640513" class="nav-cta">
        <i class="fas fa-phone-alt"></i> Call Us
      </a>
      <button class="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section class="hero" id="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="hero-eyebrow animate fade-in-up">
        <i class="fas fa-map-marker-alt"></i> Buncrana, Co. Donegal
      </div>
      <h1 class="animate fade-in-up delay-1">Precision Cuts.<br><span class="accent">Elevated Style.</span></h1>
      <p class="subheadline animate fade-in-up delay-2">Quality haircuts and beard trims in Buncrana. Come in and get the cut you want.</p>
      <div class="hero-actions animate fade-in-up delay-3">
        <a href="tel:0830640513" class="btn-primary">
          <i class="fas fa-phone-alt"></i> Call Us
        </a>
        <a href="#services" class="btn-secondary">
          View Services <i class="fas fa-arrow-right"></i>
        </a>
      </div>
      <div class="hero-trust animate fade-in-up delay-4">
        <div class="trust-item">
          <div class="trust-stars">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          </div>
          <span>5.0 · 8 Google Reviews</span>
        </div>
        <div class="trust-divider"></div>
        <div class="trust-item">
          <i class="fab fa-instagram"></i>
          <span>450+ Followers</span>
        </div>
      </div>
    </div>
    <div class="hero-social">
      <a href="https://www.instagram.com/abdul.brs/" target="_blank" class="instagram" aria-label="Instagram"><i class="fab fa-instagram"></i> Instagram</a>
      <a href="https://www.facebook.com/p/Abduls-barbers-61580617242459/" target="_blank" class="facebook" aria-label="Facebook"><i class="fab fa-facebook-f"></i> Facebook</a>
    </div>
    <div class="hero-scroll">
      <span>Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>

  <!-- STATS STRIP -->
  <section class="stats-strip">
    <div class="container stats-inner">
      <div class="stat-item">
        <span class="stat-number">5.0<i class="fas fa-star"></i></span>
        <span class="stat-label">Google Rating</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">450+</span>
        <span class="stat-label">Instagram Followers</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">4</span>
        <span class="stat-label">Services Offered</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number">083 064 0513</span>
        <span class="stat-label">Get in Touch</span>
      </div>
    </div>
  </section>

  <!-- SERVICES SECTION -->
  <section class="services" id="services">
    <div class="container">
      <div class="section-header animate fade-in-up">
        <p class="section-label">What We Offer</p>
        <h2>Our Services</h2>
        <p class="section-sub">Every service delivered with precision and care.</p>
      </div>
      <div class="card-grid">
        <div class="service-card animate scale-in delay-1">
          <div class="service-card-top">
            <div class="service-icon-wrap">
              <i class="fas fa-scissors service-icon"></i>
            </div>
            <div class="service-price-tag">€17</div>
          </div>
          <h3>Haircut</h3>
          <p>Signature cut tailored to your face shape and style, finished to perfection.</p>
        </div>
        <div class="service-card animate scale-in delay-2">
          <div class="service-card-top">
            <div class="service-icon-wrap">
              <i class="fas fa-user-tie service-icon"></i>
            </div>
            <div class="service-price-tag">€12</div>
          </div>
          <h3>Beard Trim</h3>
          <p>Precision shape, edge and condition for a sharp, well-groomed finish.</p>
        </div>
        <div class="service-card animate scale-in delay-3">
          <div class="service-card-top">
            <div class="service-icon-wrap">
              <i class="fas fa-layer-group service-icon"></i>
            </div>
            <div class="service-price-tag">€25</div>
          </div>
          <h3>Haircut & Beard</h3>
          <p>The complete groom — precision cut combined with expert beard shaping and conditioning.</p>
        </div>
        <div class="service-card animate scale-in delay-4">
          <div class="service-card-top">
            <div class="service-icon-wrap">
              <i class="fas fa-child service-icon"></i>
            </div>
            <div class="service-price-tag">€12</div>
          </div>
          <h3>Kids Cut</h3>
          <p>A friendly, relaxed cut for the little ones, styled neatly every time.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section class="about" id="about">
    <div class="container about-grid">
      <div class="about-media animate scale-in">
        <div class="about-img-wrap">
          <img src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEU6cyW7u1fGqNgfg1IO_jKrLGVDnHtXFVE8RSm8DDIDnGuwgWIMTuB9Q1CJ4wO1Spyem2_BoH57C2FeO3TY0k8s4tR3Cm6Crv4a_Zsko8QMBgTLAQeeP65aF1ijMK0HanpOnf9Jc1LLbxr=s680-w680-h510-rw" alt="Abdul's Barbers interior" loading="lazy">
          <div class="about-img-badge">
            <div class="about-badge-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <strong>5.0</strong>
            <span>on Google</span>
          </div>
        </div>
      </div>
      <div class="about-text animate slide-in-left">
        <p class="section-label">Our Story</p>
        <h2>Craft. Precision.<br><span class="accent">Community.</span></h2>
        <p><strong>Abdul's Barbers</strong> is Buncrana's premium grooming destination, located in Milltown Business Park. We blend classic barbering tradition with modern streetwear style to deliver cuts that are always on point.</p>
        <p>With a perfect 5.0 rating and a loyal following, we're committed to precision fades, sharp beard work, and a welcoming environment where every client feels at home.</p>
        <div class="about-features">
          <div class="about-feature">
            <i class="fas fa-check-circle"></i>
            <span>Tailored to your face shape</span>
          </div>
          <div class="about-feature">
            <i class="fas fa-check-circle"></i>
            <span>Classic & modern styles</span>
          </div>
          <div class="about-feature">
            <i class="fas fa-check-circle"></i>
            <span>Friendly, professional service</span>
          </div>
        </div>
        <div class="about-phone">
          <i class="fas fa-phone-alt"></i> 083 064 0513
        </div>
      </div>
    </div>
  </section>

  <!-- REVIEWS SECTION -->
  <section class="reviews" id="reviews">
    <div class="container">

      <div class="reviews-top animate fade-in-up">
        <div class="reviews-heading">
          <p class="section-label">Client Feedback</p>
          <h2>What Clients Say</h2>
        </div>
        <div class="review-overall">
          <div class="review-score-wrap">
            <div class="review-score">5.0</div>
            <div class="review-score-stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <div class="review-score-label">8 reviews on <span><i class="fab fa-google"></i> Google</span></div>
          </div>
        </div>
      </div>

      <!-- Featured quotes -->
      <div class="review-cards">
        <div class="review-card animate scale-in delay-1">
          <div class="review-quote"><i class="fas fa-quote-left"></i></div>
          <p class="review-text">Best barber around. I always got the wrong haircut but with his recommendations he designed and shaped my head to best suit my face — couldn't be happier.</p>
          <div class="review-footer">
            <div class="reviewer-avatar" style="--av:#c0392b">FH</div>
            <div class="reviewer-info">
              <div class="reviewer">Fadi Haj Habo</div>
              <div class="review-meta"><i class="fab fa-google"></i> Google · 9 months ago</div>
            </div>
            <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
        </div>
        <div class="review-card animate scale-in delay-2">
          <div class="review-quote"><i class="fas fa-quote-left"></i></div>
          <p class="review-text">Very professional, happy out. Excellent service every time — wouldn't go anywhere else.</p>
          <div class="review-footer">
            <div class="reviewer-avatar" style="--av:#1e6fb5">OJ</div>
            <div class="reviewer-info">
              <div class="reviewer">Osama Jamano Alhaj Yousef</div>
              <div class="review-meta"><i class="fab fa-google"></i> Google · 9 months ago</div>
            </div>
            <div class="review-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
        </div>
      </div>

      <!-- Star-only reviewers strip -->
      <div class="review-strip animate fade-in-up">
        <div class="review-strip-label">Also rated 5 stars</div>
        <div class="review-strip-items">
          <div class="strip-item">
            <div class="reviewer-avatar" style="--av:#27ae60">OS</div>
            <div class="strip-name">Osama</div>
            <div class="strip-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
          <div class="strip-divider"></div>
          <div class="strip-item">
            <div class="reviewer-avatar" style="--av:#8e44ad">PD</div>
            <div class="strip-name">Patrick Doherty</div>
            <div class="strip-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
          <div class="strip-divider"></div>
          <div class="strip-item">
            <div class="reviewer-avatar" style="--av:#d35400">JB</div>
            <div class="strip-name">James Bradley</div>
            <div class="strip-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
          <div class="strip-divider"></div>
          <div class="strip-item">
            <div class="reviewer-avatar" style="--av:#16a085">MB</div>
            <div class="strip-name">Michael Bradley</div>
            <div class="strip-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- HOURS & LOCATION COMBINED -->
  <section class="info-section" id="hours">
    <div class="container">
      <div class="info-grid">

        <!-- HOURS -->
        <div class="info-block animate slide-in-left">
          <p class="section-label">Opening Times</p>
          <h2>Hours</h2>
          <div class="hours-list">
            <div class="hours-item closed"><span>Monday</span> <span class="closed-tag">Closed</span></div>
            <div class="hours-item"><span>Tuesday</span> <span>9:30 am – 6:00 pm</span></div>
            <div class="hours-item"><span>Wednesday</span> <span>9:30 am – 6:00 pm</span></div>
            <div class="hours-item"><span>Thursday</span> <span>9:30 am – 6:00 pm</span></div>
            <div class="hours-item"><span>Friday</span> <span>9:30 am – 6:00 pm</span></div>
            <div class="hours-item"><span>Saturday</span> <span>9:00 am – 5:00 pm</span></div>
            <div class="hours-item closed"><span>Sunday</span> <span class="closed-tag">Closed</span></div>
          </div>
          <p class="hours-note"><i class="far fa-clock"></i> Bank holidays may affect opening hours</p>
        </div>

        <!-- LOCATION -->
        <div class="info-block animate slide-in-left" id="location">
          <p class="section-label">Where to Find Us</p>
          <h2>Location</h2>
          <div class="map-container animate scale-in">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.536123456789!2d-7.456789!3d55.136789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488f9b2c5b5b5b5b%3A0x123456789abcdef!2sUnit%204%2C%20Milltown%20Business%20Park%2C%20Buncrana%2C%20Co.%20Donegal%2C%20F93%20Y5CF!5e0!3m2!1sen!2sie!4v1690000000000"
              width="100%" height="220" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Abdul's Barbers location"></iframe>
          </div>
          <div class="address-box">
            <p><i class="fas fa-map-marker-alt"></i> Unit 4, Milltown Business Park<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buncrana, Co. Donegal, F93 Y5CF</p>
            <p><i class="fas fa-phone"></i> 083 064 0513</p>
          </div>
          <div class="location-links">
            <a href="tel:0830640513"><i class="fas fa-phone-alt"></i> Call Now</a>
            <a href="https://maps.google.com/?q=Unit+4+Milltown+Business+Park+Buncrana+Co+Donegal+F93+Y5CF" target="_blank"><i class="fas fa-directions"></i> Get Directions</a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-brand">
        <span class="logo-icon"><i class="fas fa-cut"></i></span>
        <span class="logo-text">Abdul's <em>Barbers</em></span>
      </div>
      <div class="footer-info">
        <p>Unit 4, Milltown Business Park, Buncrana, Co. Donegal</p>
        <p>083 064 0513</p>
      </div>
      <div class="footer-social">
        <a href="https://www.instagram.com/abdul.brs/" target="_blank" class="instagram" aria-label="Instagram"><i class="fab fa-instagram"></i> Instagram</a>
        <a href="https://www.facebook.com/p/Abduls-barbers-61580617242459/" target="_blank" class="facebook" aria-label="Facebook"><i class="fab fa-facebook-f"></i> Facebook</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2025 Abdul's Barbers · All rights reserved</p>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
