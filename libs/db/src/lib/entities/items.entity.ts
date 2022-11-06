import { Collection, Entity, ManyToMany, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";
import { DropAries } from "./droparies.entity";
import { ItemTags } from "./item-tags.entity";
import { OPS } from "./op.entity";

@Entity()
export class Items {
    @PrimaryKey()
    id: string = v4()

    @Property({ unique: true })
    name: string

    @Property()
    rarity: number

    @Property()
    type: 'op'

    @ManyToMany(() => ItemTags, 'items', { owner: true })
    tags: Collection<ItemTags> = new Collection<ItemTags>(this)

    @ManyToMany(() => DropAries, 'items', { owner: true })
    droparies: Collection<DropAries> = new Collection<DropAries>(this)

    @OneToMany(() => OPS, op => op.item, { nullable: true })
    op?: Collection<OPS> = new Collection<OPS>(this)
}