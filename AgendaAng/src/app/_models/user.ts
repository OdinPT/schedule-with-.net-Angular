import { Foto } from './Foto';

export interface User {
    idContact: number;
    NomeContact: string;
    emailContact: string;
    numeroContact: string;
    idEmployee: string;
    dataAniversarioContact: string;
    photosUrl?: Foto[];
}
