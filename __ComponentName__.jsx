import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* IF class */
/* IF mobx */
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
/* ENDIF */
/* ENDIF */
import utils from 'core/utils';
import styles from './__ComponentName__.scss';

const PREFIX = '__ComponentName__';
const cx = utils.classnames(PREFIX, styles);


/* IF !class */
const __ComponentName__ = () => (
  <div>
    __ComponentName__
  </div>
);

__ComponentName__.propTypes = {

};
/* ENDIF */
/* IF class*/
/* IF mobx*/
class __ComponentName__Model {

}

@observer
/* ENDIF */
class __ComponentName__ extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  /* IF mobx*/
  constructor() {
    super();
    this.model = new __ComponentName__Model();
  }

  /* ENDIF */
  render = () => (
    <div className={cx('container')}>
      __ComponentName__
    </div>
  )
}
/* ENDIF */

export default __ComponentName__;
