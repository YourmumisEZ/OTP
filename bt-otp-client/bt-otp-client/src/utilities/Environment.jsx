import * as React from 'react';
import request from 'superagent';

export default class EnvironmentUtils extends React.Component {
    loadConfigData = () => {
        return new Promise((resolve, reject) => {
            request.get("/config/config.json")
                .type("json")
                .accept("json")
                .then(configResponse =>
                    resolve(configResponse.body))
                .catch(err => {
                    reject(err);
                });
        })
    }

    getEnviromentalValue = (key) => {
        return new Promise((resolve, reject) => {
            this.loadConfigData().then(res => resolve(res[key]))
                .catch(err => {
                    reject(err);
                });
        })
    }
}