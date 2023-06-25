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