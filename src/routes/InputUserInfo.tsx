import { Outlet, useParams } from "react-router-dom";




export default function InputUserInfo(){
    const {inputId} = useParams();

    return (
        <div>

            <Outlet></Outlet>
        </div> 
    );
} 