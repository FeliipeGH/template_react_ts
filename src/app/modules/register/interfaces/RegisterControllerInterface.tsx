import React, {FormEvent} from "react";
import {Control} from "react-hook-form/dist/types/form";

export interface RegisterControllerInterface {
    step: number,
    handleChangeStep: (option: number, event: FormEvent<HTMLFormElement>) => void,
    controlFirstStep: Control<any>;
    controlSecondStep: Control<any>;
    getEmail: () => string;
    changeEmail: () => void;
}