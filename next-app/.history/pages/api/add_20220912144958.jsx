import React from "react";
import { Card,CardBody,Form,FormGroup,Label,Input,FormText,Button } from 'reactstrap';


export const Addrecords = ()=>{
    const [name,setName] = React.useState('')
    const [items,setItems] = useState([todolists])

    const addNewRecord = () =>{

        var student = new FormData();
        student.append('name',name)

        var  options = {
            method:"POST",
            body:student
        }
        fetch("http://localhost:3259/todolists",options)
        .then(res=>res.json())
        .then(resp=>console.log(resp))

    }
return(
    <card>
    <CardBody>
        <Form>
            <FormGroup>
                <label>name</label>
                
                <input placeholder="Entername" type="name" onChange={(e)=>setName(e.target.value)} />
            </FormGroup>
            <buttonAdd
        
        className="button buttonAdd" 
        onClick = {addNewRecord}>Success   
      </buttonAdd>

        </Form>
    </CardBody>
    </card>
)
}