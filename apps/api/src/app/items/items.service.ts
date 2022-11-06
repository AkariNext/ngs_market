import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Items } from '@ngs-market/db';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Items)
        private itemsRepository: EntityRepository<Items>
    ) { }

    async getItems() {
        return this.itemsRepository.findAll({
            populate: [
                'op.id',
                'op.name',
                'op.effects.id',
                'op.effects.name',
                'op.effects.percent',
                'op.effects.effect',
                'droparies.id',
                'droparies.name',
            ]
        })
    }
}
