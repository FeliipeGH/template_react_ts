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
        title: "CRUD",
        icon: AssignmentIcon,
        collapseList: [
            {
                title: "Consulta",
                icon: ListIcon,
                url: "/algo",
            },
            {
                title: "Agregar-Editar",
                icon: CategoryIcon,
                url: "/algo",
            },
        ]
    },
];