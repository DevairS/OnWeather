export interface LocationFromGeolocation {
  coords: {
    accuracy: number;
    altitude: number | null;
    altitudeAccuracy?: number | null;
    heading: number | null;
    latitude: number;
    longitude: number;
    speed: number | null;
  };
  mocked?: boolean;
  provider?: string;
  timestamp: number;
}

export interface Location {
  lat: number;
  lon: number;
}

export interface ILocationMappers {
  mapLocation(geolocation: LocationFromGeolocation): Location;
}
