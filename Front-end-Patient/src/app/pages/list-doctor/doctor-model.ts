import { Appointment } from "../list-appointment/appointment-model";

export interface Doctor {
    email?: string;
    id?: number;
    name?: string;
    roleId?: number;
    roleName?: string;
    address?: string;
    dateOfBirth?: Date;
    doctorAppointment?: Appointment[];
}