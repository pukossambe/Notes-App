import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Clear Local Storage
localStorage.clear();
console.log('Local Storage cleared.');


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
