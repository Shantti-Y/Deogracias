import React, { FC } from 'react';

import './style.scss';

import Jumbotron from '@lpComponent/Jumbotron';
import Article from '@lpComponent/Article';
import GetStarted from '@lpComponent/GetStarted';

interface ComponentProps { }
const Home: FC<ComponentProps> = props => 
	<div>
		<Jumbotron name="Deogracias, a manga viewer with convinient features">
			<GetStarted />
		</Jumbotron>
		<Article textColor="white" backgroundColor="#007ad9">
			<div className="feature odd">
				<div className="info">
					<i className="pi pi-copy" />
					<h2>Like Comic, Not Slideshow</h2>
					<p>My application, tremendously inspired by Kindle Cloud Reader lets you to see collections of images on any web browsers.</p>
				</div>
				<img src="https://i.gyazo.com/c4776532721e90828411d2e17388e6d8.jpg" alt="Like Comic, Not Slideshow"/>
			</div>
			<div className="feature even">
				<div className="info">
					<i className="pi pi-refresh" />
					<h2>Get Images from Everywhere</h2>
					<p>Due to a power of scraping, not only users can collect image resources from local computer storage, but also any websites.</p>
				</div>
				<img src="https://i.gyazo.com/09fc6306042f40eafb99194a8d34c3b7.png" alt="Gather Images from Everywhere" />
			</div>
			<div className="feature odd">
				<div className="info">
					<i className="pi pi-tags" />
					<h2>More Tag, More Searchable</h2>
					<p>You can tag to collections of images to search what you want to read more easily.</p>
				</div>
				<img src="https://i.gyazo.com/7d38c46be8cf9db5ee91989b68a9e57d.png" alt="" />
			</div>
		</Article>
		<Article textColor="black" backgroundColor="white">
			<h2>Get Started</h2>
			<p>Once you click the button below, the app starts immediately.</p>
			<GetStarted />
		</Article>
	</div>;
export default Home;