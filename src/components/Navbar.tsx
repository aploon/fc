import {
  Header,
  HeaderContainer,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  HeaderSideNavItems
} from '@carbon/react';
import { Search, Notification, Switcher as SwitcherIcon } from '@carbon/icons-react';
import { megaMenuData, simpleMenuItems } from '../data/menuData';

export default function Navbar() {
    return <HeaderContainer render={({
        isSideNavExpanded,
        onClickSideNavExpand
      }) => <>
              <Header aria-label="HeartConsultants LLC">
                <SkipToContent />
                <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
                <HeaderName href="/" prefix="HeartConsultants">
                  LLC
                </HeaderName>
                <HeaderNavigation aria-label="Main navigation">
                  {simpleMenuItems.map((item) => (
                    <HeaderMenuItem className='!text-base' href={item.href} key={item.href}>{item.label}</HeaderMenuItem>
                  ))}
                  {megaMenuData.map((group) => (
                    <HeaderMenu aria-label={group.label} menuLinkName={group.label} key={group.label}>
                      {/* Featured items first if present */}
                      {group.featured?.items.map((fi) => (
                        <HeaderMenuItem className='!text-base' href={fi.href} key={`featured-${fi.href}`}>{fi.title}</HeaderMenuItem>
                      ))}
                      {/* Flatten categories into menu items */}
                      {group.categories.flatMap((cat) => (
                        cat.items.map((mi) => (
                          <HeaderMenuItem className='!text-base' href={mi.href} key={`${group.label}-${mi.href}`}>{mi.title}</HeaderMenuItem>
                        ))
                      ))}
                    </HeaderMenu>
                  ))}
                </HeaderNavigation>
                <HeaderGlobalBar>
                  <HeaderGlobalAction aria-label="Search" onClick={()=>{}}>
                    <Search size={20} />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction aria-label="Notifications" onClick={()=>{}}>
                    <Notification size={20} />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction aria-label="App Switcher" onClick={()=>{}} tooltipAlignment="end">
                    <SwitcherIcon size={20} />
                  </HeaderGlobalAction>
                </HeaderGlobalBar>
                <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false} onSideNavBlur={onClickSideNavExpand}>
                  <SideNavItems>
                    <HeaderSideNavItems>
                      {simpleMenuItems.map((item) => (
                        <HeaderMenuItem className='!text-base' href={item.href} key={`side-${item.href}`}>{item.label}</HeaderMenuItem>
                      ))}
                      {megaMenuData.map((group) => (
                        <HeaderMenu aria-label={group.label} menuLinkName={group.label} key={`side-${group.label}`}>
                          {group.featured?.items.map((fi) => (
                            <HeaderMenuItem className='!text-base' href={fi.href} key={`side-featured-${fi.href}`}>{fi.title}</HeaderMenuItem>
                          ))}
                          {group.categories.flatMap((cat) => (
                            cat.items.map((mi) => (
                              <HeaderMenuItem className='!text-base' href={mi.href} key={`side-${group.label}-${mi.href}`}>{mi.title}</HeaderMenuItem>
                            ))
                          ))}
                        </HeaderMenu>
                      ))}
                    </HeaderSideNavItems>
                  </SideNavItems>
                </SideNav>
              </Header>
            </>} />
}