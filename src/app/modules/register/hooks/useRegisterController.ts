import {FormEvent, useState} from "react";
import {useIsMounted} from "../../../hooks/useIsMounted";
import {useForm} from "react-hook-form";
import {RegisterControllerInterface} from "../interfaces/RegisterControllerInterface";
import {RegisterModelFirstStep} from "../../../../core/models/RegisterModelFirstStep";
import {RegisterModelSecondStep} from "../../../../core/models/RegisterModelSecondStep";

export const FIRST_STEP = 1;
export const SECOND_STEP = 2;

export const useRegisterController = (): RegisterControllerInterface => {
    const [step, setStep] = useState(FIRST_STEP);
    const isMounted = useIsMounted();
    const {
        handleSubmit: handleSubmitFirstStep,
        control: controlFirstStep,
        formState: formStateFirstStep
    } = useForm();

    const {
        handleSubmit: handleSubmitSecondStep,
        control: controlSecondStep,
        formState: formStateSecondStep
    } = useForm();

    const [firstStepData, setFirstStepData] = useState(new RegisterModelFirstStep());
    const [secondStepData, setSecondStepData] = useState(new RegisterModelSecondStep());

    const handleChangeStep = (option: number, event: FormEvent<HTMLFormElement>): void => {
        if (option === FIRST_STEP) {
            onFirstStepSubmit(event);
            if (formStateFirstStep.isValid) {
                console.log('aki')
                if (isMounted.current) setStep(SECOND_STEP);
                // todo request
            }
        } else if (option === SECOND_STEP) {
            onSecondStepSubmit(event);
            if (formStateSecondStep.isValid) {
                console.log(firstStepData, secondStepData);
                // todo request
            }
        }
    };

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