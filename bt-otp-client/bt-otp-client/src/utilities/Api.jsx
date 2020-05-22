import * as React from 'react';
import EnvironmentUtils from '../utilities/Environment';

export default class ApiUtils extends React.Component {
    get = (baseUrl, endpoint) => {
        return new Promise((resolve, reject) => {
            new EnvironmentUtils().getEnviromentalValue(baseUrl).then(result => {
                fetch(result + endpoint).then(res => res.json()).then(res => { resolve(res); })
                    .catch(err => {
                        reject(err);
                    });
            })
        });
    }
}
