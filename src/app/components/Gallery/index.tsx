import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type ImageProps = {
    src: string;
    alt: string;
};

export function Gallery() {
    function Image(props: ImageProps) {
        return (
            <img
                {...props}
                className="border-light-purple rounded-md w-100 h-17-5rem object-fit-cover"
            />
        );
    }

    return (
        <Row className="m-0">
            <Col lg={4} className="mb-4">
                <Image src="./logo.png" alt="asdasd" />
            </Col>

            <Col lg={4} className="mb-4">
                <Image src="./background.png" alt="asdasd" />
            </Col>

            <Col lg={4} className="mb-4">
                <Image src="./bom-jardim-background.png" alt="asdasd" />
            </Col>

            <Col lg={4}>
                <Image src="./floricultura.png" alt="asdasd" />
            </Col>

            <Col lg={4}>
                <Image src="./funeral-plan.png" alt="asdasd" />
            </Col>

            <Col lg={4}>
                <Image src="./test.png" alt="asdasd" />
            </Col>
        </Row>
    );
}
