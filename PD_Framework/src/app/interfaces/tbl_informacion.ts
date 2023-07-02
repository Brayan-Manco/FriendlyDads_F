export interface Info{
    id_info: number;
    nombre: string;
    descripcion: string;
    archivo: string;
    fk_id_clasificacion: string;
    fk_id_admin: string;
    createdAt: Date;
    updatedAt: Date;
    tbl_clasificacione: {
            clasificacion: string;
        };
    tbl_administradore: {
            nombres: string;
        };
}

export interface InfoCreate{
    id_info?: number,
    doc: File,
    fk_id_clasificacion: number,
    fk_id_admin: number;
    nombre: string,
    descripcion: string,
}

export interface InfoUpdate{

    nombre: string,
    descripcion: string,
    tbl_clasificacione: {
        id_clasificacion: number,
        descripcion: string
    },
    tbl_administradore: {
        id_admin: string,
        nombres: string
    }
}