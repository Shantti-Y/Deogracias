import React, { FC } from 'react';

import { Button } from 'primereact/button';

import './style.scss';

import Jumbotron from '@lpComponent/Jumbotron';
import Article from '@lpComponent/Article';

interface ComponentProps { }
const News: FC<ComponentProps> = props => {

  return (
    <div>
      <Jumbotron name="News of Deogracias">
        <p>Tell you what changes of Deogracias in each version.</p>
      </Jumbotron>
      <Article textColor="white" backgroundColor="blue">
        <ul>
          <li>
            <h3>v1.0.0</h3>
            <p>Lanched the first version 🎉🎉🎉🎉🎉</p>
          </li>
        </ul>
      </Article>
      <Article textColor="black" backgroundColor="white">
        <h2>Get Started</h2>
        <p>Once you click the button below, the app starts immediately.</p>
        <Button label="Get Started" />
      </Article>
    </div>
  );
};

export default News;