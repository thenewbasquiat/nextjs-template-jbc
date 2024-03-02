import { Jumbotron } from "@/components/Jumbotron";
import { Button } from "react-bootstrap";

export function Jumbotron() {
    return (
        <Row>
            <Col>
                <h1>Here</h1>
                <p>Hello World</p>
                <Button variant="primary">CTA</Button>
            </Col>
        </Row>
    );
}