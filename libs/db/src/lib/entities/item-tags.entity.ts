import { Collection, Entity, ManyToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Items } from "./items.entity";

@Entity()
export class ItemTags {
    @PrimaryKey()
    id: string

    @Property()
    name: string

    @ManyToMany(() => Items, item => item.tags)
    items: Collection<Items> = new Collection<Items>(Items)
}