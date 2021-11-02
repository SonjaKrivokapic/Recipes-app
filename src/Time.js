import { useState, useEffect } from "react"

export default function Time(props){

        const [hours, setHours] = useState();
        const [minutes, setMinutes] = useState();
        useEffect(() => {
            setTime();
         }, [hours]);

         useEffect(() => {
            setTime();
         }, [minutes]);

        const setTime = () => {
            let res;
            if( hours == '00' || hours == "0" || !hours){
                res = minutes + "min.";
            }else{
                res = hours + "hrs. " + minutes + "min.";
            }
            props.func(res)
            console.log( 'tst' ,res)
        } 
    return(
        <div>
            
            Hours:<input value={hours} maxLength="2" size="2" onChange={(event) => setHours(event.target.value.replace(/\D+/g, ''))} />
            &nbsp;Minutes<input value={minutes} maxLength="2" size="2" onChange={(event) => setMinutes(event.target.value.replace(/\D+/g, ''))}/>
            
        </div>
    )


}

