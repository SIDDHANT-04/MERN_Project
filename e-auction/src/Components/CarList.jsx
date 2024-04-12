import { useEffect, useState } from "react";
import { Button, Container, Modal, Table, Form, Row, Col } from "react-bootstrap";
import { deleteCar, fetchCars } from "../Services/Cars_info";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import FooterBar from "./FooterBar";
import NavigationBar from "./NavigationBar";

export function CarList() {
    const [cars, setCars] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedModel, setSelectedModel] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [filter, setFilter] = useState({
        model: "",
        companyName: "",
        purchaseYear: "",
        price: "",
        city: ""
    });
    const navigate = useNavigate();

    const openModalDialog = () => {
        setShowDialog(true);
    };
    const closeModalDialog = () => {
        setShowDialog(false);
    };
    async function populateCarsState() {
        try {
            const data = await fetchCars();
            setCars(data.Details);
            console.log(data.Details);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        populateCarsState();
    }, []);

    const handleCarDelete = async () => {
        try {
            await deleteCar(selectedModel);
            await populateCarsState();
        } catch (error) {
            console.log(error);
        }
    };

    const applyFilters = () => {
        // Filter the cars based on the filter object
        const filtered = cars.filter((car) => {
            return (
                car.model.toLowerCase().includes(filter.model.toLowerCase()) &&
                car.s_name.toLowerCase().includes(filter.companyName.toLowerCase()) &&
                car.p_year.toString().includes(filter.purchaseYear) &&
                car.price.toString().includes(filter.price) &&
                car.s_city.toLowerCase().includes(filter.city.toLowerCase())
            );
        });
        return filtered;
    };

    const handleSearch = () => {
        const filteredCars = applyFilters();
        setCars(filteredCars);
    };

    const resetFilters = () => {
        setFilter({
            model: "",
            companyName: "",
            purchaseYear: "",
            price: "",
            city: ""
        });
        populateCarsState();
    };

    return (
        <>
            <NavigationBar />
            <Container>
    
                <Header text="List of all cars"></Header>
                <Button
                        variant="secondary"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        {showFilters ? "Hide Filters" : "Show Filters"}
                    </Button>
                <Row>
                    <Col xs={12} md={showFilters ? 9 : 12}>
                        {cars.length !== 0 ? (
                            <Table className="mt-5">
                                <thead>
                                    <tr>
                                        <td>Model</td>
                                        <td>Price</td>
                                        <td>Purchase Year</td>
                                        <td>Seller name</td>
                                        <td>Email</td>
                                        <td>City</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {applyFilters().map((c) => {
                                        return (
                                            <tr key={c._id}>
                                                <td>{c.model}</td>
                                                <td>{c.price}</td>
                                                <td>{c.p_year}</td>
                                                <td>{c.s_name}</td>
                                                <td>{c.email}</td>
                                                <td>{c.s_city}</td>
                                                <td>
                                                    <Button
                                                        variant="danger"
                                                        onClick={() => {
                                                            openModalDialog();
                                                            setSelectedModel(c._id);
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>{" "}
                                                    &nbsp;&nbsp;&nbsp;
                                                    <Button
                                                        variant="primary"
                                                        onClick={() => {
                                                            navigate(`/edit/${c._id}`);
                                                        }}
                                                    >
                                                        Edit
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        ) : (
                            <p>No Cars Found</p>
                        )}
                    </Col>
                    {showFilters && (
                        <Col xs={12} md={3}>
                            <div className="filter-sidebar">
                                <Form>
                                    <Form.Group controlId="model">
                                        <Form.Label>Model</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter model"
                                            value={filter.model}
                                            onChange={(e) =>
                                                setFilter({ ...filter, model: e.target.value })
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="companyName">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter company name"
                                            value={filter.companyName}
                                            onChange={(e) =>
                                                setFilter({
                                                    ...filter,
                                                    companyName: e.target.value
                                                })
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="purchaseYear">
                                        <Form.Label>Purchase Year</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter purchase year"
                                            value={filter.purchaseYear}
                                            onChange={(e) =>
                                                setFilter({
                                                    ...filter,
                                                    purchaseYear: e.target.value
                                                })
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter price"
                                            value={filter.price}
                                            onChange={(e) =>
                                                setFilter({ ...filter, price: e.target.value })
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter city"
                                            value={filter.city}
                                            onChange={(e) =>
                                                setFilter({ ...filter, city: e.target.value })
                                            }
                                        />
                                    </Form.Group>
                                    <Button variant="primary" onClick={handleSearch}>
                                        Search
                                    </Button>{" "}
                                    <Button variant="secondary" onClick={resetFilters}>
                                        Reset
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    )}
                </Row>
                <div className="filter-toggle">
                    {/* <Button
                        variant="secondary"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        {showFilters ? "Hide Filters" : "Show Filters"}
                    </Button> */}
                </div>
                <Modal show={showDialog} onHide={closeModalDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Do you really want to delete {selectedModel}?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="success"
                            onClick={() => {
                                handleCarDelete(selectedModel);
                                closeModalDialog();
                            }}
                        >
                            Yes
                        </Button>
                        <Button variant="danger" onClick={closeModalDialog}>
                            No
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            <FooterBar />
        </>
    );
}