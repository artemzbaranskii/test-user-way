import React from 'react';
import { ReactComponent as Animation } from '../../svg/animation.svg';
import { ReactComponent as Arrow } from '../../svg/arrow.svg';
import { ReactComponent as BigCursor } from '../../svg/big-cursor.svg';
import { ReactComponent as BiggerText } from '../../svg/bigger-text.svg';
import { ReactComponent as Contrasts } from '../../svg/contrasts.svg';
import { ReactComponent as HighlightLinks } from '../../svg/highlight-links.svg';
import { ReactComponent as KeyboardNav } from '../../svg/keyboard-nav.svg';
import { ReactComponent as LegibleFonts } from '../../svg/legible-fonts.svg';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import { ReactComponent as ReadPage } from '../../svg/read-page.svg';
import { ReactComponent as Settings } from '../../svg/settings.svg';
import { ReactComponent as SocialChat } from '../../svg/chat-bubbles.svg';
import { ReactComponent as Tooltip } from '../../svg/tooltip.svg';
import { ReactComponent as Close } from '../../svg/close.svg';

import { ICON_TYPES } from '../../constants/iconTypes';


const LibIcon = ({ type, ...restProps }) => {
  switch (type) {
    case ICON_TYPES.animation:
      return <Animation {...restProps} />;

    case ICON_TYPES.arrow:
      return <Arrow {...restProps} />;

    case ICON_TYPES.bigCursor:
      return <BigCursor {...restProps} />;

    case ICON_TYPES.biggerText:
      return <BiggerText {...restProps} />;

    case ICON_TYPES.contrasts:
      return <Contrasts {...restProps} />;

    case ICON_TYPES.highlightLinks:
      return <HighlightLinks {...restProps} />;

    case ICON_TYPES.keyboardNav:
      return <KeyboardNav {...restProps} />;

    case ICON_TYPES.legibleFonts:
      return <LegibleFonts {...restProps} />;

    case ICON_TYPES.logo:
      return <Logo {...restProps} />;

    case ICON_TYPES.readPage:
      return <ReadPage {...restProps} />;

    case ICON_TYPES.settings:
      return <Settings {...restProps} />;

    case ICON_TYPES.socialChat:
      return <SocialChat {...restProps} />;

    case ICON_TYPES.tooltip:
      return <Tooltip {...restProps} />;

    case ICON_TYPES.close:
      return <Close {...restProps} />;

    default:
      return null;
  }
};

const Icon = props => {
  return (
    <LibIcon
      {...props}
    />
  );
};

export default Icon;
export { Icon };
