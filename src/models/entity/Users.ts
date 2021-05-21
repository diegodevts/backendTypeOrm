import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeUpdate, BeforeInsert, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid"
import * as bcrypt from 'bcryptjs'
import { Adresses } from "./Adresses";


export enum tipo_etnia {
    branca = 'branca',
    amarela = 'amarela',
    parda = 'parda',
    preta = 'preta',
    indigena = 'indígena',

}

@Entity()
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    telefone: number;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    idade: number;

    @Column()
    peso: number;

    @Column({ default: 'branca' })
    etnia: tipo_etnia;

    @OneToMany(()=> Adresses, adress => adress.users)
    adresses: Adresses[];

    @BeforeInsert()
    @BeforeUpdate()
    hashSenha(){
        const hash = bcrypt.hashSync(this.senha, 8)
        this.senha = hash
    }

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}