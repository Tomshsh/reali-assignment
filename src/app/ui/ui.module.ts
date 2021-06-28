import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalCardComponent } from './vertical-card/vertical-card.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [VerticalCardComponent,ContainerComponent],
  imports: [
    CommonModule,

  ],
  exports:[VerticalCardComponent, ContainerComponent]
})
export class UiModule { }
