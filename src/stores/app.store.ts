import { Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { check, PERMISSIONS, request } from 'react-native-permissions';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  Location as LocationType,
  locationMappers,
  LocationFromGeolocation,
} from '~/models';
import { PlatformOSType } from 'react-native/types';

const opt = { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 };

class AppStore {
  location: LocationType = {} as LocationType;

  deviceOs: PlatformOSType = Platform.OS;

  constructor() {
    makeAutoObservable(this);
  }

  getPermissionLocation = async (): Promise<void> => {
    try {
      if (this.deviceOs === 'ios') {
        const status = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
        if (status !== 'granted') {
          await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
        }
      }

      if (this.deviceOs === 'android') {
        const status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (status !== 'granted') {
          await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
      }
      await this.getLocation();
    } catch (err) {
      const error = err as Error;
      throw new Error(error.message);
    }
  };

  currentPosition = (): Promise<LocationFromGeolocation> =>
    new Promise((resolve, error) =>
      Geolocation.getCurrentPosition(resolve, error, opt),
    );

  getLocation = async (): Promise<void> => {
    const data = await this.currentPosition();
    runInAction(() => {
      this.location = locationMappers.mapLocation(data);
    });
  };
}
export default AppStore;
