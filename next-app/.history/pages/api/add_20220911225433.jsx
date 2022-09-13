import React from "react";
import { Card,CardBody,Form,FormGroup,Label,Input,FormText,Button } from 'reactstrap';


export const Addrecords = ()=>{
    const[name,setName] = React.useState('')

    const addNewRecord = () =>{

        var student = new FormData();
        student.append('name',name)

        var  options = {
            method:"POST",
            body:student
        }
        fetch("http://localhost:3259/todolists",options)

    }
return(
    <card>
    <CardBody>
        <Form>
            <FormGroup>
                <label>name</label>
                <input placeholder="Entername" type="name" onChange={(e)=>setName(e.target.value)} />
            </FormGroup>
            <Button type="button" onClick={addNewRecord}>Summit</Button>
        </Form>
    </CardBody>
    </card>
)
}