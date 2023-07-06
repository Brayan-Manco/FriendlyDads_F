export interface Usuario{
    fk_id_paren: number,
    fk_id_estado: number,
    // ruta_imagen: string,
    nombres: string,
    apellidos: string,
    fk_id_tipo_doc: number,
    numero_i: string,
    edad: number,
    fk_id_cuenta: number

}

export interface UsuarioUpdate{
    fk_id_paren: number,
    fk_id_estado: number,
    // ruta_imagen: string,
    nombres: string,
    apellidos: string,
    fk_id_tipo_doc: number,
    numero_i: string,
    edad: number,
}

export interface UsuarioFind {
    id_usuario?: number,
    // ruta_imagen: string,
    nombres: string,
    apellidos: string,
    numero_i: string,
    edad: number,
    fk_id_cuenta: number,
    tbl_parentesco: {
        id_paren: number,
        parentesco: string
    },
    tbl_estado: {
        id_estado: number,
        estado: string
    },
    tbl_tipo_doc: {
        id_tipo_doc: number,
        tipo_doc: string
    }
    tbl_cuentum: {
        id_cuenta: number,
        correo: string,
        usuario: string
    }
}

export interface estadoCuenta{
    vez: number
}