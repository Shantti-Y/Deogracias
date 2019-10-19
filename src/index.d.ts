interface MangaEntity {
  id?: number;
  name: string,
  pages: MangaPageEntity[];
  tagIds: number[]
}

interface MangaPageEntity {
  id?: number;
  url: string
}

interface TagEntity {
  id?: number;
  name: string
}