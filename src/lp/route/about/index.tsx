import React, { FC, useState } from 'react';

import { Button } from 'primereact/button';

import './style.scss';

import Jumbotron from '@lpComponent/Jumbotron';
import Article from '@lpComponent/Article';

interface ComponentProps { }
const About: FC<ComponentProps> = props => {
	const [currentContentKey, setCurrentContentKey] = useState();

	const contents = {
		createManga: {},
		scrapingImages: {},
		tagFilter: {},
		viewingManga: {}
	};

	return (
		<div>
			<Jumbotron name="About Deogracias">
				<p>Once you start using Deogracias, I recommend you to read them. It works as a documentation.</p>
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

export default About;