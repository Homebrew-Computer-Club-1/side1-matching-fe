import { CSSProperties, useState } from "react";
import { FadeLoader } from "react-spinners";

export function Spinner(){
    let [color, setColor] = useState("#ffffff");
    
    return (
        <div
            style={{
                display:"inline-block"
            }}
        >
            <FadeLoader
            color="#db2f2f"
            height={15}
            width={5}
            radius={2}
            margin={2}
            />
        </div>
    )

}