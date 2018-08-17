import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Secret Angel',
    icon: 'nb-home',
    link: '/pages/sa',
    home: true,
  },
  {
    title: '已標籤',
    icon: 'nb-home',
    link: '/pages/bookmark',
    home: true,
  },
  {
    title: '配對結果',
    icon: 'nb-home',
    link: '/pages/result',
    home: true,
  },
  {
    title: '個人資料',
    icon: 'nb-home',
    link: '/pages/profile',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
