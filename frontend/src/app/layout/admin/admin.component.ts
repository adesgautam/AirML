import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';
import {MenuItems} from '../../shared/menu-items/menu-items';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  animations: [
    trigger('mobileMenuTop', [
      state('no-block, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('yes-block',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('no-block <=> yes-block', [
        animate('400ms ease-in-out')
      ])
    ]),
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})


export class AdminComponent implements OnInit {
  navType: string; /* st1, st2(default), st3, st4 */
  themeLayout: string; /* vertical(default) */
  layoutType: string; /* dark, light */
  verticalPlacement: string; /* left(default), right */
  verticalLayout: string; /* wide(default), box */
  deviceType: string; /* desktop(default), tablet, mobile */
  verticalNavType: string; /* expanded(default), offcanvas */
  verticalEffect: string; /* shrink(default), push, overlay */
  vNavigationView: string; /* view1(default) */
  pcodedHeaderPosition: string; /* fixed(default), relative*/
  pcodedSidebarPosition: string; /* fixed(default), absolute*/
  headerTheme: string; /* theme1(default), theme2, theme3, theme4, theme5, theme6 */
  logoTheme: string; /* theme1(default), theme2, theme3, theme4, theme5, theme6 */

  innerHeight: string;
  windowWidth: number;

  toggleOn: boolean;

  headerFixedMargin: string;
  navBarTheme: string; /* theme1, themelight1(default)*/
  activeItemTheme: string; /* theme1, theme2, theme3, theme4(default), ..., theme11, theme12 */

  isCollapsedMobile: string;
  isCollapsedSideBar: string;

  chatToggle: string;
  chatToggleInverse: string;
  chatInnerToggle: string;
  chatInnerToggleInverse: string;

  menuTitleTheme: string; /* theme1, theme2, theme3, theme4, theme5(default), theme6 */
  itemBorder: boolean;
  itemBorderStyle: string; /* none(default), solid, dotted, dashed */
  subItemBorder: boolean;
  subItemIcon: string; /* style1, style2, style3, style4, style5, style6(default) */
  dropDownIcon: string; /* style1(default), style2, style3 */
  configOpenRightBar: string;
  isSidebarChecked: boolean;
  isHeaderChecked: boolean;

  @ViewChild('searchFriends') search_friends: ElementRef;
/*  @ViewChild('toggleButton') toggle_button: ElementRef;
  @ViewChild('sideMenu') side_menu: ElementRef;*/

  constructor(public menuItems: MenuItems) {
    this.navType = 'st2';
    this.themeLayout = 'vertical';
    this.vNavigationView = 'view1';
    this.verticalPlacement = 'left';
    this.verticalLayout = 'wide';
    this.deviceType = 'desktop';
    this.verticalNavType = 'expanded';
    this.verticalEffect = 'shrink';
    this.pcodedHeaderPosition = 'fixed';
    this.pcodedSidebarPosition = 'fixed';
    this.headerTheme = 'theme1';
    this.logoTheme = 'theme1';

    this.toggleOn = true;

    this.headerFixedMargin = '80px';
    this.navBarTheme = 'themelight1';
    this.activeItemTheme = 'theme4';

    this.isCollapsedMobile = 'no-block';
    this.isCollapsedSideBar = 'no-block';

    this.chatToggle = 'out';
    this.chatToggleInverse = 'in';
    this.chatInnerToggle = 'off';
    this.chatInnerToggleInverse = 'on';

    this.menuTitleTheme = 'theme5';
    this.itemBorder = true;
    this.itemBorderStyle = 'none';
    this.subItemBorder = true;
    this.subItemIcon = 'style6';
    this.dropDownIcon = 'style1';
    this.isSidebarChecked = true;
    this.isHeaderChecked = true;

    const scrollHeight = window.screen.height - 150;
    this.innerHeight = scrollHeight + 'px';
    this.windowWidth = window.innerWidth;
    this.setMenuAttributes(this.windowWidth);
  }

  ngOnInit() {
  }

  onResize(event) {
    this.innerHeight = event.target.innerHeight + 'px';
    /* menu responsive */
    this.windowWidth = event.target.innerWidth;
    let reSizeFlag = true;
    if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
      reSizeFlag = false;
    } else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
      reSizeFlag = false;
    }
    /* for check device */
    if (reSizeFlag) {
      this.setMenuAttributes(this.windowWidth);
    }
  }

  setMenuAttributes(windowWidth) {
    if (windowWidth >= 768 && windowWidth <= 1024) {
      this.deviceType = 'tablet';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'push';
    } else if (windowWidth < 768) {
      this.deviceType = 'mobile';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'overlay';
    } else {
      this.deviceType = 'desktop';
      this.verticalNavType = 'expanded';
      this.verticalEffect = 'shrink';
    }
  }

  toggleOpened() {
    if (this.windowWidth < 768) {
      this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
    }
    this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
  }

  onClickedOutside(e: Event) {
    if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
      this.toggleOn = true;
      this.verticalNavType = 'offcanvas';
    }
  }

  onMobileMenu() {
    this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
  }

  toggleOpenedSidebar() {
    this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
  }
}
