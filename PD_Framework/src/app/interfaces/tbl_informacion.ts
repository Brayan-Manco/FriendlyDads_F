export interface Info{
    id_info: number;
    nombre: string;
    descripcion: string;
    archivo: string;
    fk_id_clasificacion: string;
    fk_id_admin: string;
    createdAt: string;
    updatedAt: string;
    tbl_clasificacione: {
            clasificacion: string;
        };
    tbl_administradore: {
            nombres: string;
        };
}