import DashboardIcon from '@material-ui/icons/Dashboard';
import CategoryIcon from '@material-ui/icons/Category';
import ListIcon from '@material-ui/icons/List';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {RouteConstants} from "../../constants/RouteConstants";

export const dashboardModulesList = [
    {
        title: "Dashboard",
        icon: DashboardIcon,
        url: RouteConstants.DASHBOARD_MAIN,
    },
    {
        title: "Negocios",
        icon: AssignmentIcon,
        collapseList: [
            {
                title: "Consulta",
                icon: ListIcon,
                url: RouteConstants.BUSINESS_LIST,
            },
            {
                title: "Agregar-Editar",
                icon: CategoryIcon,
                url: RouteConstants.BUSINESS_CREATE,
            },
        ]
    },
];