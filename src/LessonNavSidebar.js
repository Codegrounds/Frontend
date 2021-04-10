import './App.css';
import {useContext} from "react";
import {LessonsContext} from "./LessonsContext";
import {Link} from "react-router-dom";



function LessonNavSidebar({currentLessonID}) {

    const [lessons] = useContext(LessonsContext)

    return (
        <div className="LessonNavSidebar">
            {Object.keys(lessons).map(lessonID => (
                <Link to={'/lesson/'+lessonID}
                      style={{textDecoration: 'none', color: (currentLessonID === lessonID) ? 'yellow' : 'white', fontWeight: (currentLessonID === lessonID) ? 'bold' : 'normal'}}>
                    <p>{lessons[lessonID].name}</p>
                </Link>
            ))}
        </div>
    );
}

export default LessonNavSidebar;
