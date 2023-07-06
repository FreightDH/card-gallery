import { ImagesApiResponse } from './types';

async function getImagesFromApi<T>(searchQuery: string): Promise<T> {
  const cards = document.querySelectorAll('.cards__slide');

  const apiKey = 'fFxnjJbATX8AjCAtTqW8H-eFSG-tT_L0dP64-83e--Y';
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${searchQuery}&client_id=${apiKey}&count=${cards.length}`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export function setImages(searchQuery = 'audi'): void {
  const cards = document.querySelectorAll('.cards__slide');
  const images = getImagesFromApi(searchQuery);

  images.then((res) => {
    const imagesArray = res as ImagesApiResponse;

    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      const image = new Image();

      image.src = imagesArray[index].urls.full;
      image.onload = (): void => {
        cardElement.style.backgroundImage = `url(${image.src})`;
      };
    });
  });
}
