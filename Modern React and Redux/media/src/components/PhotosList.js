import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from './Button';

function PhotosList({ album }){
    useFetchPhotosQuery(album);
    const [addPhoto, addPhotosResults] = useAddPhotoMutation(album);

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos In {album.title}</h3>
                <Button loading={addPhotosResults.isLoading} onClick={handleAddPhoto}>+ Add Photo</Button>
            </div>
        </div>
    )
}

export default PhotosList;