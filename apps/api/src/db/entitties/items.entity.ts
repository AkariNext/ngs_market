import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('items')
export class Items {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text')
    name: string

    @Column('number')
    rarity
}