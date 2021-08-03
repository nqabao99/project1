/*
 * DescBar Messages
 *
 * This contains all the text for the DescBar component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.DescBar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the DescBar component!',
  },
});
