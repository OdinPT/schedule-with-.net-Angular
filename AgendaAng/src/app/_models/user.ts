import { Foto } from './Foto';

export interface User {
    idContact: number;
    nomeContact: string;
    emailContact: string;
    numeroContact: string;
    idEmployee: string;
    dataAniversarioContact: string;
    photosUrl?: Foto[];
}
