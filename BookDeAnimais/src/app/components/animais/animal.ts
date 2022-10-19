export interface Animal {
    id: number;
    dataDoPost: Date;
    url: string;
    descricao: string;
    permitirComentarios: boolean;
    likes: number;
    comentarios: number;
    usuarioId: number;
}

export type Animais = Array<Animal>;
