import React, { FC } from 'react';
import { connect } from 'react-redux';

import ItemContainer from '@appComponent/HeaderItem/ItemContainer';

interface ComponentStateProps {
  manga: MangaEntity;
}
interface ComponentDispatchProps {}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const MangasId: FC<ComponentProps> = props => {
	const mangaName = props.manga ? props.manga.name : "";

	return (
		<ItemContainer title={mangaName}>
		</ItemContainer>
	);
};
const mapStateToProps = state => ({ manga: state.entity.manga.selectedManga });
export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, {})(MangasId);