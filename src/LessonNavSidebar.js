import './App.css';
import {useContext} from "react";
import {LessonsContext} from "./LessonsContext";
import {Link} from "react-router-dom";



function LessonNavSidebar() {

    const [lessons] = useContext(LessonsContext)

    return (
        <div className="LessonNavSidebar">
            {Object.keys(lessons).map(lessonID => (
                <Link to={'/lesson/'+lessonID} style={{textDecoration: 'none', color: 'white'}}>
                    <p>{lessons[lessonID]}</p>
                </Link>
            ))}
        </div>
    );
}

export default LessonNavSidebar;
