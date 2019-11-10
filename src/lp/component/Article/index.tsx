import React, { FC } from 'react';

import './style.scss';

interface ComponentProps {
  backgroundColor: string;
  textColor: string
}
const Article: FC<ComponentProps> = props => {
  return (
    <div className="article"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColor
      }}
    >
      {props.children}
    </div>
  );
};

export default Article;