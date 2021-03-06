import * as React from "react";
import {  DateInput, List, Datagrid, TextField } from 'react-admin';

const postFilters = [
    <DateInput source="q" label="Search" alwaysOn />
];

export const UserList = props => (
    <List filters={postFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="deviceId" />
            <TextField source="latitude" />
            <TextField source="longitude" />
            <TextField source="createdDate" />
            <TextField source="data" />
        </Datagrid>
    </List>
);