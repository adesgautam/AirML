import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      }
      ,
      {
        state: 'engine1',
        short_label: 'E1',
        name: 'Engine 1',
        type: 'link',
        icon: 'ti-crown'
      }
      ,
      {
        state: 'engine2',
        short_label: 'E2',
        name: 'Engine 2',
        type: 'link',
        icon: 'ti-crown'
      },
      {
        state: 'engine3',
        short_label: 'E3',
        name: 'Engine 3',
        type: 'link',
        icon: 'ti-crown'
      },
      {
        state: 'engine4',
        short_label: 'E4',
        name: 'Engine 4',
        type: 'link',
        icon: 'ti-crown'
      }
      // {
      //   state: 'engine5',
      //   short_label: 'E5',
      //   name: 'Engine 5',
      //   type: 'link',
      //   icon: 'ti-crown'
      // },
    ],
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}

/*

,
  {
    label: 'Tables',
    main: [
      {
        state: 'bootstrap-table',
        short_label: 'B',
        name: 'Bootstrap Table',
        type: 'link',
        icon: 'ti-receipt'
      }
    ]
  },
  {
    label: 'Map And Extra Pages ',
    main: [
      {
        state: 'map',
        short_label: 'M',
        name: 'Maps',
        type: 'link',
        icon: 'ti-map-alt'
      },
      {
        state: 'authentication',
        short_label: 'A',
        name: 'Authentication',
        type: 'sub',
        icon: 'ti-id-badge',
        children: [
          {
            state: 'login',
            type: 'link',
            name: 'Login',
            target: true
          }, {
            state: 'registration',
            type: 'link',
            name: 'Registration',
            target: true
          }
        ]
      },
      {
        state: 'error',
        external: 'http://lite.codedthemes.com/guru-able/error.html',
        name: 'Error',
        type: 'external',
        icon: 'ti-layout-list-post',
        target: true
      },
      {
        state: 'user',
        short_label: 'U',
        name: 'User Profile',
        type: 'link',
        icon: 'ti-user'
      }
    ]
  },
  {
    label: 'Other',
    main: [
      {
        state: '',
        short_label: 'M',
        name: 'Menu Levels',
        type: 'sub',
        icon: 'ti-direction-alt',
        children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          }, {
            state: '',
            name: 'Menu Level 2.3',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.4',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.4.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.4.2',
                target: true
              }
            ]
          }
        ]
      },
      {
        state: 'simple-page',
        short_label: 'S',
        name: 'Simple Page',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      }
    ]
  }, {
    label: 'Support',
    main: [
      {
        state: 'Upgrade To Pro',
        short_label: 'U',
        external: 'https://codedthemes.com/item/guru-able-admin-template/',
        name: 'Upgrade To Pro',
        type: 'external',
        icon: 'ti-layout-list-post',
        target: true
      }
    ]
  }

*/
