import * as i18next from 'i18next';
import * as LngDetector from 'i18next-browser-languagedetector';

const en = require('./en.json');
const uk = require('./uk.json');

// TODO: load application localization from backend with i18next-xhr-backend
// TODO: async i18next localization
export const i18n = i18next
  .use(LngDetector)
  .init({ resources: { en, uk }, whitelist: ['en', 'uk'] });
