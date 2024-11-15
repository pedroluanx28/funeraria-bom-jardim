import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Gallery1 from "@assets/gallery1.png";
import Gallery2 from "@assets/gallery2.png";
import Gallery3 from "@assets/gallery3.png";
import Gallery4 from "@assets/gallery4.png";
import Gallery5 from "@assets/gallery5.png";
import Gallery6 from "@assets/gallery6.png";

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
                <Image src={Gallery1} alt="asdasd" />
            </Col>

            <Col lg={4} className="mb-4">
                <Image src={Gallery2} alt="asdasd" />
            </Col>

            <Col lg={4} className="mb-4">
                <Image src={Gallery3} alt="asdasd" />
            </Col>

            <Col lg={4}>
                <Image src={Gallery4} alt="asdasd" />
            </Col>

            <Col lg={4}>
                <Image src={Gallery5} alt="asdasd" />
            </Col>

            <Col lg={4}>
                <Image src={Gallery6} alt="asdasd" />
            </Col>
        </Row>
    );
}
