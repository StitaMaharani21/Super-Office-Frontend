import Image from "next/image";
import { FeatureOffice } from "../types/officeSpace.types";

export default function OfficeFeature({ office }: { office: FeatureOffice }) {
    return (

        <div className="flex items-center gap-4">
            <Image
                width={24}
                height={24}
                src={office.icon}
                className="w-[34px] h-[34px]"
                alt="icon"
            />
            <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">{office.label}</p>
                <p className="text-sm leading-[21px]">{office.desc}</p>
            </div>
        </div>

    );

};
