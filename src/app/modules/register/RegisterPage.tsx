import React from 'react';
import {AuthContainer} from "../../components/AuthContainer/AuthContainer";
import {FirstStepContent} from "./steps/FirstStepContent";
import {SecondStepContent} from "./steps/SecondStepContent";
import {FIRST_STEP, useRegisterController} from "./hooks/useRegisterController";
import {RegisterControllerInterface} from "./interfaces/RegisterControllerInterface";

export const RegisterPage = () => {
    const controller: RegisterControllerInterface = useRegisterController();

    return (
        <AuthContainer title={(controller.step === FIRST_STEP ? "Registrate" : "Confirma tu correo")}>
            {
                controller.step === FIRST_STEP ? (
                    <FirstStepContent {...controller}/>
                ) : (
                    <SecondStepContent {...controller}/>
                )
            }
        </AuthContainer>
    );
};
