import React, { FC } from 'react';

import { MultiSelect } from 'primereact/multiselect';

interface TagsInputProps {
  tagIds: number[],
  onChange: (newTagIds: number[]) => void
}
const TagsInput: FC<TagsInputProps> = props => {
  const citySelectItems = [
    { label: 'New York', value: 1 },
    { label: 'Rome', value: 2 },
    { label: 'London', value: 3 },
    { label: 'Istanbul', value: 4 },
    { label: 'Paris', value: 5 }
  ];

  return (
    <div>
      Tags
      <MultiSelect
        value={props.tagIds}
        options={citySelectItems}
        onChange={event => props.onChange(event.value)}
      />
    </div>
  );
};
export default TagsInput;