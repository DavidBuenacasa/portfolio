import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponentComponent } from './inicio-component/inicio-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';

const appRoot:Routes=[
  {path:"", component:InicioComponentComponent},
  {path:"proyectos", component:ProyectosComponentComponent},
  {path:"contacto", component:ContactoComponentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponentComponent,
    ProyectosComponentComponent,
    ContactoComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoot),

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
