import { Appointment } from "../list-appointment/appointment-model";

export interface Patient {
    id?: number,
    email?: string,
    name?: string,
    address?: string,
    dateOfBirth?: Date,
    roleId?: number,
    roleName?: string,
    doctorAppointments?: Appointment[];
}