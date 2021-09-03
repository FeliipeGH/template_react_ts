import {FormEvent, useEffect, useState} from "react";
import {useIsMounted} from "../../../hooks/useIsMounted";
import {useForm} from "react-hook-form";
import {RegisterControllerInterface} from "../interfaces/RegisterControllerInterface";
import {RegisterModelFirstStep} from "../../../../core/models/RegisterModelFirstStep";
import {RegisterModelSecondStep} from "../../../../core/models/RegisterModelSecondStep";

export const FIRST_STEP = 1;
export const SECOND_STEP = 2;

export const useRegisterController = (): RegisterControllerInterface => {
    const isMounted = useIsMounted();
    const [step, setStep] = useState(FIRST_STEP);
    const {handleSubmit: handleSubmitFirstStep, control: controlFirstStep, setValue} = useForm();
    const {handleSubmit: handleSubmitSecondStep, control: controlSecondStep,} = useForm();
    const [firstStepData, setFirstStepData] = useState(new RegisterModelFirstStep());
    const [secondStepData, setSecondStepData] = useState(new RegisterModelSecondStep());

    const handleChangeStep = (option: number, event: FormEvent<HTMLFormElement>): void => {
        if (option === FIRST_STEP) {
            onFirstStepSubmit(event);
        } else if (option === SECOND_STEP) {
            onSecondStepSubmit(event);
        }
    };

    const onValidFirstStep = () => {
        const {isValid, name, userName, email, password} = firstStepData;
        if (isValid) {
            if (isMounted.current) setStep(SECOND_STEP);
            setValue('name', name);
            setValue('userName', userName);
            setValue('email', email);
            setValue('password', password);
            // todo request
        }
    };

    const onValidSecondStep = () => {
        const {isValid} = secondStepData;
        if (isValid) {

        }
    };

    useEffect(onValidFirstStep, [firstStepData, isMounted, setValue]);

    useEffect(onValidSecondStep, [secondStepData, firstStepData]);

    const onFirstStepSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitFirstStep((data: RegisterModelFirstStep) => {
            if (isMounted.current) {
                setFirstStepData({...data, isValid: true})
            }
        })(event);
    };

    const onSecondStepSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitSecondStep((data: RegisterModelSecondStep) => {
            if (isMounted.current) {
                setSecondStepData({...data, isValid: true})
            }
        })(event);
    };

    const getEmail = (): string => {
        const {email} = firstStepData;
        return email;
    };

    const changeEmail = () => {
        if (isMounted.current) setStep(FIRST_STEP);
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