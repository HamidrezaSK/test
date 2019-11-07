import React, {Component} from 'react'
// import { connect } from 'http2'
import {connect} from "react-redux"
import {userSignUpRequest} from "../../_actions/authActions"
import {bindActionCreators} from "redux"
import {TextInput} from "react-responsive-ui";
import {MdClose} from "react-icons/all";
import {Button} from "react-bootstrap";
import Modal from "react-awesome-modal";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password1: '',
                username: '',
                password2: ''
            },
            toggle: false,
        }
        this.onChange = this.handleChange.bind(this);
        this.onSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.userSignUpRequest(this.state.data)
    }
    toggleModal = () => {
        this.setState({toggle: !this.state.toggle});
    };

    handleChange = (name, value) => {
        this.setState(prevState => {
            const newState = {...prevState};
            newState.data[name] = value;
            return newState;
        });
    };

    render() {

        return (
            <div>
                <div className="row justify-content-center link-to-signUp" onClick={() => {
                    this.toggleModal()
                }}>REGISTER
                </div>
                <Modal style={{overflowY: "auto"}} visible={this.state.toggle} effect="fadeInUp"
                       onClickAway={() => this.toggleModal()}>
                    <div className="container">
                        <div className="row mt-3 justify-content-start align-items-center">
                            <MdClose style={{fontSize: "2rem", cursor: "pointer"}} className="mr-4"
                                     onClick={() => this.toggleModal()}/>
                        </div>
                    </div>
                    <div className="container py-3 px-5" style={{direction: "ltr"}}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-12 align-items-center justify-content-center">
                                <form onSubmit={(event) => this.handleSubmit(event, this.state.data)}>
                                    <TextInput
                                        className="mb-4"
                                        type="text"
                                        label="username"

                                        value={this.state.data.username}
                                        onChange={(value) => {
                                            this.handleChange("username", value)
                                        }}
                                    />
                                    <TextInput
                                        className="mb-4"
                                        type="email"
                                        label="email"
                                        value={this.state.data.email}
                                        onChange={(value) => {
                                            this.handleChange("email", value)
                                        }}
                                    />
                                    <TextInput
                                        className="mb-4"
                                        type="password"
                                        label="password"
                                        value={this.state.data.password1}
                                        onChange={(value) => {
                                            this.handleChange("password1", value)
                                        }}
                                    />

                                    <TextInput
                                        className="mb-4"
                                        type="password"
                                        label="Re-password"
                                        value={this.state.data.password2}
                                        onChange={(value) => {
                                            this.handleChange("password2", value)
                                        }}
                                    />
                                    <div className="row justify-content-center mt-4">
                                        <Button variant="success" size="md" type="submit">register</Button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </Modal>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        userSignUpRequest
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp);