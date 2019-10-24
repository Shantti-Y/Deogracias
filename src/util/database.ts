import Dexie from 'dexie';

export enum TableName {
  Mangas = "mangas",
  Tags = "tags"
}

export type TableEntity = MangaEntity & TagEntity;

class AppDataBase extends Dexie {
  public mangas: Dexie.Table<MangaEntity, number>;
  public tags: Dexie.Table<TagEntity, number>;

  constructor() {
  	super('Deogracias DB');

  	// テーブルとインデックスを定義する
  	this.version(1).stores({
  		mangas: '++id, name, pages, *tagIds',
  		tags: '++id, name'
  	});
  	this.mangas = this.table("mangas");
  	this.tags = this.table("tags");
  }
	
  async selectAllEntities(tableName: TableName): Promise<any[]> {
  	return await this[tableName].toArray();
  }

  insertEntity(tableName: TableName, entity: TableEntity): void {
  	this[tableName].add(entity);
  }
}

export const appDB = new AppDataBase;