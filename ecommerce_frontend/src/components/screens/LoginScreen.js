import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card, InputGroup } from 'react-bootstrap';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../Loader';
import Message from '../Message';
import { validEmail, valid, validPassword } from './Regex';

function LoginScreen() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [error, setError] = useState("");
    const [show, changeshow] = useState("fa fa-eye");

    const submitHandler = (e) => {
        e.preventDefault()

    }

    const showPassword = () => {
        var x = document.getElementById("pass1");

        if (x.type === "password") {
            x.type = "text";

            changeshow(`fa fa-eye`)
        } else {
            x.type = "password";
            changeshow(`fa fa-eye-slash`)
        }
    };

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <br /><br /><br />
                    <Card >
                        <Card.Header as="h1" className='text-center bg-green text-dark'>Login</Card.Header>


                        <Card.Body>

                            {error && <Message variant='danger'>{error}</Message>}
                            <Form onSubmit={submitHandler}>
                                <Form.Group className='mb-3' controlId='email'>
                                    <Form.Label>
                                        {" "}
                                        <span>
                                            <i className='fa-solid fa-envelope'></i>
                                        </span>{" "}
                                        Last Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        {" "}
                                        <span><i className={show}></i></span> {" "}
                                        Password
                                    </Form.Label>
                                    <br />
                                    <InputGroup className='mb-3'>
                                        <InputGroup.Checkbox onClick={showPassword} />{" "}
                                        <Form.Control
                                            placeholder="Enter Your Password"
                                            required
                                            type="password"
                                            value={pass1}
                                            onChange={(e) => setPass1(e.target.value)}
                                            id="pass1"
                                        />
                                    </InputGroup>
                                </Form.Group>


                                <br />
                                <div className='d-grid gap-2'>
                                    <Button className='btn btn-sm btn-success' type='submit'>
                                        <i className="fa-solid fa-user-plus"></i>Login</Button>
                                </div>


                            </Form>
                            <br />
                            <Row className='py-3'>
                                <Col>
                                    Yo dont have Account? <Link to="/signup">Signup</Link>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}

export default LoginScreen
