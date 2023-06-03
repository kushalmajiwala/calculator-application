import { useLayoutEffect } from 'react';
import './style.css';

const App = () => {

    useLayoutEffect(() => {
        document.body.style.backgroundColor = "rgb(130, 130, 200)";
    });

    return (
        <>
            <p style={{ textAlign: 'center', color: 'white', fontSize: '25px' }}>CALCULATOR APPLICATION</p>
            <div className='main-container'>
                <div className='calc-container'>
                    <div className='result-container'>
                        <span className='result'>50</span>
                    </div>
                    <div className='key-container'>
                        <div className='row1'>
                            <button className='bigBtn opBgcolor'>Clear</button>
                            <button className='smallBtn opBgcolor'>C</button>
                            <button name='/' className='smallBtn opBgcolor'>&#247;</button>
                        </div>
                        <div className='row2'>
                            <button name='7' className='smallBtn numBgcolor'>7</button>
                            <button name='8' className='smallBtn numBgcolor'>8</button>
                            <button name='9' className='smallBtn numBgcolor'>9</button>
                            <button name='*' className='smallBtn opBgcolor'>&#215;</button>
                        </div>
                        <div className='row3'>
                            <button name='4' className='smallBtn numBgcolor'>4</button>
                            <button name='5' className='smallBtn numBgcolor'>5</button>
                            <button name='6' className='smallBtn numBgcolor'>6</button>
                            <button name='-' className='smallBtn opBgcolor'>&#8722;</button>
                        </div>
                        <div className='row4'>
                            <button name='1' className='smallBtn numBgcolor'>1</button>
                            <button name='2' className='smallBtn numBgcolor'>2</button>
                            <button name='3' className='smallBtn numBgcolor'>3</button>
                            <button name='+' className='smallBtn opBgcolor'>&#43;</button>
                        </div>
                        <div className='row5'>
                            <button name='0' className='smallBtn numBgcolor'>0</button>
                            <button name='.' className='smallBtn numBgcolor'>.</button>
                            <button className='bigBtn opBgcolor'>&#61;</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;