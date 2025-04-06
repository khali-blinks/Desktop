import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";

function UsersList(){
    const dispatch = useDispatch();
    const {isLoading, data, error } = useSelector((state) => {

    })


    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    return 'Users List';
}

export default UsersList;