import images from './images';
import icons from './icons';
import {COLORS} from '.';
const cardData = [
  {
    id: 1,
    type: '',
    color: COLORS.blue2,
    incomeInMonth: '23.763,90',
    percentIcome: '24,9',
    numberCard: '●  ●  ●  ●',
    balance: '264.034,00',
  },
  {
    id: 2,
    type: '',
    color: COLORS.blue,
    incomeInMonth: '23.763,90',
    percentIcome: '24,9',
    numberCard: '●  ●  ●  ●',
    balance: '264.034,00',
  },
  {
    id: 3,
    type: '',
    color: COLORS.lightBlue,
    incomeInMonth: '23.763,90',
    percentIcome: '24,9',
    numberCard: '●  ●  ●  ●',
    balance: '264.034,00',
  },
  {
    id: 4,
    type: '',
    color: COLORS.blue2,
    incomeInMonth: '23.763,90',
    percentIcome: '24,9',
    numberCard: '●  ●  ●  ●',
    balance: '264.034,00',
  },
];

const friendList = [
  {id: 1, name: 'Expenses', color: COLORS.blue2, image: images.UserProfile1},
  {id: 2, name: 'Incom', color: COLORS.blue, image: images.UserProfile2},
  {
    id: 3,
    name: 'Transfer',
    color: COLORS.lightBlue,
    image: images.UserProfile3,
  },
  {id: 4, name: 'Actions', color: COLORS.lightLime, image: images.UserProfile4},
  {
    id: 5,
    name: 'Actions',
    color: COLORS.lightGreen,
    image: images.UserProfile5,
  },
  {id: 6, name: 'Actions', color: COLORS.gray, image: images.UserProfile6},
  {id: 7, name: 'Actions', color: COLORS.darkGreen, image: images.UserProfile7},
  {id: 8, name: 'Actions', color: COLORS.darkLime, image: images.UserProfile8},
  {
    id: 9,
    name: 'Actions',
    color: COLORS.lightGray2,
    image: images.UserProfile9,
  },
  {
    id: 10,
    name: 'Actions',
    color: COLORS.lightGreen1,
    image: images.UserProfile10,
  },
];

const transactionsList = [
  {
    id: 1,
    name: 'Paypal europe',
    time: '20 hours ago',
    image: icons.paypal,
    value: '485,00',
    type: 'income',
  },
  {
    id: 2,
    name: 'Incom',
    image: images.UserProfile2,
    time: '20 hours ago',
    value: '485,00',
    type: 'outcome',
  },
  {
    id: 3,
    name: 'Transfer',
    time: '20 hours ago',
    value: '485,00',
    type: 'income',
    image: images.UserProfile3,
  },
  {
    id: 4,
    name: 'Actions',
    time: '20 hours ago',
    value: '485,00',
    type: 'outcome',
    image: images.UserProfile4,
  },
  {
    id: 5,
    name: 'Actions',
    time: '20 hours ago',
    value: '485,00',
    type: 'income',
    image: images.UserProfile5,
  },
  {
    id: 6,
    name: 'Actions',
    time: '20 hours ago',
    value: '485,00',
    type: 'income',
    image: images.UserProfile6,
  },
  {
    id: 7,
    name: 'Actions',
    time: '20 hours ago',
    value: '485,00',
    type: 'income',
    image: images.UserProfile7,
  },
  {
    id: 8,
    name: 'Actions',
    time: '20 hours ago',
    value: '485,00',
    type: 'income',
    image: images.UserProfile8,
  },
  {
    id: 9,
    name: 'Actions',
    time: '20 hours ago',
    value: '485,00',
    type: 'income',
    image: images.UserProfile9,
  },
  {
    id: 10,
    name: 'Actions',
    time: '20 hours ago',
    value: '485,00',
    type: 'income',
    image: images.UserProfile10,
  },
];
export default {cardData, transactionsList, friendList};
