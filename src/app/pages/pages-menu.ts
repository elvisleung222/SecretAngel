import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '已標籤',
    icon: 'ion ion-bookmark',
    link: '/pages/bookmark',
    home: true,
  },
  {
    title: '配對結果',
    icon: 'ion ion-clipboard',
    link: '/pages/result',
    home: true,
  },
  {
    title: '個人資料',
    icon: 'nb-person',
    link: '/pages/profile',
    home: true,
  },
  {
    title: '暫用',
    group: true,
  },
  {
    title: 'Auth (暫用)',
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
