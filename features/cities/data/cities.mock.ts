import { City } from "../types/city.types";

const cityNames = [
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Yogyakarta",
    "Bali",
    "Medan",
    "Semarang",
];


export const cities: City[] = cityNames.map((name, i) => {
    // const officeCount = officeSpaces.filter((space) => space.location === name).length;

    return {
        id: i + 1,
        name,
        officesCount: 100,
        imageUrl: `/assets/images/thumbnails/thumbnails-${(i % 3) + 1}.png`,
        slug: name.toLowerCase().replace(/ /g, "-"),
    };
});