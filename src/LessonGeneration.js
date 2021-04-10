import React, {useContext} from "react";

export function generateLesson(lessonName) {

    switch (lessonName) {
        case 'Lesson 1':
            return (
                <div>
                    This is page 1
                </div>
            )
        case 'Lesson 2':
            return (
                <div>
                    This is page 2
                </div>
            )
        default:
            return (
                <div>
                    unfinished page
                </div>
            )
    }
}
