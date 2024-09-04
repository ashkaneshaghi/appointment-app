import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
    selector: 'app-appointment-items',
    templateUrl: './appointment-items.component.html',
    styleUrl: './appointment-items.component.css'
})
export class AppointmentItemsComponent {

    @Input() appointments: Appointment[] = [];
    @Output() deleteItem = new EventEmitter<number>();

    deleteAppointment(index: number) {
        this.deleteItem.emit(index);
    }
}
