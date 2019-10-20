import React, { FC, useEffect, useState } from 'react';
import { DeograciasTableName, deograciasDB } from '@util/database';

interface FileViewerProps { }
const FileViewer: FC<FileViewerProps> = props => {
	const [files, setFiles] = useState([] as MangaEntity[]);

	useEffect(() => {
		deograciasDB.selectAllEntities(DeograciasTableName.Mangas).then(result => {
			setFiles(result as never[]);
		});
	}, []);

	return (
		<div id="file-viewer">
			{files.map(file => <h2>{ file.name }</h2>)}
		</div>
	);
};
export default FileViewer;