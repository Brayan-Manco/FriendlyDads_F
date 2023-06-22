export interface Cuenta{
    usuario: string | null,
    correo: string,
    contrasena: string,
    fk_id_rol: number | null
}