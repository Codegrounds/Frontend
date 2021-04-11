import 'codegrounds/styles/App.css';
import openImg from 'codegrounds/images/OpenConsole.png'
import closeImg from 'codegrounds/images/CloseConsole.png'
import { useRef } from 'react';

export function Console({contents, open, setOpen, scrollDown}) {

    const textAreaRef = useRef(null);

    const handleTextAreaRef = (el) => {
        textAreaRef.current = el;
        scrollDown.current = () => {
            let bounds = textAreaRef.current.getBoundingClientRect()
            console.log(bounds)
            console.log(textAreaRef.current.scrollTop)
            console.log(textAreaRef.current.scrollHeight)
            textAreaRef.current.scroll({
                top: textAreaRef.current.scrollHeight,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div style={{width: '100%'}}>
            <div className="ConsoleTopBar">
                <img src={open ? closeImg : openImg} style={{width:30, height: 30, cursor: 'pointer', paddingRight: 20}} alt="toggle console" onClick={() => setOpen(!open)}/>
            </div>
            {open ?
                <div className="ConsoleTextArea" ref={handleTextAreaRef}>
                    {contents.split('\n').map(line => (
                        <p style={{margin: 0, padding: 0}}>{line}</p>
                    ))}
                </div>
                : null
            }
        </div>
    );
}
