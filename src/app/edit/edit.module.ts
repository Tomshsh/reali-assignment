import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { RouterModule, Routes } from '@angular/router';
import { EditorResolver } from '../editor.resolver';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'

const routes: Routes = [
  {
    path: "",
    component: EditFormComponent,
    resolve: {customer: EditorResolver},
    children: [
      { path: ":id", component: EditFormComponent }
    ]
  }
]

@NgModule({
  declarations: [
    EditFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class EditModule { }
