//import Swal from 'sweetalert2';
import Swal from 'sweetalert2/src/sweetalert2.js'
import withReactContent from 'sweetalert2-react-content';
import "./styles/alert.scss";
import {EventsAlertInterface} from "./interfaces/EventsAlertInterface";
import {SweetAlertIcon, SweetAlertResult} from "sweetalert2";

export const MaterialSwal = withReactContent(Swal);

//Titles
export const CORRECT_TITLE = "Correcto";
export const ERROR_TITLE = "Error";
export const WARNING_TITLE = "Alerta";
export const CONTINUE_QUESTION_TITLE = "¿Continuar?";

//General texts
export const GENERAL_ERROR_TEXT = "¡Ha ocurrido un error, consulta al administrador!";

export const genericAlert = async (text: string, title = CORRECT_TITLE, icon: SweetAlertIcon = "success",
                                   events?: EventsAlertInterface, showCancelButton = false,
                                   showDenyButton = false, confirmTextBtn?: string, cancelTextBtn?: string,
                                   denyTextBtn?: string,) => {
    const response = await MaterialSwal.fire({
        title,
        text,
        icon,
        showCancelButton,
        showDenyButton,
        confirmButtonText: confirmTextBtn ?? "Aceptar",
        cancelButtonText: cancelTextBtn ?? "Cancelar",
        denyButtonText: denyTextBtn ?? "Denegar",
        allowOutsideClick: false,
        allowEscapeKey: false,
    });
    handleResponse(response, events);
};

export const loadingAlert = () => {
    MaterialSwal.fire({
        title: "Cargando",
        didOpen(popup: HTMLElement) {
            MaterialSwal.showLoading();
        }
    }).then();
};

const handleResponse = (response: SweetAlertResult, events?: EventsAlertInterface) => {
    if (events) {
        const {onDenied, onDismissed, onConfirm} = events;
        if (response.isConfirmed && onConfirm) {
            onConfirm();
            return;
        }
        if (response.isDismissed && onDismissed) {
            onDismissed();
            return;
        }
        if (response.isDenied && onDenied) {
            onDenied();
            return;
        }
    }
}