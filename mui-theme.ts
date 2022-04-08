import { Theme, adaptV4Theme } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import {
  greyColor,
  muiXl,
  placeholderColor,
  primaryColor,
  primaryColorLight,
} from 'src/constants/styles';
import { IGlobalPolygonConfig, IMainColors } from 'src/typings/app';

export const theme = (
  mainColors: IMainColors | undefined,
  globalPolygonConfig: IGlobalPolygonConfig | undefined,
): Theme => {
  const temptheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1921,
      },
    },
  });
  console.log(':S::S::', temptheme.breakpoints.up('xl'));
  return createTheme(
    adaptV4Theme({
      typography: {
        fontFamily: [
          'Gilroy',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
        ].join(','),
        fontSize: 14,
      },
      spacing: 5,
      palette: {
        primary: {
          main: mainColors?.primaryColor || primaryColor,
          light: mainColors?.primaryColorLight || primaryColorLight,
          dark: mainColors?.primaryColor || primaryColor,
          contrastText: mainColors?.primaryColor || primaryColor,
        },
        secondary: {
          main: mainColors?.placeholderColor || placeholderColor,
          light: mainColors?.placeholderColor || placeholderColor,
          dark: mainColors?.placeholderColor || placeholderColor,
          contrastText: mainColors?.placeholderColor || placeholderColor,
        },
        grey: {
          // It's for the test!!1
          100: globalPolygonConfig?.static_body_color || greyColor,
          400: mainColors?.greyColor || greyColor,
        },
      },
      overrides: {
        MuiCssBaseline: {
          ':root': {
            '--app-static-body-color':
              globalPolygonConfig?.static_body_color || primaryColor,
            '--app-hover-body-color':
              globalPolygonConfig?.hover_body_color || primaryColor,
            '--app-primary-color': mainColors?.primaryColor || primaryColor,
            '--app-primary-color-light':
              mainColors?.primaryColorLight || primaryColorLight,
            '--app-placeholder-color':
              mainColors?.placeholderColor || placeholderColor,
            '--app-grey-color': mainColors?.greyColor || greyColor,
            '--crosstable-size': 1,
          },
          'html, body': {
            backgroundColor: `${mainColors?.filterBackgroundColor} !important`,
            margin: 0,
            height: '100%',
            width: '100%',
            fontSize: ' 0.875rem',
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
            [temptheme.breakpoints.up('xl')]: {
              fontSize: muiXl.fontSize,
            },
          },
          '#root': {
            height: '100%',
          },
          button: {
            outline: 'none',
          },
          'a, a:hover': {
            color: mainColors?.primaryColor || primaryColor,
          },
        },
        MuiButton: {
          root: {
            minWidth: '50px',
            borderRadius: '10px',
            [temptheme.breakpoints.up('xl')]: {
              fontSize: muiXl.fontSize,
            },
          },
        },
        MuiOutlinedInput: {
          root: {
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: mainColors?.placeholderColor || placeholderColor,
              },
            },
          },
          input: {
            padding: '17px 14px',
          },
          notchedOutline: {
            transition: 'border-color 0.2s',
            borderColor: '#EEEEEE',
          },
        },
        MuiPopover: {
          paper: {
            pointerEvents: 'auto',
          },
        },
        MuiFormControl: {
          root: {
            width: '100%',
          },
        },

        MuiFormControlLabel: {
          root: {
            marginLeft: '0px',
            marginRight: '0px',
            paddingRight: '16px',
          },
        },
        MuiFormLabel: {
          root: {
            marginBottom: '10px',
          },
        },
      },
    }),
  );
};
