export type officeSpace = {
    id: number;
    title: string;
    slug: string;
    price: number;
    duration: string;
    address: string;
    about: string;
    location: string;
    rating: number;
    tags: string[];
    image: string;
    images: string[];
    features: FeatureOffice[];
    salesContacts: SalesContact[];
    isFullyBooked: boolean;
};

export type SalesContact = {
    name: string;
    role: string;
    photo: string;
};

export type FeatureOffice = {
    label: string;
    desc: string;
    icon: string;

};


export type Contact = {
    name: string;
    role: string;
    photo: string;
};

export type OfficeImage = {
    image : string;
    images : string[];
};
