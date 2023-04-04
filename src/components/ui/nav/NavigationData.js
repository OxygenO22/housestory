import triangle from '../../../icons/triangle.svg';

const navItems = [
  {
    id: 1, 
    name: 'Каталог домов', 
    src: `${triangle}`, 
    alt: 'triangle', 
    submenu: [
      {
        id: 1,
        paragraph: 'Каталог домов 1',
      },
      {
        id: 2,
        paragraph: 'Каталог домов 2',
      },
      {
        id: 3,
        paragraph: 'Каталог домов 3',
      },
    ]
  },  
  {
    id: 2, 
    name: 'Услуги', 
    src: `${triangle}`, 
    alt: 'triangle', 
    submenu: [
      {
        id: 1,
        paragraph: 'Услуга 1',
      },
      {
        id: 2,
        paragraph: 'Услуга 2',
      },
      {
        id: 3,
        paragraph: 'Услуга 3',
      },
    ]
  },
  {
    id: 3,
     name: 'О нас', 
     src: `${triangle}`,
      alt: 'triangle',
      submenu: [
      {
        id: 1,
        paragraph: 'О нас 1',
      },
      {
        id: 2,
        paragraph: 'О нас 2',
      },
      {
        id: 3,
        paragraph: 'О нас 3',
      },
    ]
  },
  {
    id: 4, 
    name: 'Контакты', 
    src: ``, 
    alt: '',
    submenu: []
  },
  {
    id: 5, 
    name: 'Блог', 
    src: `${triangle}`, 
    alt: 'triangle',
    submenu: [
      {
        id: 1,
        paragraph: 'Блог 1',
      },
      {
        id: 2,
        paragraph: 'Блог 2',
      },
      {
        id: 3,
        paragraph: 'Блог 3',
      },
    ]
  },
];

export {navItems};