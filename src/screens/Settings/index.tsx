import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { LangEnum, UnitsEnum } from '~/enum';
import { useStores } from '~/hooks';
import Settings from './Settings';

const SettingsContainer: FC = () => {
  const { app, weather } = useStores();
  const { location } = app;

  const updateWeather = () => {
    weather.getCurrentWeather(location.lat, location.lon);
    weather.getForecastWeather(location.lat, location.lon);
  };

  const handleSwitchUnit = (unit: UnitsEnum) => {
    app.switchUnit(unit);
    updateWeather();
  };

  const handleSwitchLang = (lang: LangEnum) => {
    app.switchLang(lang);
    updateWeather();
  };

  return (
    <Settings
      handleSwitchUnit={handleSwitchUnit}
      handleSwitchLang={handleSwitchLang}
      activeUnit={app.unit}
      activeLang={app.lang}
    />
  );
};

export default observer(SettingsContainer);
