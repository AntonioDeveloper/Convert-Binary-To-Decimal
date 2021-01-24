import React, {useState} from 'react';
import AnimatedNumber from 'animated-number-react';

export default function Input(){

  let convertedArr = [];
  let value;
  let conversion;

  const [dec, setDec] = useState("");

  const convertToDec = (bin) => {  
    let length = bin.length;
    let pos = length-1; 
  
    for(let i = 0 ; i <= (length -1); i++){ 
       if(parseInt(bin.charAt(i)) !== 0 && parseInt(bin.charAt(i)) !== 1){
        alert("Por favor, digite apenas 0 e 1.");
         return;
       }else{
         value = parseInt(bin.charAt(i))*Math.pow(2, pos);    
      convertedArr.push(value);
      pos -= 1;    
      conversion = convertedArr.reduce((acc, curr) => {
        return acc + curr;
      }, 0); 
       }
    };  
    return conversion;
  };

  const onChange = (e) => {
    convertToDec(e.target.value)
    setDec(conversion);
  } 

  return (
    <>
      <input name="input" type="text" onChange={onChange}/>
      <br/><br/>
      <AnimatedNumber 
      value={dec}
      style={{ fontSize: 200 }}
      duration={1000}
      formatValue={v => v.toFixed(0)}
      frameStyle={perc => (
        { opacity: perc / 100 }
      )}
      />
    </>
  );
}