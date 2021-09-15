import React, {ChangeEvent, useState} from 'react';
import {CardContainer} from "../../components/cardContainer/CardContainer";
import BusinessIcon from "@material-ui/icons/Business";
import {useForm} from "react-hook-form";
import {BusinessModel} from "../../../core/models/BusinessModel";
import {anyValueRule} from "../../rules/globalRules";
import {MaterialInput} from "../../components/materialInput/MaterialInput";
import {Button, Grid, makeStyles} from "@material-ui/core";
import {businessListStyles} from "./styles/businessListStyles";
import {MaterialSelect} from "../../components/selects/MaterialSelect";
import {useIsMounted} from "../../hooks/useIsMounted";

class Category {
    categoryName?: string;
    categoryId?: number;

    constructor(categoryName?: string, categoryId?: number) {
        this.categoryName = categoryName;
        this.categoryId = categoryId;
    }
}

const selectTestList: Array<Category> = [
    {
        categoryName: "categoria1",
        categoryId: 1
    },
    {
        categoryName: "categoria2",
        categoryId: 2
    },
    {
        categoryName: "categoria3",
        categoryId: 3
    },
];

// @ts-ignore
const useStyles = makeStyles(businessListStyles);
export const BusinessCreateUpdatePage = () => {
    const classes = useStyles();
    const {handleSubmit, control} = useForm();
    const [categorySelect, setCategorySelect] = useState(selectTestList[0]);
    const isMounted = useIsMounted();

    const onSubmit = (data: BusinessModel) => {
        console.log(data);
    }

    const handleCategoryChange = (e: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
        const id = e.target.value;
        const categoryId = parseInt(id as string);
        const category = selectTestList.find(e => e.categoryId === categoryId);
        if (category && isMounted.current) {
            const categoryObj = {categoryId, categoryName: category.categoryName ?? ""};
            setCategorySelect({...categoryObj});
        }
    };

    return (
        <CardContainer icon={BusinessIcon} showButton={false} title="Agregar negocio">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <MaterialInput
                            title="Empresa"
                            inputId="business"
                            icon={BusinessIcon}
                            control={control}
                            rules={{...anyValueRule("Ingresa la empresa")}}
                        />
                        <MaterialSelect
                            title="Selecciona la categoría"
                            value={categorySelect.categoryId ?? ""}
                            onChange={handleCategoryChange}
                            name="categoryName"
                            id="categoryId"
                            list={selectTestList}
                            subKey="category"
                        />
                    </Grid>
                </Grid>
                <Button type="submit" color="primary" variant="contained" className={classes.submitButton}>
                    Guardar
                </Button>
                <Button color="secondary" variant="contained">
                    test
                </Button>
            </form>
        </CardContainer>
    );
};