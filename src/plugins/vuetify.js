import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const lightTheme = {
     dark: false,
     colors: {
          background: '#fafafa',
          'background-light': '#d2d2d2',
          'background-dark': '#efefef',
          primary: '#e96e43',
     },
}

const darkTheme = {
     light: false,
     colors: {
          background: '#252525',
          'background-light': '#4e4e4e',
          'background-dark': '#393939',
          primary: '#e96e43',
     },
}

const vuetify = createVuetify({
     theme: {
          defaultTheme: 'darkTheme',
          themes: {
               lightTheme,
               darkTheme
             },
     },
     icons: {
          defaultSet: 'mdi', 
     },
});

export default vuetify