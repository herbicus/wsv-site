/* eslint-disable import/no-extraneous-dependencies */
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Ref } from 'react';
import React, { forwardRef } from 'react';

interface SiteIconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  iconName?: string;
}

const SiteIcon = forwardRef<SVGSVGElement, SiteIconProps>(
  (props: SiteIconProps, ref: Ref<SVGSVGElement>) => {
    const { iconName, ...rest } = props;

    if (!iconName) {
      return null;
    }

    return <FontAwesomeIcon ref={ref} icon={iconName as IconName} {...rest} />;
  }
);

SiteIcon.displayName = 'SiteIcon';

export default SiteIcon;
