import { Header as CarbonHeader, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderGlobalBar, HeaderGlobalAction, Button } from '@carbon/react';
import { User } from '@carbon/icons-react';
import './Header.scss';

const Header = () => {
  return (
    <CarbonHeader aria-label="HeartConsultants LLC" className="hc-header">
      <HeaderName href="/" prefix="">
        <span className="hc-header__logo">
          <span className="hc-header__logo-heart">♥</span>
          <span className="hc-header__logo-text">
            <strong>Heart</strong>Consultants LLC
          </span>
        </span>
      </HeaderName>

      <HeaderNavigation aria-label="HeartConsultants LLC">
        <HeaderMenuItem href="#services">
          Services
        </HeaderMenuItem>
        <HeaderMenuItem href="#expertise">
          Expertise
        </HeaderMenuItem>
        <HeaderMenuItem href="#insights">
          Insights
        </HeaderMenuItem>
        <HeaderMenuItem href="#about">
          About
        </HeaderMenuItem>
      </HeaderNavigation>

      <HeaderGlobalBar>
        <Button 
          kind="primary" 
          size="sm"
          className="hc-header__cta"
        >
          Request Consultation
        </Button>
        <HeaderGlobalAction 
          aria-label="User Profile"
          tooltipAlignment="end"
        >
          <User size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </CarbonHeader>
  );
};

export default Header;
