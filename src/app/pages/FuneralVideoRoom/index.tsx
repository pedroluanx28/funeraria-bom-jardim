import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function FuneralVideoRoom() {
    return (
        <div className="d-flex flex-column min-h-100vh">
            <Header />

            <div className="text-center mb-6 flex-grow-1">
                <iframe
                    src="https://rtsp.me/embed/6TiNKR9s"
                    className="rounded"
                    style={{ width: "74.813rem", height: "42.063rem" }}
                />
            </div>

            <Footer />
        </div>
    );
}
