import React, { FC } from 'react';

import { InputText } from 'primereact/inputtext';

interface NameInputProps {
  value: string,
  onInput: (value: string) => void
}
const NameInput: FC<NameInputProps> = props => {

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    props.onInput(target.value);
  }

  return (
    <div className="p-float-label"> 
      <InputText
        value={props.value}
        onChange={event => handleChange(event)}
      />
<label>Manga Name</label>
    </div>
  );
};
export default NameInput;