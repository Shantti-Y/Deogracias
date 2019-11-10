import React, { FC} from 'react';

import './style.scss';

interface ComponentProps {
  name: string
}
const Jumbotron: FC<ComponentProps> = props => {

  return (
    <div className="jumbotron">
      <h1>{props.name}</h1>
      {props.children}
    </div>
  );
};

export default Jumbotron;