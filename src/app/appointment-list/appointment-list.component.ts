import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
    selector: 'app-appointment-list',
    templateUrl: './appointment-list.component.html',
    styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

    appointmentTitle: string = '';
    appointmentDate: Date = new Date();

    appointments: Appointment[] = [];

    ngOnInit(): void {
        let appointments = localStorage.getItem('appointments');
        if (appointments) {
            this.appointments = JSON.parse(appointments);
        }

    }

    addAppointment() {
        if (this.appointmentTitle.trim().length && this.appointmentDate) {
            let newAppointment: Appointment = {
                id: Date.now().toString(),
                title: this.appointmentTitle,
                date: this.appointmentDate
            };
            this.appointments.push(newAppointment);
            this.appointmentTitle = '';
            this.appointmentDate = new Date();
        }

        localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }

    deleteAppointment(index: number): void {
        this.appointments.splice(index, 1);
        localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
}
