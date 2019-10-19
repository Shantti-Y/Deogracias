/*
 * jsonファイルをsave
 * jsonファイルをread
 */

import Dexie from 'dexie';

const db = new Dexie('DeograciasDB');

export enum DeograciasTable {
  Mangas = "mangas",
  tags = "tags"
}

export class DeograciasDB extends Dexie {

  mangas: Dexie.Table<MangaEntity, number>;
  tags: Dexie.Table<TagEntity, number>;

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

  insertEntity(tableName: DeograciasTable, entity: MangaEntity & TagEntity) {
  	this[tableName].add(entity);
  }
}