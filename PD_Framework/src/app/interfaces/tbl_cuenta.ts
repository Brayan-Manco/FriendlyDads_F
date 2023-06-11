export interface Cuenta{
    id_cuenta: number,
    usuario: string,
    correo: string,
    contrasena: string,
    fk_id_rol: number
}