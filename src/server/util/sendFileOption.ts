import path from 'path';

interface sendFileOption {
	maxAge?: number,
	root?: string,
	lastModified?: string,
	headers?: Object,
	dotfiles?: string,
	acceptRanges?: boolean,
	cacheControl?: boolean,
	immutable?: boolean
}
const sendFileOption = (additionalOption?: sendFileOption) =>  {
	const defaultOption = {
		root: path.join(process.cwd(), '/dist')
	};
	return Object.assign(defaultOption, additionalOption);
}

export default sendFileOption;