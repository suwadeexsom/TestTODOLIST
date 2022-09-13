import React from "react";
import { Card,CardBody,Form,FormGroup,Label,Input,FormText,Button } from 'reactstrap';

export const Addrecords = ()=>{
return(
    <card>
    <CardBody>
        <Form>
            <FormGroup>
                <label>name</label>
                <input placeholder="Entername" type="name" />
            </FormGroup>
        </Form>
    </CardBody>
    </card>
)