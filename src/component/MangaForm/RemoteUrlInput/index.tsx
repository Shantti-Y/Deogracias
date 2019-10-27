import React, { FC, useState } from 'react';

import './style.scss';

import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

interface RemoteUrlInputProps {
  onSubmit: (imagePaths: string[]) => void
}
interface RemoteSiteCrawlerSetting {
  siteUrl: string;
  imageSelector: string;
  nextLinkSelector: string;
  limitLinks: number
}
const RemoteUrlInput: FC<RemoteUrlInputProps> = props => {
  const [imageUrlInlineText, setImageUrlInlineText] = useState('' as string);
  const [remoteSiteCrawlerSetting, setRemoteSiteCrawlerSetting] = useState({
    siteUrl: '',
    imageSelector: '',
    nextLinkSelector: '',
    limitLinks: 0
  } as RemoteSiteCrawlerSetting);
  const [fetchingRemoteUrls, setFetchingRemoteUrls] = useState(false);

  const handleInlineTextChanged = (event: React.FormEvent) => {
    const target = event.target as HTMLTextAreaElement;
    setImageUrlInlineText(target.value);
  }

  const handleInlineSubmitted = () => {
    const imageUrls = imageUrlInlineText.split(/\n/);
    props.onSubmit(imageUrls);
    setImageUrlInlineText('');
  }

  const handleCrawlerSettingChanged = (name: string, event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setRemoteSiteCrawlerSetting({
      ...remoteSiteCrawlerSetting,
      [name]: target.value
    });
  }

  const handleCrawlingSettingSubmitted = async () => {
    if (!fetchingRemoteUrls){
      setFetchingRemoteUrls(true);
      const fetchResult = await fetch('http://localhost:3000/remote-site-images', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(remoteSiteCrawlerSetting)
      }).then((response) => response.json());
      setFetchingRemoteUrls(false);
      props.onSubmit(fetchResult.imageUrls);
    }
  }

  return (
    <div>
      RemoteImageSetting

      <div>
        <InputTextarea
          value={imageUrlInlineText}
          autoResize={true}
          onChange={event => handleInlineTextChanged(event)}
        />
        <Button label="Add Urls" onClick={handleInlineSubmitted} />
      </div>
      <div>
        <InputText
          value={remoteSiteCrawlerSetting.siteUrl}
          onChange={event => handleCrawlerSettingChanged('siteUrl', event)}
          placeholder="site url"
        />
        <InputText
          value={remoteSiteCrawlerSetting.imageSelector}
          onChange={event => handleCrawlerSettingChanged('imageSelector', event)}
          placeholder="image selector (e.g. body > a > image)"
        />
        <InputText
          value={remoteSiteCrawlerSetting.nextLinkSelector}
          onChange={event => handleCrawlerSettingChanged('nextLinkSelector', event)}
          placeholder="next link selector (e.g. body > a)"
        />
        <InputText
          value={remoteSiteCrawlerSetting.limitLinks}
          onChange={event => handleCrawlerSettingChanged('limitLinks', event)}
          placeholder="limit link number"
        />
        <Button label="Get Images From Website" onClick={handleCrawlingSettingSubmitted} />
      </div>
    </div>
    
  );
};
export default RemoteUrlInput;