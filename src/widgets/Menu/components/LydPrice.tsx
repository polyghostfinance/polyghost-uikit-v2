import React from "react";
import styled from "styled-components";
import { LydiaRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  lydPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const LydPrice: React.FC<Props> = ({ lydPriceUsd }) => {
  return lydPriceUsd ? (
    <PriceLink
      href="https://info.lydia.finance/tokens#/token/0x4c9b4e1ac6f24cde3660d5e4ef1ebf77c710c084"
      target="_blank"
    >
      <LydiaRoundIcon width="35px" mr="8px" />
      {/* <img
        width={30}
        height={30}
        style={{ marginRight: "8px" }}
        src="https://firebasestorage.googleapis.com/v0/b/lydiafinance-d806d.appspot.com/o/90_svg_logo.svg?alt=media&token=d05f1709-86c6-40d6-86da-2d9119c905a0"
      ></img> */}
      <Text color="textSubtle" bold>{` $${lydPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(LydPrice);
