import React, { FC, useState } from 'react';

import './style.scss';

import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

interface RemoteUrlInputProps {
  onSubmit: (imagePaths: string[]) => void
}
const RemoteUrlInput: FC<RemoteUrlInputProps> = props => {
  const [imageUrlText, setImageUrlText] = useState('' as string);

  const handleChanged = (event: React.FormEvent) => {
    const target = event.target as HTMLTextAreaElement;
    setImageUrlText(target.value);
  }

  const handleSubmitted = () => {
    const imageUrls = imageUrlText.split(/\n/);
    props.onSubmit(imageUrls);
    setImageUrlText('');
  }

  return (
    <div>
      RemoteImageSetting
      <InputTextarea
        value={imageUrlText}
        autoResize={true}
        onChange={event => handleChanged(event)}
      />
      <Button label="Add Urls" onClick={handleSubmitted} />
    </div>
    
  );
};
export default RemoteUrlInput;