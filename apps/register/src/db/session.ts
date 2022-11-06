import { MikroORM } from "@mikro-orm/core";
import { mikroConfig } from "@ngs-market/db";

export class ORM {
    private static _instance: MikroORM
    private constructor() {}

    public static async instance(): Promise<MikroORM> {
        if (!this._instance) {
            this._instance = await MikroORM.init(mikroConfig)
            return this._instance
        }
        return this._instance
    }
}

