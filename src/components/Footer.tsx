import {
    LogoFacebook,
    LogoLinkedin,
    LogoTwitter,
    LogoYoutube,
    Rss
} from '@carbon/icons-react';
import {
    Button,
    Link,
    TextInput
} from '@carbon/react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="hc-footer">
      <div className="hc-footer__container">
        {/* Main Footer Content */}
        <div className="hc-footer__main">
          <div className="hc-footer__content">
            {/* Left Column - Logo & Subscribe */}
            <div className="hc-footer__left">
              <div className="hc-footer__brand">
                <div className="hc-footer__logo">
                  <img 
                    src="/logo.png" 
                    alt="HeartConsultants LLC" 
                    className="hc-footer__logo-img"
                  />
                  {/* <span className="hc-footer__logo-text">
                    <strong>Heart</strong>Consultants LLC
                  </span> */}
                </div>
              </div>
              
              <div className="hc-footer__subscribe">
                <h3 className="hc-footer__subscribe-title">Subscribe</h3>
                <p className="hc-footer__subscribe-description">
                  Select topics and stay current with our latest insights
                </p>
                <div className="hc-footer__subscribe-form">
                  <TextInput
                    id="email-subscribe"
                    type="email"
                    labelText=""
                    placeholder="Email address"
                    className="hc-footer__email-input"
                  />
                  <Button 
                    kind="primary" 
                    size="md"
                    className="hc-footer__subscribe-btn"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Links */}
            <div className="hc-footer__right">
              <div className="hc-footer__links">
                <div className="hc-footer__links-row">
                  <Link href="/contact" className="hc-footer__link">Contact us</Link>
                  <Link href="/scam-warning" className="hc-footer__link">Scam warning</Link>
                  <Link href="/faq" className="hc-footer__link">FAQ</Link>
                  <Link href="/privacy" className="hc-footer__link">Privacy policy</Link>
                  <Link href="/privacy-choices" className="hc-footer__link">
                    Your privacy choices
                  </Link>
                </div>
                <div className="hc-footer__links-row">
                  <Link href="/cookie-preferences" className="hc-footer__link">Cookie preferences</Link>
                  <Link href="/terms" className="hc-footer__link">Terms of use</Link>
                  <Link href="/local-language" className="hc-footer__link">Local language information</Link>
                  <Link href="/accessibility" className="hc-footer__link">Accessibility statement</Link>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="hc-footer__social">
                <Link href="https://linkedin.com/company/heartconsultants" className="hc-footer__social-link">
                  <LogoLinkedin size={20} />
                </Link>
                <Link href="https://twitter.com/heartconsultants" className="hc-footer__social-link">
                  <LogoTwitter size={20} />
                </Link>
                <Link href="https://facebook.com/heartconsultants" className="hc-footer__social-link">
                  <LogoFacebook size={20} />
                </Link>
                <Link href="https://youtube.com/heartconsultants" className="hc-footer__social-link">
                  <LogoYoutube size={20} />
                </Link>
                <Link href="/rss" className="hc-footer__social-link">
                  <Rss size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="hc-footer__bottom">
          <div className="hc-footer__bottom-content">
            {/* Left - Mobile App */}
            <div className="hc-footer__bottom-left">
              <div className="hc-footer__mobile-app">
                <p className="hc-footer__mobile-text">
                  HeartConsultants Insights - Get our latest thinking on your iPhone, iPad, or Android device.
                </p>
                <div className="hc-footer__app-buttons">
                  <Button 
                    kind="ghost" 
                    size="sm"
                    className="hc-footer__app-btn"
                  >
                    Download on the App Store
                  </Button>
                  <Button 
                    kind="ghost" 
                    size="sm"
                    className="hc-footer__app-btn"
                  >
                    GET IT ON Google Play
                  </Button>
                </div>
              </div>
            </div>

            {/* Right - Copyright */}
            <div className="hc-footer__bottom-right">
              <div className="hc-footer__copyright">
                <p className="hc-footer__copyright-text">
                  © 2024-2025 HeartConsultants LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;