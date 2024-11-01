const images = [
  {
    id: 1,
    url: "https://picsum.photos/seed/picsum1/300",
    alt: "Random image 1",
    width: 300,
    height: 300,
  },
  {
    id: 2,
    url: "https://picsum.photos/seed/picsum2/300",
    alt: "Random image 2",
    width: 300,
    height: 300,
  },
  {
    id: 3,
    url: "https://picsum.photos/seed/picsum3/300",
    alt: "Random image 3",
    width: 300,
    height: 300,
  },
  {
    id: 4,
    url: "https://picsum.photos/seed/picsum4/300",
    alt: "Random image 4",
    width: 300,
    height: 300,
  },
  {
    id: 5,
    url: "https://picsum.photos/seed/picsum5/300",
    alt: "Random image 5",
    width: 300,
    height: 300,
  },
  {
    id: 6,
    url: "https://picsum.photos/seed/picsum6/300",
    alt: "Random image 6",
    width: 300,
    height: 300,
  },
  {
    id: 7,
    url: "https://picsum.photos/seed/picsum7/300",
    alt: "Random image 7",
    width: 300,
    height: 300,
  },
  {
    id: 8,
    url: "https://picsum.photos/seed/picsum8/300",
    alt: "Random image 8",
    width: 300,
    height: 300,
  },
  {
    id: 9,
    url: "https://picsum.photos/seed/picsum9/300",
    alt: "Random image 9",
    width: 300,
    height: 300,
  },
  {
    id: 10,
    url: "https://picsum.photos/seed/picsum10/300",
    alt: "Random image 10",
    width: 300,
    height: 300,
  },
  {
    id: 11,
    url: "https://picsum.photos/seed/picsum11/300",
    alt: "Random image 11",
    width: 300,
    height: 300,
  },
  {
    id: 12,
    url: "https://picsum.photos/seed/picsum12/300",
    alt: "Random image 12",
    width: 300,
    height: 300,
  },
  {
    id: 13,
    url: "https://picsum.photos/seed/picsum13/300",
    alt: "Random image 13",
    width: 300,
    height: 300,
  },
  {
    id: 14,
    url: "https://picsum.photos/seed/picsum14/300",
    alt: "Random image 14",
    width: 300,
    height: 300,
  },
];

const getImages = () => {
  return images;
};

const getImageById = (id: number) => {
  return images.find((image) => image.id === id);
};

export { getImageById, getImages };
