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
    <div>
      Manga Name
      <InputText
        value={props.value}
        placeholder="manga name"
        onChange={event => handleChange(event)}
      />
    </div>
  );
};
export default NameInput;