import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "users",
})
export default class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public username: string;

    @Column({
        select: false,
    })
    public password: string;
}

