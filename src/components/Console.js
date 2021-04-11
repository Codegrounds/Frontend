import 'codegrounds/styles/App.css';

export function Console({contents, open, setOpen}) {

    return (
        <div className="ConsoleBounds" style={{height: open ? '20vh' : '3vh'}}>
            <p onClick={() => setOpen(!open)}>TOGGLE</p>
            {contents.split('\n').map(line => (
                <p>{line}</p>
            ))}
        </div>
    );
}
