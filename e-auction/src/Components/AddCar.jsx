import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Header } from './Header';
import { saveCars } from '../Services/Cars_info';
import NavigationBar from './NavigationBar';
import FooterBar from "./FooterBar"
import { useNavigate } from "react-router-dom";

export const AddCar = () => {
    const [formData, setFormData] = useState({ make: "", model: "", p_year: "", price: "", color: "",email:"", s_name: "", s_num: "", s_add: "", s_city: "" });
    const [isSubmitted,setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        try {
            const result = await saveCars(formData)
            setIsSubmitted(true);
            setTimeout(()=>{
                setIsSubmitted(false);
            },2000);
            navigate('/carlist');
            console.log(result.message);
        } catch (error) {
            console.log(error)
        }
        setFormData({
            make: '',
            model: '',
            p_year: '',
            price: '',
            color: '',
            email:'',
            s_name: '',
            s_num: '',
            s_add: '',
            s_city: '',
        });
    };

    return (
        <> 
        <NavigationBar/>
        <Container>
        <Header text="Add New Car And Seller Info" align="centre"></Header>

        <Form onSubmit={handleSubmit}>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Make Of Vehicle</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={formData.make} 
                            placeholder="Enter Make Of Your Vehicle" 
                            name="make" 
                            onChange={handleChange} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Model Of Your Vehicle</Form.Label>
                        <Form.Control type="text" value={formData.model} placeholder="Enter Model Of your Car" name="model" required onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Purchase year of your vehicle</Form.Label>
                        <Form.Control type="number" value={formData.p_year} placeholder="Enter Purchase year" name="p_year" required onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Desired price for your vehicle</Form.Label>
                        <Form.Control type="number" value={formData.price} placeholder="Enter price" name="price" required onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Color of your vehicle</Form.Label>
                        <Form.Control type="text" value={formData.color} placeholder="Enter Color of your vehicle" required name="color" onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control type="text" value={formData.s_name} placeholder="Enter price" name="s_name" required onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Contact Number</Form.Label>
                        <Form.Control type="number" value={formData.s_num} placeholder="Enter Contact Number" name="s_num" required onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={formData.email} placeholder="Enter Email" name="email" required onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Address</Form.Label>
                        <Form.Control type="text" value={formData.s_add} placeholder="Enter your address" name="s_add" required onChange={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your City</Form.Label>
                        <Form.Control type="text" value={formData.s_city} placeholder="Enter your city" name="s_city" required onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Register</Button>
                    </Col>
                    
                </Row>
            </Form>
            <Row className='mt-3'>
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success"> Car Registered </Alert>:null}
                </Col>
            </Row>
            </Container>
            <FooterBar/>
        </>
    );
}

export default AddCar;
