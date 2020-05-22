import * as React from 'react';
import OtpService from '../services/OtpService';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const renderTime = (generatedCode, remainingTime) => {
    return (
        <div>
            <div >Current Valid Code:</div>
            <div>{generatedCode}</div>
            <div>Valid for: {remainingTime.remainingTime}</div>
        </div>
    );

};

export default class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            otpService: new OtpService(),
            userID: null,
            showTimer: false,
            generatedCode: '',
            remainingTime: 30
        };
    }

    generateCode = () => {
        this.state.otpService.get(this.state.userID).then((data) => {
            this.setState(
                {
                    showTimer: true,
                    generatedCode: data.code,
                    remainingTime: data.remainingTime,
                });
        });
    }

    dataChanged = (event) => {
        this.setState({
            userID: event.target.value,
        });
    }



    renderComponent = () => {
        let timer;
        if (this.state.showTimer == true) {
            timer = <div key={this.state.generatedCode}>
                <CountdownCircleTimer
                    onComplete={() => {
                        this.setState({
                            showTimer: false,
                            generateCode: '',
                            userID: null,
                        });
                    }}
                    isPlaying
                    duration={this.state.remainingTime}
                    colors={[['#A30000']]}
                >
                    {(elapsedTime) =>
                        renderTime(this.state.generatedCode, elapsedTime)}
                </CountdownCircleTimer>
            </div>;
        }
        else {
            timer = <div></div>;
        }

        return (
            <div>
                <div>
                    <input type="text" onChange={this.dataChanged} name="userID" />
                    <button onClick={this.generateCode}>GenerateCode</button>
                </div>
                {timer}
            </div>
        )
    }

    render() {

        return (
            <div>
                {this.renderComponent()}
            </div>
        )
    }
}