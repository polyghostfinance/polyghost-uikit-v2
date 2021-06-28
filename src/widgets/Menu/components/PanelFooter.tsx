import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import LYDPrice from "./LydPrice";
import ThemeSwitcher from "./ThemeSwitcher";
import Text from "../../../components/Text/Text";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 5px;
`;

const SocialEntryX = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  padding-bottom: 50px;
`;

const PanelFooter: React.FC<Props> = ({ isPushed, pushNav, toggleTheme, isDark, lydPriceUsd }) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        <LYDPrice lydPriceUsd={lydPriceUsd} />
        {/* <SocialLinks /> */}
      </SocialEntry>
      <SettingsEntry>
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        <SocialEntryX>
          <a href="https://twitter.com/LydiaFinance">
            <Text small color="textSubtle">
              Twitter
            </Text>
          </a>
          <a href="https://t.me/LydiaFinance">
            <Text small color="textSubtle">
              Telegram
            </Text>
          </a>
          <a href="http://discord.gg/5sBmmVFSqk">
            <Text small color="textSubtle">
              Discord
            </Text>
          </a>
        </SocialEntryX>
        {/* <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} /> */}
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
