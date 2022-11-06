import { Migration } from '@mikro-orm/migrations';

export class Migration20221106104956 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "drop_aries" ("id" varchar(255) not null, "name" varchar(255) not null, constraint "drop_aries_pkey" primary key ("id"));');

    this.addSql('create table "items" ("id" varchar(255) not null, "name" varchar(255) not null, "rarity" int not null, "type" varchar(255) not null, constraint "items_pkey" primary key ("id"));');
    this.addSql('alter table "items" add constraint "items_name_unique" unique ("name");');

    this.addSql('create table "items_droparies" ("items_id" varchar(255) not null, "drop_aries_id" varchar(255) not null, constraint "items_droparies_pkey" primary key ("items_id", "drop_aries_id"));');

    this.addSql('create table "item_tags" ("id" varchar(255) not null, "name" varchar(255) not null, constraint "item_tags_pkey" primary key ("id"));');

    this.addSql('create table "items_tags" ("items_id" varchar(255) not null, "item_tags_id" varchar(255) not null, constraint "items_tags_pkey" primary key ("items_id", "item_tags_id"));');

    this.addSql('create table "opeffects" ("id" varchar(255) not null, "name" varchar(255) not null, "percent" boolean not null, "effect" varchar(255) not null, constraint "opeffects_pkey" primary key ("id"));');
    this.addSql('alter table "opeffects" add constraint "opeffects_name_unique" unique ("name");');

    this.addSql('create table "ops" ("id" varchar(255) not null, "name" varchar(255) not null, "item_id" varchar(255) not null, constraint "ops_pkey" primary key ("id"));');
    this.addSql('alter table "ops" add constraint "ops_name_unique" unique ("name");');

    this.addSql('create table "ops_effects" ("ops_id" varchar(255) not null, "opeffects_id" varchar(255) not null, constraint "ops_effects_pkey" primary key ("ops_id", "opeffects_id"));');

    this.addSql('create table "users" ("id" varchar(255) not null, "username" varchar(255) not null, "password" varchar(255) not null, "avatar_url" varchar(255) null, constraint "users_pkey" primary key ("id"));');
    this.addSql('alter table "users" add constraint "users_username_unique" unique ("username");');

    this.addSql('alter table "items_droparies" add constraint "items_droparies_items_id_foreign" foreign key ("items_id") references "items" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "items_droparies" add constraint "items_droparies_drop_aries_id_foreign" foreign key ("drop_aries_id") references "drop_aries" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "items_tags" add constraint "items_tags_items_id_foreign" foreign key ("items_id") references "items" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "items_tags" add constraint "items_tags_item_tags_id_foreign" foreign key ("item_tags_id") references "item_tags" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "ops" add constraint "ops_item_id_foreign" foreign key ("item_id") references "items" ("id") on update cascade;');

    this.addSql('alter table "ops_effects" add constraint "ops_effects_ops_id_foreign" foreign key ("ops_id") references "ops" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "ops_effects" add constraint "ops_effects_opeffects_id_foreign" foreign key ("opeffects_id") references "opeffects" ("id") on update cascade on delete cascade;');
  }

}
