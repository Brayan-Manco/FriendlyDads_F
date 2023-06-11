export interface Usuario{
    id_usuario: number,
    fk_id_paren: number,
    fk_id_estado: number,
    ruta_imagen: string,
    nombres: string,
    apellidos: string,
    fk_id_tipo_doc: number,
    numero_i: string,
    edad: number,
    fk_id_cuenta: number
}