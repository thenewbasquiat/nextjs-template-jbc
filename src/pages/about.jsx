import Link from "next/link";
import { Container } from "react-bootstrap";

export default function About() {
    return (
        <Container>
            <p>Template created by John Branden Carrera @thenewbasquiat</p>
            <Link href="/">Home</Link>
        </Container>
    );
}