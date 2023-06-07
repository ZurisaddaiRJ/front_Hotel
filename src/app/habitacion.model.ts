export interface HabitacionResponse {
  content: Habitacion[] | Habitacion; // Puede ser un array o un objeto único
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

export interface Habitacion {
  numero: number;
  estado_hab: number;
  dispositivos: Dispositivo[];
}

export interface Dispositivo {
  ip: string;
  tipo: string;
  estadoDispositivo: number;
}
