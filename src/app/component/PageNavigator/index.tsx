import React, { FC, useEffect, useState } from 'react';

import './style.scss';

import { Slider } from 'primereact/slider';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';

interface PageNavigatorProps {
  currentPageIdx: number;
  maxPageIdx: number;
  onChange: (idx: number) => void;
}
const PageNavigator: FC<PageNavigatorProps> = props => {

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPressEvent);
		return () => {
			window.removeEventListener('keydown', handleKeyPressEvent);
		};
	}, [props.currentPageIdx]);

	const handleKeyPressEvent = (event: KeyboardEvent) => {
		event.preventDefault();
		switch (event.code) {
		case 'ArrowLeft':
			handleChangePageIdx(props.currentPageIdx - 1);
			return true;
		case 'ArrowRight':
			handleChangePageIdx(props.currentPageIdx + 1);
			return true;
		}
	};

	const handleChangePageIdx = (newIdx: number) => {
		if (newIdx < 0 || newIdx > props.maxPageIdx) {
			return true;
		}
		props.onChange(newIdx);
	};

	const currentPageNumber = (): number => props.currentPageIdx + 1;

	const maxPageNumber = (): number => props.maxPageIdx + 1;

	return (
		<Toolbar className="page-navigator">
			<div className="p-toolbar-group-left page-number">
				<p>{`${currentPageNumber()} / ${maxPageNumber()}`}</p>
			</div>
			<div className="p-toolbar-group-left page-slider">
				<Slider
					min={1}
					max={maxPageNumber()}
					value={currentPageNumber()}
					onChange={event => handleChangePageIdx(event.value as number - 1)}
				/>

			</div>
			<div className="p-toolbar-group-right buttons">
				<Button icon="pi pi-angle-double-left" onClick={() => handleChangePageIdx(0)} />
				<Button icon="pi pi-angle-left" onClick={() => handleChangePageIdx(props.currentPageIdx - 1)} />
				<Button icon="pi pi-angle-right" onClick={() => handleChangePageIdx(props.currentPageIdx + 1)} />
				<Button icon="pi pi-angle-double-right" onClick={() => handleChangePageIdx(props.maxPageIdx)} />
			</div>
		</Toolbar>
	);
};
export default PageNavigator;