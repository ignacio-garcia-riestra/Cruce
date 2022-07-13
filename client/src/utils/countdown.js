
export default function countdown() {
    //funcion para pasar de ms a mins y secs
    function secondsToString(seconds) {
        var minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        var second = seconds % 60;
        second = (second < 10)? '0' + second : second;
        return minute + ':' + second;
    }
    //seteamos cuantos milisegundos necesitamos para el countdown
    let interval = 600000
    function setTime(){
    
        localStorage.endTime = +new Date + interval
    }
    //establecemos en el localstorage el endtime
    if(!localStorage.endTime){
        setTime()
    } 
    
    // funcion para setear el intervalo y cuanto queda en el contador + mostrarlo
    setInterval(function(){
       let remaining = localStorage.endTime - new Date;
        if( remaining >= 0 ){
           document.querySelector('#timer').textContent = secondsToString(Math.floor( remaining / 1000 )   )
        } else
        {
            localStorage.removeItem("endTime");
            //cancelar turno al terminar el tiempo.
            //el logout deberia hacer un removeItem("endTime");
        }
    }, 100);

    return (
        <div>Tiempo restante: <span id="timer"></span></div>
    );
}

/*INTENTANDO COMO COMPONENTE:

 import React from "react";
import { useState, useEffect } from "react";

export default function Countdown(props) {
  const { startingMinutes = 111, startingSeconds = 0 } = props;
  const [mins, setMinutes] = useState(startingMinutes);
  const [secs, setSeconds] = useState(startingSeconds);
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval);
        } else {
          setMinutes(mins - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div>
      {!(mins && secs) ? "" : (
        <p>
          {" "}
          {mins}:{secs < 10 ? `0${secs}` : secs}
        </p>
      )}
    </div>
  );
} */