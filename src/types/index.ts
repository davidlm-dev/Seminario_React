export interface User {
    id?: string; // Optional if not returned by the API
    name: string;
    age: number;
    email?: string;
    password?: string;
    phone?: number;
}


/*
// EXEMPLE SI LA API ENS RETORNES ATRIBUTS AMB DIF NOM DEL NOSTRE
export type UsersResponseFromApi = Array<{
    nombre: string;
    edad: number;
    correo?: string;
}>;
*/
