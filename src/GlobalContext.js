import {LessonsProvider} from "./LessonsContext";

function GlobalProvider(props) {

    return (
        <LessonsProvider>
            {props.children}
        </LessonsProvider>
    );
}

export default GlobalProvider;
