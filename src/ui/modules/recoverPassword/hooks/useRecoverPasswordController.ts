import {RecoverPasswordInterface} from "../interface/RecoverPasswordInterface";
import {useIsMounted} from "../../../hooks/useIsMounted";
import {FormEvent, useState} from "react";
import {useForm} from "react-hook-form";
import {RecoverPasswordModel} from "../../../../core/models/auth/RecoverPasswordModel";


export const FIRST_RECOVER_STEP = 1;
export const SECOND_RECOVER_STEP = 2;

export const useRecoverPasswordController = (): RecoverPasswordInterface => {
    const isMounted = useIsMounted();
    const [step, setStep] = useState(FIRST_RECOVER_STEP);
    const {handleSubmit: handleSubmitFirstStep, control: controlFirstStep} = useForm();
    const {handleSubmit: handleSubmitSecondStep, control: controlSecondStep} = useForm();

    const [recoverPasswordData, setRecoverPasswordData] = useState(new RecoverPasswordModel());

    const handleChangeStep = (option: number, event: FormEvent<HTMLFormElement>): void => {
        if (option === FIRST_RECOVER_STEP) {
            onFirstStepSubmit(event);
        } else if (option === SECOND_RECOVER_STEP) {
            onSecondStepSubmit(event);
        }
    };

    const onFirstStepSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitFirstStep((data: RecoverPasswordModel) => {
            if (isMounted.current) {
                setRecoverPasswordData({...data});
                setStep(SECOND_RECOVER_STEP);
            }
        })(event);
    };

    const onSecondStepSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmitSecondStep((data: RecoverPasswordModel) => {
            onValidSecondStep(data);
        })(event);
    };

    const onValidSecondStep = (data: RecoverPasswordModel) => {
        const {email} = recoverPasswordData;
        const {code, password} = data;
        if (isMounted.current) {
            setRecoverPasswordData({...recoverPasswordData, ...data});
        }
        const recoverPasswordAux = new RecoverPasswordModel(email, code, password);
        console.log(recoverPasswordAux);
        // todo request
    };

    const getEmail = (): string => {
        const {email} = recoverPasswordData;
        return email;
    };

    const changeEmail = () => {
        if (isMounted.current) setStep(FIRST_RECOVER_STEP);
    };

    return {
        step,
        controlFirstStep,
        controlSecondStep,
        handleChangeStep,
        getEmail,
        changeEmail,
    };
};