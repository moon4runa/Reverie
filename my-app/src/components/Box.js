import React from 'react'
import styled from 'styled-components'
import { useTimer } from 'react-timer-hook';

const BB = styled.div`
  position: absolute;
  width: 350px;
  height: 120px;
  border: 1px solid black;
  margin: 0 auto;
`;

function MyTimer({ expiryTimestamp, restartTime }) {
    const {
      seconds,
      minutes,
      hours,
      days,
      start,
      pause,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
  
    return (
      <div style={{textAlign: 'center' ,backgroundColor: 'FF000', padding: "10px"}}>
        <div style={{fontSize: '50px'}}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
    
        <button onClick={() => {
          
          const time = new Date();
          time.setSeconds(time.getSeconds() + restartTime);
          restart(time)
        }}>Restart</button>
      </div>
    );
  }


function box({information}) {
    const time = new Date();
  time.setSeconds(time.getSeconds() + information); 
    return (
        <BB> 
            <MyTimer expiryTimestamp={time} restartTime={information} />
        </BB>
        
    )
}

export default box
