/*
 * A Messages
 *
 * This contains all the text for the A component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.A';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the A component!',
  },
});
