import { Collection, Entity, ManyToMany, PrimaryKey, Property} from '@mikro-orm/core';
import { v4 } from 'uuid';

import { Items } from "./items.entity";

@Entity()
export class DropAries {
    @PrimaryKey()
    id: string = v4()

    @Property()
    name: string

    @ManyToMany(() => Items, item => item.droparies)
    items: Collection<Items> = new Collection<Items>(this);
}
