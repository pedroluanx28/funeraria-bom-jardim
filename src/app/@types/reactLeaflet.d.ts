import { MapContainerProps } from "react-leaflet";

declare module "react-leaflet" {
    interface MapContainerProps extends MapContainerProps {
        center: number[];
    }
}
