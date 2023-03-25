import { use, useEffect, useState } from "react"

const MacKeyboard = () => {
    const [keylog, setKeylog] = useState([])
    const [detectedKeys, setDetectedKeys] = useState([])
    const [undetectedKeys, setUndetectedKeys] = useState([])

    function keyHandler(event: any) {
        console.log(event.key)
    }

    function keylogHandler(event : React.KeyboardEvent){
        //setKeylog(event.key)
        let key = event.key
        setKeylog( prev => ([ ...prev, event.key]))
        if((key.match(/[a-z]/i) || key.match(/[A-Z]/i)) && key.length === 1 )
        {
            key = key.toUpperCase() // casting to remove case sensitivity
        }
        const theKey = document.querySelector(`[data-key="${key}"]`) // it fails for double quote - review it
        theKey?.classList.add('onKeyUp')
        theKey?.classList.remove('onKeyDown', 'animate-pulse')
    }

    function keyDownHandler(event: React.KeyboardEvent){
        let key = event.key
        if((key.match(/[a-z]/i) || key.match(/[A-Z]/i)) && key.length === 1 )
        {
            key = key.toUpperCase() // casting to remove case sensitivity
        }
        const theKey = document.querySelector(`[data-key="${key}"]`) // it fails for double quote - review it
        theKey?.classList.add('onKeyDown', 'animate-pulse')
        theKey?.classList.remove('onKeyUp')
    }

    useEffect(() => {
        console.log(keylog)
    }, [keylog])

    return (
        <div 
            onKeyDown={e => keyDownHandler(e)} 
            onKeyUp={e => keylogHandler(e)}
            tabIndex={-1} 
            className="h-screen text-center p-6"
        >
            <div className="title-section">
                <h1 className="text-3xl text-gray-600 pb-6"> Mac Keyboard </h1>
            </div>
            
            <div> 
            
            <div className="grid grid-rows-6 text-left keyboard">
                <section className="keylog-container max-w-4xl">
                    <p className="keylog"> 
                        {
                            keylog.map(key => (<span key={Math.random()} className="keylog-key"> {key} </span>))
                        }
                    </p>
                </section>
                <div className="w-full flex key-container">  
                    <div className="fn-key flex-auto" data-key="Escape"> esc </div>
                    <div className="fn-key flex-auto" data-key="F1"> F1 </div>
                    <div className="fn-key flex-auto" data-key="F2"> F2 </div>
                    <div className="fn-key flex-auto" data-key="F3"> F3 </div>
                    <div className="fn-key flex-auto" data-key="F4"> F4 </div>
                    <div className="fn-key flex-auto" data-key="F5"> F5 </div>
                    <div className="fn-key flex-auto" data-key="F6"> F6 </div>
                    <div className="fn-key flex-auto" data-key="F7"> F7 </div>
                    <div className="fn-key flex-auto" data-key="F8"> F8 </div>
                    <div className="fn-key flex-auto" data-key="F9"> F9 </div>
                    <div className="fn-key flex-auto" data-key="F10"> F10 </div>
                    <div className="fn-key flex-auto" data-key="F11"> F11 </div>
                    <div className="fn-key flex-auto" data-key="F12"> F12 </div>
                </div>
                <div className="w-full flex key-container"> 
                    <div className="fn-key flex-auto" data-key="`"> ` </div>
                    <div className="fn-key flex-auto" data-key="1"> 1 </div>
                    <div className="fn-key flex-auto" data-key="2"> 2 </div>
                    <div className="fn-key flex-auto" data-key="3"> 3 </div>
                    <div className="fn-key flex-auto" data-key="4"> 4 </div>
                    <div className="fn-key flex-auto" data-key="5"> 5 </div>
                    <div className="fn-key flex-auto" data-key="6"> 6 </div>
                    <div className="fn-key flex-auto" data-key="7"> 7 </div>
                    <div className="fn-key flex-auto" data-key="8"> 8 </div>
                    <div className="fn-key flex-auto" data-key="9"> 9 </div>
                    <div className="fn-key flex-auto" data-key="0"> 0 </div>
                    <div className="fn-key flex-auto" data-key="-"> - </div>
                    <div className="fn-key flex-auto" data-key="="> + </div>
                    <div className="del-key flex-auto" data-key="Backspace"> delete </div>
                </div>
                <div className="w-full flex key-container"> 
                    <div className="tab-key flex-auto" data-key="Tab"> tab </div>
                    <div className="fn-key flex-auto" data-key="Q"> Q </div>
                    <div className="fn-key flex-auto" data-key="W"> W </div>
                    <div className="fn-key flex-auto" data-key="E"> E </div>
                    <div className="fn-key flex-auto" data-key="R"> R </div>
                    <div className="fn-key flex-auto" data-key="T"> T </div>
                    <div className="fn-key flex-auto" data-key="Y"> Y </div>
                    <div className="fn-key flex-auto" data-key="U"> U </div>
                    <div className="fn-key flex-auto" data-key="I"> I </div>
                    <div className="fn-key flex-auto" data-key="O"> O </div>
                    <div className="fn-key flex-auto" data-key="P"> P </div>
                    <div className="fn-key flex-auto" data-key="["> { '[' } </div>
                    <div className="fn-key flex-auto" data-key="]"> { ']' } </div>
                    <div className="fn-key flex-auto" data-key="\"> | </div>
                </div>
                <div className="w-full flex key-container"> 
                    <div className="caps-key flex-auto" data-key="CapsLock"> caps lock </div>
                    <div className="fn-key flex-auto" data-key="A"> A </div>
                    <div className="fn-key flex-auto" data-key="S"> S </div>
                    <div className="fn-key flex-auto" data-key="D"> D </div>
                    <div className="fn-key flex-auto" data-key="F"> F </div>
                    <div className="fn-key flex-auto" data-key="G"> G </div>
                    <div className="fn-key flex-auto" data-key="H"> H </div>
                    <div className="fn-key flex-auto" data-key="J"> J </div>
                    <div className="fn-key flex-auto" data-key="K"> K </div>
                    <div className="fn-key flex-auto" data-key="L"> L </div>
                    <div className="fn-key flex-auto" data-key=";"> ; </div>
                    <div className="fn-key flex-auto" data-key="'"> { "'"} </div>
                    <div className="return-key flex-auto" data-key="Enter"> Enter </div>
                </div>
                <div className="w-full flex key-container"> 
                    <div className="shift-key left flex-auto" data-key="Shift"> shift </div>
                    <div className="fn-key flex-auto" data-key="Z"> Z </div>
                    <div className="fn-key flex-auto" data-key="X"> X </div>
                    <div className="fn-key flex-auto" data-key="C"> C </div>
                    <div className="fn-key flex-auto" data-key="V"> V </div>
                    <div className="fn-key flex-auto" data-key="B"> B </div>
                    <div className="fn-key flex-auto" data-key="N"> N </div>
                    <div className="fn-key flex-auto" data-key="M"> M </div>
                    <div className="fn-key flex-auto" data-key=","> , </div>
                    <div className="fn-key flex-auto" data-key="."> . </div>
                    <div className="fn-key flex-auto" data-key="/"> / </div>
                    <div className="shift-key right flex-auto" data-key="Shift"> shift </div>
                </div>
                <div className="w-full flex key-container"> 
                <div className="control-key flex-auto" data-key="Control"> control </div>
                    <div className="option-key flex-auto" data-key="Alt"> option </div>
                    <div className="command-key flex-auto" data-key="Meta"> command </div>
                    <div className="space-key flex-auto" data-key="Space"> space </div>
                    <div className="command-key flex-auto" data-key="Meta"> command </div>
                    <div className="option-key flex-auto" data-key="Alt"> option </div>
                    <div className="left-key flex-auto" data-key="ArrowLeft"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <span className="up-down-key flex-auto" data-key="ArrowUp"> 
                        <div className="up-key flex-auto" data-key="ArrowUp"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg> 
                        </div>
                        <div className="down-key flex-auto" data-key="ArrowDown"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </span>
                    <div className="right-key flex-auto" data-key="ArrowRight">  
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MacKeyboard