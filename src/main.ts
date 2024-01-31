import { HttpClient, HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CustomTitleStrategy, APP_ROUTES } from './app/app-routing';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(APP_ROUTES),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoader,
          deps: [HttpClient]
        }
      }),
      BrowserAnimationsModule,
      HttpClientModule
    ),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy
    }
  ]
}).catch((err) => console.error(err));

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
