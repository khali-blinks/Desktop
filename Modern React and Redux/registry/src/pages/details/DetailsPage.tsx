import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

export default function DetailsPage(){
    const { details } = useLoaderData() as DetailsLoaderResult;

    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">{details.name}</h1>
            <div>
                <h3 className="text-lg font-bold">Description</h3>
                <div>
                    
                </div>
            </div>
        </div>
    )
}