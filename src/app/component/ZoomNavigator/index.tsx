import React, { FC, useEffect, useState } from 'react';

import './style.scss';

import { Slider } from 'primereact/slider';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

interface ZoomNavigatorProps {
  currentZoomPercent: number;
  onChange: (percent: number) => void;
}
const ZoomNavigator: FC<ZoomNavigatorProps> = props => {

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPressEvent);
		return () => {
			window.removeEventListener('keydown', handleKeyPressEvent);
		};
	}, [props.currentZoomPercent]);

	const handleKeyPressEvent = (event: KeyboardEvent) => {
		event.preventDefault();
		switch (event.code) {
		case 'ArrowUp':
			handleChangePercent(props.currentZoomPercent + 10);
			return true;
		case 'ArrowDown':
			handleChangePercent(props.currentZoomPercent - 10);
			return true;
		}
	};

	const handleChangePercent = (newIdx: number) => {
		if (newIdx < 100 || newIdx > 500) {
			return true;
		}
		props.onChange(newIdx);
	};

	return (
		<Toolbar className="zoom-navigator">

			<div className="">
				<p>{`${props.currentZoomPercent}%`}</p>
			</div>
			<div className="zoom-slider">
				<Slider
					orientation="vertical"
					min={100}
					max={500}
					value={props.currentZoomPercent}
					onChange={event => handleChangePercent(event.value as number)}
				/>
			</div>
		</Toolbar>
	);
};
export default ZoomNavigator;