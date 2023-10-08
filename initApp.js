const {initLang} = require('./src/localization');

const initApp = async () => {
  await new Promise.all([initLang()]);
};

export default initApp;
