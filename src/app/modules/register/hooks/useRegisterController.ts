import {useState} from "react";
import {useIsMounted} from "../../../hooks/useIsMounted";

export const FIRST_STEP = 1;
export const SECOND_STEP = 2;

export const useRegisterController = () => {
    const [step, setStep] = useState(FIRST_STEP);
    const isMounted = useIsMounted();

    const handleChangeStep = (option: number) => {
        if (isMounted.current) setStep(option);
    };

    return {
        step,
        handleChangeStep
    };
};