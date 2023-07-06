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

export interface CuentaForm {
    id_cuenta: number,
    correo: string
}

export interface Logueo {
    id_cuenta: number,
    correo: string,
    contrasena: string,
    rol: number
}

export interface LoginResponse {
    token: string;
    rol: string;
}