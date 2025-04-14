import { useFetchAlbumsQuery } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from "./ExpandablePanel";
import Button from './Button';

function AlbumsList({ user }){
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    
    let content;
    if(isLoading){
        content = <Skeleton times={3}/>
    } else if(error){
        content = <div>Error loading albums.</div>
    } else {
        content = data.map(album => {
            return <ExpandablePanel>
                List of photos in the album
            </ExpandablePanel>
        })
    }
    return (<div>Albums for {user.name}</div>)
}

export default AlbumsList;