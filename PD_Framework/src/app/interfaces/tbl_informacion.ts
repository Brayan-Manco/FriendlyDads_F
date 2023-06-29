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
    doc: File,
    fk_id_clasificacion: number,
    fk_id_admin: number;
    nombre: string,
    descripcion: string,
}