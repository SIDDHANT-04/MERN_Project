import React, { useEffect, useState } from "react";
import {Form, Button, Container, Row, Col } from "react-bootstrap";
import { fetchCarByModel,updateCarByModel } from "../Services/Cars_info";
import { useParams,useNavigate } from 'react-router-dom';
import FooterBar from "./FooterBar"
import NavigationBar from "./NavigationBar";

export function EditDeails() {
    const navigate = useNavigate();
    const [cars, setCars] = useState({ make: '', model: '', p_year: '', price: '', color: '', s_name: '', s_num: '',email:'', s_add: '', s_city: '', email: '' });
    const params = useParams();

    const populateCarsState = async () => {
        try {

            const data = await fetchCarByModel(params._id);
            if (data && data.Details) {
                setCars(data.Details);
                console.log(cars)
            }
           
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        populateCarsState();
    }, [params.model]);


    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedCars = [...cars];
        updatedCars[index] = {
            ...updatedCars[index],
            [name]: value
        };
        setCars(updatedCars);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await updateCarByModel(cars[0], params._id);
            navigate("/carlist");
        } catch (error) {
            console.log(error);
        }
    };
    

    return (
        <>
        <NavigationBar/>
<Container>
    {cars ?
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Make Of Vehicle</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={cars[0] ? cars[0].make : ''} 
                            placeholder="Enter Make Of Your Vehicle" 
                            name="make" 
                            onChange={(e) => handleChange(e, 0)} 
                        />
                    </Form.Group>
                </Col>
               <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Model Of Your Vehicle</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={cars[0] ? cars[0].model : ''} 
                            placeholder="Enter Model Of your Car" 
                            name="model" 
                            onChange={(e) => handleChange(e, 0)} 
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Purchase year of your vehicle</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={cars[0] ? cars[0].p_year : ''} 
                            placeholder="Enter Purchase year" 
                            name="p_year" 
                            onChange={(e) => handleChange(e, 0)} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Desired price for your vehicle</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={cars[0] ? cars[0].price : ''} 
                            placeholder="Enter price" 
                            name="price" 
                            onChange={(e) => handleChange(e, 0)} 
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Color of your vehicle</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={cars[0] ? cars[0].color : ''} 
                            placeholder="Enter Color of your vehicle" 
                            name="color" 
                            onChange={(e) => handleChange(e, 0)} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={cars[0] ? cars[0].s_name : ''} 
                            placeholder="Enter price" 
                            name="s_name" 
                            onChange={(e) => handleChange(e, 0)} 
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Contact Number</Form.Label>
                        <Form.Control 
                            type="number" 
                            value={cars[0] ? cars[0].s_num : ''} 
                            placeholder="Enter Contact Number" 
                            name="s_num" 
                            onChange={(e) => handleChange(e, 0)} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={cars[0] ? cars[0].email : ''} 
                            placeholder="Enter your Email" 
                            name="email" 
                            onChange={(e) => handleChange(e, 0)} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={cars[0] ? cars[0].s_add : ''} 
                            placeholder="Enter your address" 
                            name="s_add" 
                            onChange={(e) => handleChange(e, 0)} 
                        />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your City</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={cars[0] ? cars[0].s_city : ''} 
                            placeholder="Enter your city" 
                            name="s_city" 
                            onChange={(e) => handleChange(e, 0)} 
                        />
                    </Form.Group>
                </Col> 
            </Row>
            <Row>
                <Col lg={3}>
                    <Button variant="primary" type="submit">Update</Button>
                </Col>
            </Row>
        </Form> 
        : 
        <p>No Relevant Car Data Found</p>
    }                   
</Container>
<FooterBar/>
</>

    );
}

export default EditDeails;
