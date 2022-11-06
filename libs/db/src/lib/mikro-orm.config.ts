import { Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { config } from "@ngs-market/config";
import { DropAries } from "./entities/droparies.entity";
import { ItemTags } from "./entities/item-tags.entity";
import { Items } from "./entities/items.entity";
import { OPEffects, OPS } from "./entities/op.entity";
import { Users } from "./entities/user.entity";

const options: Options<PostgreSqlDriver> = {
  driver: PostgreSqlDriver,
  entities: [DropAries, ItemTags, Items, OPEffects, OPS, Users],
  entitiesTs: ["./libs/db/src/lib/entities/*.ts"],
  clientUrl: `postgresql://${config.db.user}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.db}`,
};

export default options;
