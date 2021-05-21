import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { v4 as uuid} from 'uuid'
import { Users } from "./Users";



@Entity()
export class Adresses {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    endereco: string;

    @Column()
    numero: number;

    @Column()
    complemento: string;

    @Column()
    cep: number;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @ManyToOne(()=> Users, user => user.adresses, { eager: true})
    @JoinColumn({name: 'userId'})
    users: Users;

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