import React, { FC, useEffect, useRef, useState } from 'react';
import { icons, Icons } from '~/assets';

type Props = {
  icon: keyof Icons;
  width?: number;
  height?: number;
};

const IconComponent: FC<Props> = ({ icon, width = 64, height = 64 }) => {
  const ImportedIconRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        let imported = await icons[icon];
        ImportedIconRef.current = imported?.default;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [icon]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon width={width} height={height} />;
  }
  return null;
};

export default IconComponent;
