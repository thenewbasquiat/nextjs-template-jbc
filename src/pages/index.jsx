import { Jumbotron } from "@/components/Jumbotron";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <Container>
            <Jumbotron />
            <Link href="/about">About</Link>
        </Container>
    );
}