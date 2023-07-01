export interface Bebe{
    id_bebe: number,
    nombre_completo: string,
    fk_id_tipo_doc: number,
    numero_i: string,
    edad: string,
    fk_id_usuario: number
}

export interface baby{
    nombre_completo: string,
    fk_id_tipo_doc: number,
    numero_i: string,
    edad: string,
    fk_id_usuario: number
}

export interface getBebe{
    id_bebe: number,
    nombre_completo: string,
    fk_id_tipo_doc: 1,
    numero_i: string,
    edad:number,
    fk_id_usuario: 3,
    createdAt: Date,
    updatedAt: Date,
    tbl_usuario: {
        id_usuario: number,
        nombres: string
    },
    tbl_tipo_doc: {
        id_tipo_doc: number,
        tipo_doc: string
    }
}