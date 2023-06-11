
export interface DispositivoResponse {
    content: Dispositivo[] | Dispositivo; // Puede ser un array o un objeto único
    pageable: any;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: any;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

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