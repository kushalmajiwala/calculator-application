import { useLayoutEffect, useState } from 'react';
import './style.css';

const App = () => {

    const [result, setResult] = useState("");

    const handleClick = (event) => {
        if(result.length >= 15)
        {
            setResult(result);
        }
        else
        {
            if(result === "Error")
            {
                setResult(event.target.name);
            }
            else if((event.target.name === "*" || event.target.name === "/" || event.target.name === "+" || event.target.name === "-") && 
                    (result[result.length - 1] === "*" || result[result.length - 1] === "/" || result[result.length - 1] === "+" || result[result.length - 1] === "-"))
            {
                var temp_result = result.slice(0, -1);
                setResult(temp_result.concat(event.target.name));
            }
            else
            {
                setResult(result.concat(event.target.name));
            }
        }
    }

    const clearAll = () => {
        setResult("");
    }

    const backspace = () => {
        setResult(result.slice(0, -1));
    }

    const calculate = () => {
        try
        {
            // eslint-disable-next-line
            result === "Error" ? setResult("Error") : setResult(eval(result).toString());
        }
        catch(error)
        {
            setResult("Error");
        }
    }

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "rgb(130, 130, 200)";
    });

    return (
        <>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '25px', fontWeight: '500' }}>CALCULATOR APPLICATION</p>
            <div className='main-container'>
                <div className='calc-container'>
                    <div className='result-container'>
                        <span className='result'>{ result }</span>
                    </div>
                    <div className='key-container'>
                        <div className='row1'>
                            <button onClick={clearAll} className='bigBtn opBgcolor'>Clear</button>
                            <button onClick={backspace} className='smallBtn opBgcolor'>C</button>
                            <button name='/' onClick={handleClick} className='smallBtn opBgcolor'>&#247;</button>
                        </div>
                        <div className='row2'>
                            <button name='7' onClick={handleClick} className='smallBtn numBgcolor'>7</button>
                            <button name='8' onClick={handleClick} className='smallBtn numBgcolor'>8</button>
                            <button name='9' onClick={handleClick} className='smallBtn numBgcolor'>9</button>
                            <button name='*' onClick={handleClick} className='smallBtn opBgcolor'>&#215;</button>
                        </div>
                        <div className='row3 onClick={handleClick}'>
                            <button name='4' onClick={handleClick} className='smallBtn numBgcolor'>4</button>
                            <button name='5' onClick={handleClick} className='smallBtn numBgcolor'>5</button>
                            <button name='6' onClick={handleClick} className='smallBtn numBgcolor'>6</button>
                            <button name='-' onClick={handleClick} className='smallBtn opBgcolor'>&#8722;</button>
                        </div>
                        <div className='row4 onClick={handleClick}'>
                            <button name='1' onClick={handleClick} className='smallBtn numBgcolor'>1</button>
                            <button name='2' onClick={handleClick} className='smallBtn numBgcolor'>2</button>
                            <button name='3' onClick={handleClick} className='smallBtn numBgcolor'>3</button>
                            <button name='+' onClick={handleClick} className='smallBtn opBgcolor'>&#43;</button>
                        </div>
                        <div className='row5'>
                            <button name='0' onClick={handleClick} className='smallBtn numBgcolor'>0</button>
                            <button name='.' onClick={handleClick} className='smallBtn numBgcolor'>.</button>
                            <button onClick={calculate} className='bigBtn opBgcolor'>&#61;</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;