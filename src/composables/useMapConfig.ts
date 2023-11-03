import {reactive, toRefs} from 'vue';

export interface MapConfigOptions {
    zoom: number;
    center: CenterPoint;
    mapStyle: string;
}

export type CenterPoint = {
    lat: number;
    lng: number;
}

export function useMapConfig() {
    const mapConfig: MapConfigOptions = reactive({
        zoom: 15,
        center: {lat: 39.50, lng: -98.35}, // Longitude, Latitude
        mapStyle: 'mapbox://styles/mapbox/satellite-v9',
    });

    // Methods to update map config
    function setZoom(zoom: number): void {
        mapConfig.zoom = zoom;
    }

    function setCenter(center: CenterPoint): void {
        mapConfig.center = center;
    }

    function setStyle(style: string): void {
        mapConfig.mapStyle = style;
    }

    // Return everything you want to expose to the components that use this composable
    return {
        ...toRefs(mapConfig),
        setZoom,
        setCenter,
        setStyle,
    };

}
