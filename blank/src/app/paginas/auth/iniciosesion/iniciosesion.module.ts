import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciosesionPageRoutingModule } from './iniciosesion-routing.module';

import { IniciosesionPage } from './iniciosesion.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciosesionPageRoutingModule,
    SharedModule
  ],
  declarations: [IniciosesionPage]
})
export class IniciosesionPageModule {}
