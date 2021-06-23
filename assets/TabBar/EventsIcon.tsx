import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function EventsIcon(props: SvgProps) {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={17.47}
      height={24.583}
      viewBox='0 0 17.47 24.583'
      {...props}
    >
      <Path
        data-name='Icon feather-framer'
        d='M1.414 16.056V8.528H16.47V1H1.414L16.47 16.056H8.942m-7.528 0l7.528 7.528v-7.528m-7.528 0h7.528'
        fill='#fff'
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      />
    </Svg>
  );
}

export default EventsIcon;
