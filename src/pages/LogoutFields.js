import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import 'codegrounds/styles/App.css';

export function LogoutFields() {
    const history = useHistory()

    useEffect(async () => {
        const testResult = await fetch('https://codegrounds.atale.me/v1/authentication/test', {
            method: 'POST',
            credentials: 'include'
        })

        console.log(testResult)
        console.log(await testResult.json())

        if (testResult.status === 200) {
            const logoutResult = await fetch(`https://codegrounds.atale.me/v1/authentication/logout`, {
                credentials: 'include',
            })

            console.log(logoutResult)
            history.push('/')
        }
    });

    return (
        <div className="LoginPage">

            <div className="LoginPageContainer">
            </div>
        </div>
    );
}
