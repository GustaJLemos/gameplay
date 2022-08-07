import { Server } from "./Server";

export type AppointmentProps = {
    id: string;
    server: Server;
    category: string;
    date: string;
    description: string;
};