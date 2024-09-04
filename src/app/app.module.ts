import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { FormsModule } from '@angular/forms';
import { AppointmentItemsComponent } from './appointment-items/appointment-items.component';

@NgModule({
    declarations: [
        AppComponent,
        AppointmentListComponent,
        AppointmentItemsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
