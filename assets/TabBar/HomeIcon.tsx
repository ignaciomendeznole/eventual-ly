import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function HomeIcon(props: SvgProps) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={22.325}
      height={24.583}
      viewBox='0 0 22.325 24.583'
      {...props}
    >
      <G
        data-name='Icon feather-home'
        fill='#fff'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      >
        <Path
          data-name='Trazado 17'
          d='M1 8.9L11.163 1l10.163 7.9v12.425a2.258 2.258 0 01-2.258 2.258H3.258A2.258 2.258 0 011 21.325z'
        />
        <Path data-name='Trazado 18' d='M7.775 23.584V12.292h6.775v11.292' />
      </G>
    </Svg>
  );
}

export default HomeIcon;
