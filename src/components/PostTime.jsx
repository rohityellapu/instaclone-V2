import React from 'react'
import { useCallback,useEffect, useState } from 'react';


function PostTime({ date }) {

    let [posted, setPosted] = useState('');

    let setTime = useCallback(() => {
        let time = new Date().getTime() - date.getTime()
        let changingtime = time;
        let milliFormat = { year: 31536000000, month: 2419200000, day: 86400000, hour: 3600000, minute: 60000, second: 1000 }
        let changeTime = () => {
            for (let key of Object.keys(milliFormat)) {
                if (time >= milliFormat[key]) {
                    changingtime = milliFormat[key];
                    break;
                }
            }
        }
        changeTime()
        for (let key of Object.keys(milliFormat)) {
            if (time >= milliFormat[key]) {
                let actualTime = Math.floor(time / milliFormat[key]);
                if (actualTime > 1) setPosted(`${actualTime} ${key}s ago`)
                else setPosted(`a ${key} ago`);
                break;
            }
        }

        setTimeout(setTime, changingtime);
    }, [date])

    useEffect(() => {
     setTime()
    }, [setTime])

    return (
        <>
            { posted }
        </>
    )
}

export default PostTime