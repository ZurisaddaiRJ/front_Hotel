
export interface Dispositivo {
    ip: string;
    tipo: string;
    estadoDispositivo: number;
}

export interface Habitacion {
    numero: number;
    estado_hab: number;
    dispositivos: Dispositivo[];
}