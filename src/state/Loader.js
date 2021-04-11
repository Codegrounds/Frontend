import { useEffect, useContext } from 'react';
import {LessonsContext} from "./LessonsContext";

export function Loader(props) {

    const {lessons, setLessons, chapters, setChapters} = useContext(LessonsContext)

    useEffect(() => { // on mount
        loadLessons()
    }, [])

    /*const lessonIDs = [
        'lesson_2'
    ]*/

    const toChapters = (lessonsDict) => {
        const dict = {}
        Object.keys(lessonsDict).forEach(lessonID => {
            let lessonData = lessonsDict[lessonID]
            if (dict[lessonData.chapter] === undefined) {
                dict[lessonData.chapter] = [lessonData]
            } else {
                dict[lessonData.chapter] = [...dict[lessonData.chapter], lessonData]
            }
        })
        return dict;
    }

    const loadLessons = async () => {

        const allID = await (await fetch('https://api-codegrounds.atale.me/v1/lesson/all')).json()
        const lessonIDs = allID.data.map(idDict => idDict.id)

        let dict = {}
        for (const lessonID of lessonIDs) {
            const res = await fetch(`https://api-codegrounds.atale.me/v1/lesson?id=${lessonID}`)
            const body = await res.json()

            const data = body.data;

            dict[lessonID] = {id: lessonID, name: data.name, chapter: data.chapter, type: data.type, markdown: data.markdown,
                shell_code: data.shell_code, expected_output: data.expected_output}
        }

        setLessons(dict)
        setChapters(toChapters(dict))
    }

    return (
        <div>
            {props.children}
        </div>
    );
}
