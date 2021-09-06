import React from 'react';
import {useRecoverPasswordController} from "./hooks/useRecoverPasswordController";
import {RecoverPasswordInterface} from "./interface/RecoverPasswordInterface";
import {AuthContainer} from "../../components/AuthContainer/AuthContainer";
import {FIRST_REGISTER_STEP} from "../register/hooks/useRegisterController";
import {FirstStepRecoverContent} from "./steps/FirstStepRecoverContent";
import {SecondStepRecoverContent} from "./steps/SecondStepRecoverContent";

export const RecoverPasswordPage = () => {
    const controller: RecoverPasswordInterface = useRecoverPasswordController();

    return (
        <AuthContainer
            title={(controller.step === FIRST_REGISTER_STEP ? "Recupera tu cuenta" : "Actualiza tu contraseña")}>
            {
                controller.step === FIRST_REGISTER_STEP ? (
                    <FirstStepRecoverContent {...controller}/>
                ) : (
                    <SecondStepRecoverContent {...controller}/>
                )
            }
        </AuthContainer>
    );
};