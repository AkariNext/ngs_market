import { Collection, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";
import { Items } from "./items.entity";

@Entity()
export class OPS {
    @PrimaryKey()
    id: string = v4()

    @Property({ unique: true })
    name: string

    @ManyToMany(() => OPEffects)
    effects: Collection<OPEffects> = new Collection<OPEffects>(this)

    @ManyToOne(() => Items)
    item: Items
}

@Entity()
export class OPEffects {
    @PrimaryKey()
    id: string = v4()

    @Property({ unique: true })
    name: string

    @Property()
    percent: boolean

    @Property()
    effect: number | string

    @ManyToMany(() => OPS, op => op.effects)
    ops: Collection<OPS> = new Collection<OPS>(this)
}