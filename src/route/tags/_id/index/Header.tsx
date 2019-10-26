import React, { FC } from 'react';
import { connect } from 'react-redux';

import ItemContainer from '@component/HeaderItem/ItemContainer';

interface ComponentStateProps {
  tag: TagEntity;
}
interface ComponentDispatchProps {}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const Header: FC<ComponentProps> = props => {

  const tagName = () => {
    return props.tag ? props.tag.name : ""
  }

  return (
    <ItemContainer title={`Tagged Book List: ${tagName()}`}>

    </ItemContainer>
  )
}

const mapStateToProps = state => ({
  tag: state.entity.tag.selectedTag
});

export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, {})(Header);