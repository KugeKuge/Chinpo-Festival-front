import { ChangeEventHandler, useRef, useState } from "react";
import { imageDisplaySize } from './styles';

const fileImage = new Image();

export const useHooksForImageUpload = () => {
	const imageContainerRef = useRef<HTMLDivElement>(null);
	const [objectURL, setObjectURL] = useState('');
	const resetSelection = () => {
		fileImage.src = '';
		const imageContainer = imageContainerRef.current;
		if (imageContainer && fileImage.parentNode === imageContainer) {
			imageContainer.removeChild(fileImage);
		}
		if (objectURL) {
			window.URL.revokeObjectURL(objectURL);
			setObjectURL('');
		}
	};

	const manipulateImageSize = (url: string) => {
		fileImage.src = url;
		/* fileImage.width = styles.imageDisplaySize.width;
		fileImage.height = styles.imageDisplaySize.height; */
		fileImage.onload = () => {
			const width = fileImage.naturalWidth;
			const height = fileImage.naturalHeight;
			//console.log('load size:', width, height);  // 確認用
			const ratioWidth = width / imageDisplaySize.width;
			const ratioHeight = height / imageDisplaySize.height;
			if (ratioWidth > ratioHeight) {
				// fileImage.width = width / ratioWidth;  // と同じ
				fileImage.width = imageDisplaySize.width;
				fileImage.height = height / ratioWidth;
			} else {
				fileImage.width = width / ratioHeight;
				// fileImage.height = height / ratioHeight;  // と同じ
				fileImage.height = imageDisplaySize.height;
			}
		};
	};

	const handleFiles: ChangeEventHandler<HTMLInputElement> = (event) => {
		const files = event.currentTarget.files;
		resetSelection();
		if (!files || files?.length === 0) return;
		const file = files[0];
		if (!file.type.includes('image/')) {
			event.currentTarget.value = '';
			return;
		}
		const imageContainer = imageContainerRef.current;
		if (!imageContainer) return;
		const objectURL = window.URL.createObjectURL(file)
		manipulateImageSize(objectURL);
		//fileImage.src = objectURL;
		imageContainer.appendChild(fileImage);
		setObjectURL(objectURL);
	};
	return { handleFiles, imageContainerRef };
};