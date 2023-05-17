import React from "react";
import PropTypes from 'prop-types';
import 'components/icons/symbol-defs.svg';
import { CloseModalBtn } from "./IconCloseButton.styled";

const IconCloseButton = ({children, onClick, ...allyProps}) => (
    <CloseModalBtn type='button' onClick={onClick} {...allyProps}>
      {children}
        </CloseModalBtn>
)

IconCloseButton.defaultProps = {
    onClick: () => null,
    children: null,
}

IconCloseButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired,
}

export default IconCloseButton;