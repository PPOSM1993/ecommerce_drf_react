import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card, InputGroup } from 'react-bootstrap';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../Loader';
import Message from '../Message';
import { validEmail, valid, validPassword } from './Regex';
import { signup } from '../../actions/userActions';

function SignUpScreen() {
    const navigate = useNavigate()
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [message, setMessage] = useState("");
    const[show, changeshow] = useState("fa fa-eye-slash");
    const dispatch = useDispatch();
    const location = useLocation();

    const redirect = location.search?location.search.split("=")[1]: "/"

    const userSignup = useSelector((state) => state.userSignup);
    const {error, loading, userInfo} = userSignup;

    useEffect(() => {
        if(userInfo) {
            navigate("/")
        }
    }, [userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (pass1 !== pass2) {
            setMessage("Password do not Match")
            navigate("/signup")
        } else if (!validPassword.test(pass1)) {
            setMessage("Invalid Password")
        } else {
            dispatch(signup(fname, lname, email, pass1))
            setMessage("Signup is Success, Please Activate your Account")
            navigate("/login")
        }
    }

    const showPassword = () => {
        var x = document.getElementById("pass1");
        var z = document.getElementById("pass2");

        if(x.type === "password" && z.type === "password") {
            x.type = "text";
            z.type = "text";
            changeshow(`fa fa-eye`)
        } else {
            x.type = "password";
            z.type = "password";
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
                        <Card.Header as="h1" className='text-center bg-green text-dark'>Sign Up</Card.Header>


                        <Card.Body>

                            {message && <Message variant='danger'>{error}</Message>}
                            <Form onSubmit={submitHandler}>
                                <Form.Group className='mb-3' controlId='fname'>
                                    <Form.Label>
                                        {" "}
                                        <span>
                                            <i className='fa fa-user'></i>
                                        </span>{" "}
                                        First Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder='Enter your First Name'
                                        value={fname}
                                        onChange={(e) => setFname(e.target.value)}
                                        required
                                    >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='lname'>
                                    <Form.Label>
                                        {" "}
                                        <span>
                                            <i className='fa fa-user'></i>
                                        </span>{" "}
                                        Last Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder='Enter your Last Name'
                                        value={lname}
                                        onChange={(e) => setLname(e.target.value)}
                                        required
                                    >
                                    </Form.Control>
                                </Form.Group>

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
                                        { " " }
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

                                <Form.Group className="mb-3">
                                    {" "}
                                    <Form.Label>
                                        <span><i className={show}></i></span>{" "}
                                        Confirm Password
                                    </Form.Label>
                                    <br />
                                    <InputGroup className='mb-3' >
                                        <InputGroup.Checkbox onClick={showPassword} />{" "}
                                        <Form.Control
                                            placeholder="Confirm Password"
                                            required
                                            type="password"
                                            value={pass2}
                                            id="pass2"
                                            onChange={(e) => setPass2(e.target.value)}
                                        />
                                    </InputGroup>
                                </Form.Group>

                                <br />
                                <div className='d-grid gap-2'>
                                    <Button className='btn btn-sm btn-success' type='submit'>
                                        <i className="fa-solid fa-user-plus"></i>Sign Up</Button>
                                </div>


                            </Form>
                            <br />
                            <Row className='py-3'>
                                <Col>
                                    Already User? <Link to="/signin">Login</Link>
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

export default SignUpScreen
