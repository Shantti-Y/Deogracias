import React, { FC } from 'react';

import ItemContainer from '@component/HeaderItem/ItemContainer';

import './style.scss';

interface NewMangaProps { }
const NewManga: FC<NewMangaProps> = props => {

  return (
    <ItemContainer title="New Manga">

    </ItemContainer>
  )
}
export default NewManga;