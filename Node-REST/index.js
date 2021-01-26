import "dotenv/config";
import { DateTime } from "luxon"; // Parsing and formatting for common and custom formats
import { Server as RestServer } from './rest';

(async () => {

  const sessionCache = new Map();
  sessionCache.set('createdAt', DateTime.local());

  await RestServer(sessionCache);
  
  console.info('> Server is set up');

})();


