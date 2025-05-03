import type { PackageSummary } from "../api/types/packageSummary";
 import { Link } from 'react-router-dom'

interface packageListItemProps{
    pack: PackageSummary;
}

export default function PackageListItem({ pack }: PackageListItemProps){
    return(
        <div className="border p-4 rounded flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <Link to={`/packages/${pack.name}`}></Link>
            </div>
        </div>
    )
}