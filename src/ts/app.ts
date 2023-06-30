async function getImagesFromApi<T>(): Promise<T> {
  const cards = document.querySelectorAll('.cards__slide');

  const apiKey = 'fFxnjJbATX8AjCAtTqW8H-eFSG-tT_L0dP64-83e--Y';
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${'cars'}&client_id=${apiKey}&count=${
    cards.length
  }`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
}
