import { useState } from 'react';
import { Header as CarbonHeader, HeaderName, HeaderNavigation, HeaderGlobalBar, HeaderGlobalAction, Button, OverflowMenu, OverflowMenuItem } from '@carbon/react';
import { User, ChevronDown, Filter } from '@carbon/icons-react';
import { megaMenuData, simpleMenuItems } from '../data/menuData';
import './Header.scss';

const Header = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const handleMenuClick = (label: string) => {
    setActiveMegaMenu(activeMegaMenu === label ? null : label);
  };

  const handleCloseMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  return (
    <>
      <CarbonHeader aria-label="HeartConsultants LLC" className="hc-header">
        <HeaderName href="/" prefix="">
          <span className="hc-header__logo">
            <span className="hc-header__logo-heart">♥</span>
            <span className="hc-header__logo-text">
              <strong>Heart</strong>Consultants LLC
            </span>
          </span>
        </HeaderName>

        <HeaderNavigation aria-label="HeartConsultants LLC" className="hc-header__nav">
          {megaMenuData.map((menu) => (
            <div
              key={menu.label}
              className={`hc-header__nav-item ${activeMegaMenu === menu.label ? 'active' : ''}`}
            >
              <Button
                kind="ghost"
                size="sm"
                className="hc-header__nav-button"
                onClick={() => handleMenuClick(menu.label)}
              >
                {menu.label}
                <ChevronDown size={16} className="hc-header__nav-icon" />
              </Button>
            </div>
          ))}

          {simpleMenuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{ textDecoration: 'none' }}
            >
              <Button
                kind="ghost"
                className="hc-header__nav-button"
              >
                {item.label}
              </Button>
            </a>
          ))}
        </HeaderNavigation>

        <HeaderGlobalBar>
          <Button>
            Request Consultation
          </Button>
          {/* <HeaderGlobalAction 
            aria-label="User Profile"
            tooltipAlignment="end"
          >
            <User size={20} />
          </HeaderGlobalAction> */}
          <OverflowMenu flipped={document?.dir === 'rtl'} renderIcon={User} size='lg'>
            <OverflowMenuItem itemText="Filter A" />
            <OverflowMenuItem itemText="Filter B" />
          </OverflowMenu>
        </HeaderGlobalBar>
      </CarbonHeader>

      {/* Mega Menu Dropdown */}
      {activeMegaMenu && (
        <>
          <div
            className="hc-mega-menu__backdrop"
            onClick={handleCloseMegaMenu}
          />
          <div className="hc-mega-menu">
            <div className="hc-mega-menu__container">
              {megaMenuData
                .filter((menu) => menu.label === activeMegaMenu)
                .map((menu) => (
                  <div key={menu.label} className="hc-mega-menu__content">
                    {/* Featured Section */}
                    {menu.featured && (
                      <div className="hc-mega-menu__featured">
                        <h3 className="hc-mega-menu__section-title">
                          {menu.featured.title}
                        </h3>
                        <div className="hc-mega-menu__featured-items">
                          {menu.featured.items.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="hc-mega-menu__featured-item"
                            >
                              <h4 className="hc-mega-menu__item-title">
                                {item.title}
                              </h4>
                              {item.description && (
                                <p className="hc-mega-menu__item-description">
                                  {item.description}
                                </p>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Categories Grid */}
                    <div className="hc-mega-menu__categories">
                      {menu.categories.map((category) => (
                        <div key={category.title} className="hc-mega-menu__category">
                          <h3 className="hc-mega-menu__category-title">
                            {category.title}
                          </h3>
                          <ul className="hc-mega-menu__list">
                            {category.items.map((item) => (
                              <li key={item.title}>
                                <a
                                  href={item.href}
                                  className="hc-mega-menu__link"
                                >
                                  {item.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* View All Link */}
                    <div className="hc-mega-menu__footer">
                      <a href={`/${menu.label.toLowerCase()}`} className="hc-mega-menu__view-all">
                        View all {menu.label.toLowerCase()} →
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
