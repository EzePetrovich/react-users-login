import { Box, SxProps } from '@mui/material';

type AlignItemsProps =
  | 'start'
  | 'center'
  | 'end'
  | 'left'
  | 'right'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline';

type AlignContentProps =
  | 'start'
  | 'center'
  | 'end'
  | 'left'
  | 'right'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

interface BoxFlexProps {
  children: JSX.Element | JSX.Element[];
  component?: 'div' | 'form';
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?: AlignContentProps;
  justifyItems?: AlignItemsProps;
  justifySelf?: AlignItemsProps;
  placeItems?: AlignItemsProps;
  placeContent?: AlignContentProps;
  placeSelf?: AlignItemsProps;
  alignContent?: AlignContentProps;
  alignItems?: AlignItemsProps;
  alignSelf?: AlignItemsProps;
}

export const BoxFlex = ({
  flexDirection = 'row',
  justifyContent,
  justifyItems,
  justifySelf,
  placeItems,
  placeContent,
  placeSelf,
  alignContent,
  alignItems,
  alignSelf,
  component = 'form',
  children,
}: BoxFlexProps) => {
  const boxFlexStyles: SxProps = {
    display: 'flex',
    flexDirection,
    justifyContent,
    justifyItems,
    justifySelf,
    placeItems,
    placeContent,
    placeSelf,
    alignContent,
    alignItems,
    alignSelf,
  };

  return (
    <Box
      sx={boxFlexStyles}
      component={component}
      noValidate={component == 'form'}
    >
      {children}
    </Box>
  );
};
