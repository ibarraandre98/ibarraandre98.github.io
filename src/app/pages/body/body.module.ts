import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [BodyComponent],
  imports: [CommonModule, BodyRoutingModule, FontAwesomeModule, SharedModule],
})
export class BodyModule {}
