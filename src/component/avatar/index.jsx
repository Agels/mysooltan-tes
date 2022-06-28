import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {avatar} from '../../app/actions/repoAction';
const Avatar = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.repo.token);
    const avatars = useSelector(state => state.repo.avatar);
    useEffect(() => {
        axios
          .get("https://api.github.com/users/Agels")
          .then((res) =>dispatch(avatar(res.data)));
      }, []);
    return (
        <>
        <img src={avatars.avatar_url} className="rounded-circle w-75" alt="img" />
        <p className="fs-4">{avatars.login}</p>
        </>
    )
}

export default Avatar;