import { EntityRepository, MikroORM } from "@mikro-orm/core";
import { DropAries, Items } from "@ngs-market/db";
import { Logger } from "@ngs-market/log";
import { OPEffects, OPS } from "libs/db/src/lib/entities/op.entity";
import ops from "../assets/ops.json";
import { ORM } from "../db/session";
import { BaseRegister } from "../types/register";

interface IEffect {
    name: string
    percent: boolean
    effect: string | number
}

export class RegisterOP implements BaseRegister {
    itemRepository: EntityRepository<Items>
    dropariaRepository: EntityRepository<DropAries>
    opRepository: EntityRepository<OPS>
    opEffectRepository: EntityRepository<OPEffects>
    orm: MikroORM
    constructor() { }

    async registerEffect(op: OPS, effects: IEffect[]) {
        for (const effect of effects) {
            console.log(effect)
            const hitEffect = await this.opEffectRepository.findOne({
                name: effect.name
            })

            let opEffect: OPEffects
            if (hitEffect) {
                opEffect = hitEffect
            } else {
                opEffect = new OPEffects()
                opEffect.name = effect.name
                opEffect.effect = effect.effect
                opEffect.percent = effect.percent
            }
            op.effects.add(opEffect)
        }
    }

    async registerOP(item: Items, name: string, effects: IEffect[]) {
        let op: OPS
        const hitOP = await this.opRepository.findOne({
            name
        })
        if (hitOP) {
            op = hitOP
        } else {

            op = new OPS();
            op.name = name
            await this.registerEffect(op, effects)
        }
        item.op.add(op)
    }

    async registerDropAria(item: Items, aries: string[]) {
        for (const aria of aries) {
            let addAria: DropAries
            const hitAria = await this.dropariaRepository.findOne({
                name: aria
            })
            if (hitAria) {
                addAria = hitAria
            } else {
                addAria = new DropAries();
                addAria.name = aria
            }
            item.droparies.add(addAria)
        }
        return item
    }

    async run() {
        for (const op of ops) {
            const logger = Logger.getInstance
            const getItem = await this.itemRepository.find({ name: op.name });
            if (getItem.length > 0) {
                logger.info(`${op.name} is already exists. skip`)
                continue
            }
            const newItem = new Items()
            newItem.name = op.name
            newItem.rarity = 1
            newItem.type = 'op'
            await this.registerDropAria(newItem, op.aries)
            await this.registerOP(newItem, op.name, op.effect)
            console.log(newItem)
            await this.orm.em.fork().persistAndFlush(newItem)
            logger.info(`successed register ${op.name}.`)
        }
    }

    async setup() {
        this.orm = await ORM.instance()
        this.itemRepository = this.orm.em.fork().getRepository(Items)
        this.dropariaRepository = this.orm.em.fork().getRepository(DropAries)
        this.opRepository = this.orm.em.fork().getRepository(OPS)
        this.opEffectRepository = this.orm.em.fork().getRepository(OPEffects)
    }
}
