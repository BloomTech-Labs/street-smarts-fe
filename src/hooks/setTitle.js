import { BASE_TITLE } from '../constants';

export default function setTitle(title) {
  if (title) {
    document.title = `${title} - ${BASE_TITLE}`;
  } else {
    document.title = `${BASE_TITLE}`;
  }
};