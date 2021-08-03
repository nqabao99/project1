/*
 * BannerMovies Messages
 *
 * This contains all the text for the BannerMovies component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.BannerMovies';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the BannerMovies component!',
  },
});
