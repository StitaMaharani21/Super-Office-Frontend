import { officeSpace } from "../types/officeSpace.types";

export const officeSpaces: officeSpace[] = [
    {
        id: 1,
        title: "Downtown Co-working Space with Panoramic",
        slug: "downtown-co-working-space-panoramic",
        price: 1500000,
        duration: "15 days",
        address: "123 Main St, Metropolis",
        about: "A vibrant co-working space in the heart of the city.",
        location: "Metropolis",
        rating: 4.5,
        tags: ["co-working", "downtown", "flexible"],
        image: "/assets/images/thumbnails/thumbnails-3.png",
        images: [
            "/assets/images/thumbnails/thumbnails-2.png",
            "/assets/images/thumbnails/thumbnails-3.png",
        ],
        features: ["Privacy", "Global Event", "Sustainbility", "Extra Snacks", "Compact", "Free Move"],
        salesContacts: [
            {
                name: "Alice Johnson",
                role: "Sales Manager",
                photo: "/assets/images/photo/photo-1.png",
            },
            {
                name: "Bob Smith",
                role: "Account Executive",
                photo: "/assets/images/photo/photo-2.png",
            },
        ],
        isFullyBooked: false,
    },
    {
        id: 2,
        title: "Uptown Private Offices — Luxurious Executive Suites",
        slug: "uptown-private-offices-luxurious-executive-suites",
        price: 2500000,
        duration: "2 days",
        address: "456 Elm St, Metropolis",
        about: "Private office spaces in a premium uptown location.",
        location: "Metropolis",
        rating: 4.8,
        tags: ["private", "uptown", "premium"],
        image: "/assets/images/thumbnails/thumbnails-1.png",
        images: [
            "/assets/images/thumbnails/thumbnails-2.png",
            "/assets/images/thumbnails/thumbnails-3.png",
        ],
        features: ["Privacy", "Global Event", "Sustainbility", "Extra Snacks", "Compact", "Free Move"],
        salesContacts: [
            {
                name: "Alice Johnson",
                role: "Sales Manager",
                photo: "/assets/images/photo/photo-1.png",
            },
            {
                name: "Bob Smith",
                role: "Account Executive",
                photo: "/assets/images/photo/photo-2.png",
            },
        ],
        isFullyBooked: true,
    },
];