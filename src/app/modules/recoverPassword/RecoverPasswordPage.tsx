import React from 'react';
import {useRecoverPasswordController} from "./hooks/useRecoverPasswordController";
import {RecoverPasswordInterface} from "./interface/RecoverPasswordInterface";
import {FIRST_REGISTER_STEP} from "../register/hooks/useRegisterController";
import {FirstStepRecoverContent} from "./steps/FirstStepRecoverContent";
import {SecondStepRecoverContent} from "./steps/SecondStepRecoverContent";

export const RecoverPasswordPage = () => {
    const controller: RecoverPasswordInterface = useRecoverPasswordController();

    if (controller.step === FIRST_REGISTER_STEP) {
        return <FirstStepRecoverContent {...controller}/>;
    }

    return (
        <SecondStepRecoverContent {...controller}/>
    );
};