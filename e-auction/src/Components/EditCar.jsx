// import React, { useEffect, useState } from 'react';
// import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
// import { Header } from './Header';
// import { useParams } from 'react-router-dom';
// import { fetchCarByModel } from '../Services/Cars_info';

// export const EditCar = () => {

//     const params = useParams()
//     const [formData, setFormData] = useState({ make: "", model: "", p_year: "", price: "", color: "", email: "", s_name: "", s_num: "", s_add: "", s_city: "" });
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const handleChange = (e) => {
//         console.log("New value:", e.target.value);
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//         try {
//             // const result = await fetchCarByModel(param.model)
//         } catch (error) {
//             console.log(error)
//         }
//         setFormData({ make: '', model: '', p_year: '', price: '', color: '', s_name: '', s_num: '', s_add: '', s_city: '', email: '' });
//     };

//     const populateCarState = async () => {
//         try {
//             const result = await fetchCarByModel(params.model);
//             const data = Array.isArray(result) && result.length > 0 ? result[0] : {};
//             setFormData(result.Details);
//             console.log(result.Details)
//             console.log(formData)
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         populateCarState();
//     }, []);

//     return (
//         <>
//             <Container>
//                 <Header text="Update New Car And Seller Info" align="centre"></Header>
//                 {formData ?
//                     <Form onSubmit={handleSubmit}>
//                         <Row>
//                             <Col lg={4}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Make Of Vehicle</Form.Label>
//                                     <Form.Control type="text" value={formData.make} placeholder="Enter Make Of Your Vehicle" name="make" onChange={handleChange} />
//                                 </Form.Group>
//                             </Col>
//                             <Col lg={4}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Model Of Your Vehicle</Form.Label>
//                                     <Form.Control type="text" value={formData.model} placeholder="Enter Model Of your Car" name="model" onChange={handleChange} />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col lg={4}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Purchase year of your vehicle</Form.Label>
//                                     <Form.Control type="number" value={formData.p_year} placeholder="Enter Purchase year" name="p_year" onChange={handleChange} />
//                                 </Form.Group>
//                             </Col>
//                             <Col lg={4}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Desired price for your vehicle</Form.Label>
//                                     <Form.Control type="number" value={formData.price} placeholder="Enter price" name="price" onChange={handleChange} />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col lg={4}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Color of your vehicle</Form.Label>
//                                     <Form.Control type="text" value={formData.color} placeholder="Enter Color of your vehicle" name="color" onChange={handleChange} />
//                                 </Form.Group>
//                             </Col>
//                             <Col lg={4}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Enter your name</Form.Label>
//                                     <Form.Control type="text" value={formData.s_name} placeholder="Enter price" name="s_name" onChange={handleChange} />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col lg={4}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Your Contact Number</Form.Label>
//                                     <Form.Control type="number" value={formData.s_num} placeholder="Enter Contact Number" name="s_num" onChange={handleChange} />
//                                 </Form.Group>
//                             </Col>
//                             <Col lg={4}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Your Contact Number</Form.Label>
//                                     <Form.Control type="number" value={formData.email} placeholder="Enter Contact Number" name="s_num" onChange={handleChange} />
//                                 </Form.Group>
//                             </Col>
//                             <Col lg={4}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Your Address</Form.Label>
//                                     <Form.Control type="text" value={formData.s_add} placeholder="Enter your address" name="s_add" onChange={handleChange} />
//                                 </Form.Group>
//                             </Col>
//                             <Col lg={4}>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Your City</Form.Label>
//                                     <Form.Control type="text" value={formData.s_city} placeholder="Enter your city" name="s_city" onChange={handleChange} />
//                                 </Form.Group>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col lg={3}>
//                                 <Button variant="primary" type="submit">Register</Button>
//                             </Col>
//                         </Row>
//                     </Form> : <p>No Relevant Car Data Found</p>}
//                 <Row className='mt-3'>
//                     <Col lg={4}>
//                         {isSubmitted ? <Alert variant="success"> Car Registered </Alert> : null}
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// }

// export default EditCar;
