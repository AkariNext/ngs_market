import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";

@Entity()
export class Users {
    @PrimaryKey()
    id: string = v4()

    @Property({unique: true})
    username: string

    @Property()
    password: string

    @Property({ nullable: true })
    avatarUrl?: string
}
