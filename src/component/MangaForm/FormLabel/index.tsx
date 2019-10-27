import React, { FC } from 'react';

import './style.scss';

interface ComponentProps {
  name: string
}
const FormLabel: FC<ComponentProps> = props => {
  return <label className="form-label">{props.name}</label>;
};
export default FormLabel;