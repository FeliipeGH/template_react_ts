import {useEffect, useState} from "react";
import {useIsMounted} from "./useIsMounted";
import {ResultListData} from "../interfaces/RequestFunction";
import {useGetToken} from "./useGetToken";
import {CRUDService} from "../interfaces/CRUDService";

export const useRequestListData = (service: CRUDService, useToken: boolean = true) => {
    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState<Array<any>>([]);
    const isMounted = useIsMounted();
    const token = useGetToken();

    const init = () => {
        if (isMounted.current) setLoading(true);
        if (token && useToken) {
            service.requestList(token).then((result: ResultListData) => {
                if (result.resolved && isMounted.current && result.list) {
                    setListData([...result.list]);
                }
                if (isMounted.current) setLoading(false);
            });
        } else {
            if (!useToken) {
                service.requestList().then((result: ResultListData) => {
                    if (result.resolved && isMounted.current && result.list) {
                        setListData([...result.list]);
                    }
                    if (isMounted.current) setLoading(false);
                });
            }
        }
    };

    useEffect(init, [useToken, token, service, isMounted]);

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
    };
};