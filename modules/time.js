import { DateTime } from './luxon.js';
import utils from './utils.js';

export default () => {
  const now = DateTime.now();

  utils.qs('header > p').textContent = `${now.toLocaleString(
    DateTime.DATETIME_MED,
  )}`;
};
