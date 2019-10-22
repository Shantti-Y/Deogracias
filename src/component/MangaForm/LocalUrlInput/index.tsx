import React, { FC } from 'react';

interface LocalUrlInputProps {
  onFileSelected: (imageUrls: string[]) => void
}
const LocalUrlInput: FC<LocalUrlInputProps> = props => {
  const handleFileSelected = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const imageUrls = target.value.split(';');
    props.onFileSelected(imageUrls);
  };
  
  return (
    <div>
      <label>LocalImageSetting</label>
      <input id="fileInput"
        type="file"
        accept="image/*"
        multiple
        onChange={event => handleFileSelected(event)}
      />
    </div>
  );
};
export default LocalUrlInput;