import React from 'react';
import {FirstStepContent} from "./steps/FirstStepContent";
import {SecondStepContent} from "./steps/SecondStepContent";
import {FIRST_REGISTER_STEP, useRegisterController} from "./hooks/useRegisterController";
import {RegisterControllerInterface} from "./interfaces/RegisterControllerInterface";

export const RegisterPage = () => {
    const controller: RegisterControllerInterface = useRegisterController();

    if (controller.step === FIRST_REGISTER_STEP) {
        return <FirstStepContent {...controller}/>;
    }

    return (
        <SecondStepContent {...controller}/>
    );
};
