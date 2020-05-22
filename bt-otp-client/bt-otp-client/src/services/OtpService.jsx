import * as React from 'react';
import ApiUtils from '../utilities/Api';

export default class OtpServiceComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    get = (userId) => {
        return new Promise((resolve, reject) => {
            new ApiUtils().get('baseUrl', "otp" + "?userId=" + userId)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err);
                });
        })
    };
}
