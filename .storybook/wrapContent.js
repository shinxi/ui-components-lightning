import React from 'react';
import classnames from 'classnames';
import ComponentSettings from './../lib/components/utils/ComponentSettings';

export default function wrapContent(options) {
  return story => (
    <ComponentSettings assetRoot={ options.assetRoot } portalClassName='slds'>
      <div className={ classnames('content-wrapper', options.className) }>{ story() }</div>
    </ComponentSettings>
  );
}
