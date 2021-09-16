import {useEffect, useState} from "react";
import {useIsMounted} from "./useIsMounted";
import {RequestTokenFunction, ResultData} from "../interfaces/RequestFunction";
//import {useSelector} from "react-redux";

export const useRequestListData = (requestFunc: RequestTokenFunction) => {
    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState<Array<any>>([]);
    const isMounted = useIsMounted();
    //const {token} = useSelector((state) => state.signInReducer);
    const token = "";

    const init = () => {
        if (isMounted.current) setLoading(true);
        requestFunc(token).then((result: ResultData) => {
            if (result.resolved && isMounted.current) {
                setListData([...result.list]);
            }
            if (isMounted.current) setLoading(false);
        });
    };

    useEffect(init, []);

    const onDeleteElement = (index: number) => {
        let newList = [...listData];
        newList.splice(index, 1);
        if (isMounted.current) {
            setListData([...newList]);
        }
    };

    return {
        listData,
        loading,
        onDeleteElement,
        token
    };
};