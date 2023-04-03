import vk from '../../../icons/vk.svg';
import instagram from '../../../icons/instagram.svg';
import facebook from '../../../icons/facebooksvg.svg';
import youtube from '../../../icons/yotube.svg';
import whatsapp from '../../../icons/whatsapp.svg';
import telegram from '../../../icons/telegram.svg';
import viber from '../../../icons/viber.svg';

const iconsFooter = [
  {id: 1, classNameOption: 'footer', name: 'vk', src: `${vk}`, path: '*'},
  {id: 2, classNameOption: 'footer', name: 'instagram', src: `${instagram}`, path: '*'},
  {id: 3, classNameOption: 'footer', name: 'facebook', src: `${facebook}`, path: '*'},
  {id: 4, classNameOption: 'footer', name: 'youtube', src: `${youtube}`, path: '*'},
];

const iconsHeader = [
  {id: 1, classNameOption: 'header', name: 'whatsapp', src: `${whatsapp}`, path: '*'},
  {id: 2, classNameOption: 'header', name: 'telegram', src: `${telegram}`, path: '*'},
  {id: 3, classNameOption: 'header', name: 'viber', src: `${viber}`, path: '*'},
];

export {iconsFooter, iconsHeader};