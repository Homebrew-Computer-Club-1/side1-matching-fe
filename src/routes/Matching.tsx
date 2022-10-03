import { useEffect, useState } from "react";

export default function Matching(){
    const [matching,setMatching] = useState(true);
    useEffect(() => {
        // 서버랑 통신 하는 로직
    },[])
    return (
        <>
            {matching ? <h1>Matching....</h1> : <h1>Complete!</h1>}
        </>
    );
}