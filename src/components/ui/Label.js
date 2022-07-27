import styled from "styled-components";

export const Label = styled.label`
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xs};
  svg{
    margin-right: ${p => p.theme.space[0]}px;
  };
`;