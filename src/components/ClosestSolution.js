import { h } from 'preact';
import { IntlProvider, Text } from 'preact-i18n';
import { StyleSheet } from 'aphrodite';
import { BASE, useStyles } from './base';
import { RESULT_CORRECT, RESULT_INCORRECT } from '../constants';

const ClosestSolution = ({ solution = '', result = RESULT_CORRECT }) => {
  const getElementClassNames = useStyles(CLASS_NAMES, STYLE_SHEETS, [ result ]);

  if (solution.trim() === '') {
    return null;
  }

  return (
    <IntlProvider scope="closest_solution">
      <h2 className={getElementClassNames(WRAPPER)}>
        <Text id="title">Closest solution:</Text>
        <div className={getElementClassNames(VALUE)}>
            <span>
              <span>{solution}</span>
            </span>
        </div>
      </h2>
    </IntlProvider>
  );
}

export default ClosestSolution;

const WRAPPER = 'wrapper';
const VALUE = 'value';

const CLASS_NAMES = {
  [BASE]: {
    // Copied from the direct wrapper of the "Correct solution" title and the corresponding value.
    [WRAPPER]: [ '_36Uyg' ],
    // Copied from the solution value.
    [VALUE]: [ 'TnCw3' ],
  },
  [RESULT_CORRECT]: {
    // Adds the "correct" color
    [WRAPPER]: [ '_11xjL' ],
  },
  [RESULT_INCORRECT]: {
    // Adds the "incorrect" color.
    [WRAPPER]: [ '_2QxbX' ],
  },
};

const STYLE_SHEETS = {
  [BASE]: StyleSheet.create({
    [WRAPPER]: {
      marginBottom: '10px',
    }
  }),
};
