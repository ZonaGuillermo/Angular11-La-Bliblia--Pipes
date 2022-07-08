import { NgModule, LOCALE_ID } from '@angular/core'; // Añadimos LOCALE_ID para configurar localmente la aplicación. Añadirlo al mñodulo como provider.
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import localeEs from '@angular/common/locales/es'; // Variable que contiene diferentes formatos de fecha, modena, etc en Español
import { registerLocaleData } from '@angular/common'; // Método para aplicar los cambios de la variable localeES

import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ReversePipe } from './pipes/reverse.pipe';

registerLocaleData(localeEs);  // Hay que llamar al método antes de que carge el módulo

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
