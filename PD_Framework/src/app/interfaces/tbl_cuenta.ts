export interface Cuenta{
    usuario: string,
    correo: string,
    contrasena: string,
    fk_id_rol: number,
}

export interface Login {
    correo: string,
    contrasena: string,
}

export interface LoginResponse {
    token: string;
    rol: string;
}