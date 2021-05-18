import { Doctor } from "../list-doctor/doctor-model";
import { Patient } from "../profile/user-model";

export interface Appointment {
    id?: number;
    date?: Date;
    hour?: number;
    statusId?: number;
    statusName?: string;
    notify?: boolean;
    feedback?: string;
    patientId?: Patient["id"];
    patientName?: Patient["name"];
    doctorId?: Doctor["id"];
    doctorName?: Doctor["name"];
    doctor?: Doctor;
}