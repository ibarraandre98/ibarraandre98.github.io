import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared.module';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [BodyComponent, CarouselComponent],
  imports: [
    CommonModule,
    BodyRoutingModule,
    FontAwesomeModule,
    SharedModule,
    SweetAlert2Module.forRoot(),
    NgxExtendedPdfViewerModule,
  ],
  providers: [],
})
export class BodyModule {}
