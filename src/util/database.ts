import Dexie from 'dexie';

export enum DeograciasTableName {
  Mangas = "mangas",
  Tags = "tags"
}

export type DeograciasTableEntity = MangaEntity & TagEntity;

class DeograciasDB extends Dexie {
  public mangas: Dexie.Table<MangaEntity, number>;
  public tags: Dexie.Table<TagEntity, number>;

  constructor() {
  	super('Deogracias DB');

  	// テーブルとインデックスを定義する
  	this.version(1).stores({
  		mangas: '++id, name, pages, tagIds',
  		tags: '++id, name'
  	});
  	this.mangas = this.table("mangas");
  	this.tags = this.table("tags");
  }
	
  async selectAllEntities(tableName: DeograciasTableName): Promise<any[]> {
  	return await this[tableName].toArray();
  }

  insertEntity(tableName: DeograciasTableName, entity: DeograciasTableEntity): void {
  	this[tableName].add(entity);
  }
}

export const deograciasDB = new DeograciasDB;