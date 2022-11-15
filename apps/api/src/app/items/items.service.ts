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

  async getItems(type: string) {
    let where = {}
    if (type) {
      where = { type: { $in: [type] } }
    }
    console.log(where)
    return this.itemsRepository.find(where, {
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
