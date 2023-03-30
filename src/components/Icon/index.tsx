import React, { FC, useEffect, useRef, useState } from 'react';

type Props = {
  icon: string;
  width?: number;
  height?: number;
};

const IconComponent: FC<Props> = ({ icon, width, height }) => {
  console.log('aquii,', icon);
  const ImportedIconRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        let imported;
        switch (icon) {
          case '01d':
            imported = await import('~/assets/icons/01d.svg');
            break;
          case '01n':
            imported = await import('~/assets/icons/01n.svg');
            break;
          case '02d':
            imported = await import('~/assets/icons/02d.svg');
            break;
          case '02n':
            imported = await import('~/assets/icons/02n.svg');
            break;
          case '03d':
            imported = await import('~/assets/icons/03d.svg');
            break;
          case '03n':
            imported = await import('~/assets/icons/03n.svg');
            break;
          case '04d':
            imported = await import('~/assets/icons/04d.svg');
            break;
          case '04n':
            imported = await import('~/assets/icons/04n.svg');
            break;
          case '09d':
            imported = await import('~/assets/icons/09d.svg');
            break;
          case '09n':
            imported = await import('~/assets/icons/09n.svg');
            break;
          case '10d':
            imported = await import('~/assets/icons/10d.svg');
            break;
          case '10n':
            imported = await import('~/assets/icons/10n.svg');
            break;
          case '11n':
            imported = await import('~/assets/icons/11n.svg');
            break;
          case '13d':
            imported = await import('~/assets/icons/13d.svg');
            break;
          case '13n':
            imported = await import('~/assets/icons/13n.svg');
            break;
          case '50d':
            imported = await import('~/assets/icons/50d.svg');
            break;
          default:
            imported = await import('~/assets/icons/01d.svg');
            break;
        }
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
    return <ImportedIcon width={width} height={height} fill="#000" />;
  }
  return null;
};

export default IconComponent;
