import { officeSpace } from "../types/officeSpace.types";

export const officeSpaces: officeSpace[] = [
    {
        id: 1,
        title: "Gowork Jakarta",
        slug: "gowork-jakarta",
        price: 1500000,
        duration: "15 days",
        address: "123 Main St, Jakarta",
        about: "A vibrant co-working space in the heart of the city, this modern workspace is designed to ignite creativity, collaboration, and productivity for today’s professionals. Located in a highly accessible and strategic area, it blends an energetic urban atmosphere with the comfort of a thoughtfully crafted working environment.",
        location: "Jakarta",
        rating: 4.5,
        tags: ["co-working", "downtown", "flexible"],
        image: "/assets/images/thumbnails/thumbnails-3.png",
        images: [
            "/assets/images/thumbnails/thumbnails-2.png",
            "/assets/images/thumbnails/thumbnails-3.png",
        ],
        features: [
            {
                label: "Privacy",
                desc: "Private suites for focused work and confidential meetings.",
                icon: "/assets/images/icons/security-user.svg",
            },
            {
                label: "Global Event",
                desc: "Access to networking and global business events.",
                icon: "/assets/images/icons/cup.svg",
            },
            {
                label: "Sustainbility",
                desc: "Eco-friendly practices and sustainable facilities.",
                icon: "/assets/images/icons/home-trend-up.svg",
            },
            {
                label: "Extra Snacks",
                desc: "Complimentary snacks and refreshments available.",
                icon: "/assets/images/icons/coffee.svg",
            },
            {
                label: "Compact",
                desc: "Efficiently designed spaces to maximize productivity.",
                icon: "/assets/images/icons/3dcube.svg",
            },
            {
                label: "Free Move",
                desc: "Flexible move-in/move-out options at no extra cost.",
                icon: "/assets/images/icons/group.svg",
            },
        ],
        salesContacts: [
            {
                name: "Alice Johnson",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-1.png",
            },
            {
                name: "Bob Smith",
                role: "Account Executive",
                photo: "/assets/images/photos/photo-2.png",
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
        address: "456 Elm St, Bali",
        about: "Private office spaces in a premium uptown location, offering luxurious executive suites designed for comfort and productivity. These offices provide a serene environment with top-notch amenities, perfect for professionals seeking a prestigious business address.",
        location: "Bali",
        rating: 4.8,
        tags: ["private", "uptown", "premium"],
        image: "/assets/images/thumbnails/thumbnails-1.png",
        images: [
            "/assets/images/thumbnails/thumbnails-2.png",
            "/assets/images/thumbnails/thumbnails-3.png",
        ],
        features: [
            {
                label: "Privacy",
                desc: "Private suites for focused work and confidential meetings.",
                icon: "/assets/images/icons/security-user.svg",
            },
            {
                label: "Global Event",
                desc: "Access to networking and global business events.",
                icon: "/assets/images/icons/cup.svg",
            },
            {
                label: "Sustainbility",
                desc: "Eco-friendly practices and sustainable facilities.",
                icon: "/assets/images/icons/home-trend-up.svg",
            },
            {
                label: "Extra Snacks",
                desc: "Complimentary snacks and refreshments available.",
                icon: "/assets/images/icons/coffee.svg",
            },
            {
                label: "Compact",
                desc: "Efficiently designed spaces to maximize productivity.",
                icon: "//assets/images/icons/3dcube.svg",
            },
            {
                label: "Free Move",
                desc: "Flexible move-in/move-out options at no extra cost.",
                icon: "/assets/images/icons/group.svg",
            },
        ],
        salesContacts: [
            {
                name: "Alice Johnson",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-1.png",
            },
            {
                name: "Bob Smith",
                role: "Account Executive",
                photo: "/assets/images/photos/photo-2.png",
            },
        ],
        isFullyBooked: true,
    },
];