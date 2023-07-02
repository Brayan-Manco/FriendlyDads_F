export interface Admin{
    id_admin: number,
    ruta_imagen: string,
    nombres: string,
    apellidos: string,
    fk_id_tipo_doc: number,
    numero_i: string,
    edad: number,
    fk_id_cuenta: number
}

export interface AdminCraate {
    id_admin: number,
    nombres: string,
}