import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import Hello from './Hello';
import Timer from './Timer';
// class App extends React.Component{
//     render(){
//         return( 
// //parnet div :
// <div className='main'> 
//     <Hello/>
//     <Timer/>
// </div>
//         )
//     }
// }
//instead of using class use this :
const App = () => {
    //instead of using constructor, you shoould use hooks, first import it onn first line
    const [title, setTitle] = useState("سلام به همگی"); // داخل یوز استیت مفدار اولیه به تایتل میدم و تابع ست تایتل مث استیتن می مونهه
    const [isLight, SetIsLight] = useState("false");
    // const handleSetTitle = () => {
    //     setTitle("وارد تابع شدم")
    // }

    //برای اولینن بار که صفحه من رندر میشه ، یوزافکت هم اجرا می شه
    //و هرموقع ایزلایت تغییر کرد
    useEffect(() => {
        console.log('use effect')
        // داخل این هرچی بنویسی موقعی که کامپوننتت بسته شد صداش می زنه
        return () => {
            
        }
    }, [isLight]);
    const handleSetIsLight = () => {
        SetIsLight(!isLight)
    }
    return (
        //parnet div :
        <div className='main' style={{ background: isLight ? "white" : "black" }}>
            <Hello t={title} />
            <Timer isLight={isLight} x={handleSetIsLight} />
        </div>
    )
}
export default App