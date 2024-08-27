import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    appName: string = 'Appointment App';
    description: string = 'This app helps you to manage your Appointments';
}
