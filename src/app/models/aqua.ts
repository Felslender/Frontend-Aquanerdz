export interface CadUser {
  nome: string;
  email: string;
  senha: string;
  // confSenha: string
  cod: string;
  telefone: string;
}

export interface LogUser {
  email: string;
  senha: string;
}

export interface CadSystem {
  id_peixe: number;
  nome_sistema: string;
  qto_peixe: number;
  tamanho_tanque: number;
}

export interface Systems {
  sistemas: any[]
  id_sistema: number
  id_peixe: number
  nome_sistema: string
  qto_peixe: number
  tamanho_tanque: number
}


export interface System {
  id_sistema: number
  id_peixe: number
  nome_sistema: string
  qto_peixe: number
  tamanho_tanque: number
}
