import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type ImageProps = {
    src: string;
    alt: string;
};

export function Gallery() {
    function Image(props: ImageProps) {
        return <img {...props} className="rounded-md w-100 object-fit-cover" />;
    }

    return (
        <Row className="m-0">
            <Col lg={4} className="mb-4">
                <Image src="./gallery1.png" alt="asdasd" />
            </Col>

            <Col lg={4} className="mb-4">
                <Image src="./gallery2.png" alt="asdasd" />
            </Col>

            <Col lg={4} className="mb-4">
                <Image src="./gallery3.png" alt="asdasd" />
            </Col>

            <Col lg={4}>
                <Image src="./gallery4.png" alt="asdasd" />
            </Col>

            <Col lg={4}>
                <Image src="./gallery5.png" alt="asdasd" />
            </Col>

            <Col lg={4}>
                <Image src="./gallery6.png" alt="asdasd" />
            </Col>
        </Row>
    );
}
