import React, {Component} from 'react';
import './App.css';
import Modal from "./components/UI/Modal/Modal"
import Alert from "./components/UI/Alert/Alert"



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.showModal = false;
        this.state.showAlert = false;
    }

    showModal = () => {
        this.setState({showModal: true});
    };

    closeModal = () => {
        this.setState({showModal: false});
    };

    showAlert = () => {
        this.setState({showAlert: true});
    };

    closeAlert = () => {
        this.setState({showAlert: false});
    };


    render() {
        return (
            <div className="App">
                <button
                    className="btn btn-primary mx-3" onClick={this.showModal}>Modal
                </button>

                <Alert
                    show={this.showAlert} type={"alert-primary"} dismiss={this.closeAlert}><p>This is danger type alert!</p>
                </Alert>

                <Modal
                    show={this.state.showModal} close={this.closeModal} title={"Any title"} modalCancelled={this.closeModal}>
                    <p> Some text here</p>
                </Modal>

            </div>
        );
    }
}

export default App;
