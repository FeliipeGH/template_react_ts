import React from 'react';
import {InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import {materialSelectStyles} from "./styles/materialSelectStyles";
import {MaterialSelectInterface} from "./interfaces/MaterialSelectInterface";
import FormControl from "@material-ui/core/FormControl";

// @ts-ignore
const useStyles = makeStyles(materialSelectStyles);

export const MaterialSelect = ({
                                   list,
                                   id,
                                   name,
                                   onChange,
                                   subKey,
                                   title,
                                   value,
                                   multiple = false
                               }: MaterialSelectInterface) => {
    const classes = useStyles();

    return (
        <FormControl
            fullWidth
            className={classes.selectFormControl}
        >
            <InputLabel
                htmlFor={id}
                className={classes.selectLabel}
            >
                {title}
            </InputLabel>
            <Select
                multiple={multiple}
                MenuProps={{
                    className: classes.selectMenu,
                }}
                classes={{
                    select: classes.select,
                }}
                value={value}
                onChange={onChange}
                inputProps={{
                    name: name,
                    id: id
                }}
            >
                {
                    list.map(e => (
                            <MenuItem
                                key={subKey + e[id]}
                                classes={{
                                    root: classes.selectMenuItem,
                                    selected: multiple
                                        ? classes.selectMenuItemSelectedMultiple
                                        : classes.selectMenuItemSelected
                                }}
                                value={e[id]}
                            >
                                {e[name]}
                            </MenuItem>
                        )
                    )
                }
            </Select>
        </FormControl>
    );
};