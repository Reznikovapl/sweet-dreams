import {
  BsFillPersonFill,
  BsFillGearFill,
  BsBoxArrowRight,
  BsFillPersonCheckFill,
  BsFillPersonPlusFill,
} from 'react-icons/bs';

export const TIME_SHOW_PASSWORD = 5000;

export const MOBILE_MENU = [
  {
    id: 1,
    name: 'головна',
    page: 'home',
    path: '/',
  },
  {
    id: 2,
    name: 'про нас',
    page: 'about',
    path: '/about',
  },
  {
    id: 6,
    name: 'закрити',
    page: 'close',
    path: '/',
  },
];

export const MENU = [
  {
    id: 1,
    name: 'головна',
    page: 'home',
    path: '/',
  },
  {
    id: 2,
    name: 'про нас',
    page: 'about',
    path: '/about',
  },
];

export const MENU_PROFILE_AUTH = [
  {
    id: 1,
    name: 'login',
    page: 'login',
    path: '/auth/login',
    icon: <BsFillPersonCheckFill />,
  },
  {
    id: 2,
    name: 'registration',
    page: 'registration',
    path: '/auth/registration',
    icon: <BsFillPersonPlusFill />,
  },
];

export const MENU_PROFILE = [
  {
    id: 1,
    name: 'профіль',
    page: 'profile',
    path: '/profile',
    icon: BsFillPersonFill,
  },
  {
    id: 2,
    name: 'налаштування',
    page: 'settings',
    path: '/settings',
    icon: BsFillGearFill,
  },
  {
    id: 3,
    name: 'вихід',
    page: 'exit',
    path: '/exit',
    icon: BsBoxArrowRight,
  },
];
