import {FormEvent, useState} from "react";
import {useIsMounted} from "../../../hooks/useIsMounted";
import {useForm} from "react-hook-form";
import {RegisterControllerInterface} from "../interfaces/RegisterControllerInterface";
import {RegisterModelFirstStep} from "../../../../core/models/RegisterModelFirstStep";
import {RegisterModelSecondStep} from "../../../../core/models/RegisterModelSecondStep";

export const FIRST_REGISTER_STEP = 1;
export const SECOND_REGISTER_STEP = 2;

export const useRegisterController = (): RegisterControllerInterface => {
    const isMounted = useIsMounted();
    const [step, setStep] = useState(FIRST_REGISTER_STEP);
    const {handleSubmit: handleSubmitFirstStep, control: controlFirstStep} = useForm();
    const {handleSubmit: handleSubmitSecondStep, control: controlSecondStep,} = useForm();
    const [firstStepData, setFirstStepData] = useState(new RegisterModelFirstStep());

    const handleChangeStep = (option: number, event: FormEvent<HTMLFormElement>): void => {
        if (option === FIRST_REGISTER_STEP) {
            onFirstStepSubmit(event);
        } else if (option === SECOND_REGISTER_STEP) {
            onSecondStepSubmit(event);
        }
    };

    const onFirstStepSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitFirstStep((data: RegisterModelFirstStep) => {
            onValidFirstStep(data);
        })(event);
    };

    const onSecondStepSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitSecondStep((data: RegisterModelSecondStep) => {
            onValidSecondStep(data);
        })(event);
    };

    const onValidFirstStep = (data: RegisterModelFirstStep) => {
        if (isMounted.current) {
            setFirstStepData({...data});
            setStep(SECOND_REGISTER_STEP);
        }
        // todo request
    };

    const onValidSecondStep = (data: RegisterModelSecondStep) => {
        // todo request
    };

    const getEmail = (): string => {
        const {email} = firstStepData;
        return email;
    };

    const changeEmail = () => {
        if (isMounted.current) setStep(FIRST_REGISTER_STEP);
    };

    return {
        step,
        handleChangeStep,
        controlFirstStep,
        controlSecondStep,
        getEmail,
        changeEmail,
    };
};