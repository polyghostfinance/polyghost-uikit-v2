import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.lydia.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.lydia.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/electrum",
  },
  // {
  //   label: "Lottery",
  //   icon: "TicketIcon",
  //   href: "/lottery",
  // },
  // {
  //   label: "NFT",
  //   icon: "NftIcon",
  //   href: "/nft",
  // },
  {
    label: "Audit",
    icon: "ShieldIcon",
    href: "/competition",
    status: status.SOON,
  },
  // {
  //   label: "Profile & Teams",
  //   icon: "GroupsIcon",
  //   items: [
  //     {
  //       label: "Leaderboard",
  //       href: "/teams",
  //       status: status.NEW,
  //     },
  //     {
  //       label: "YourProfile",
  //       href: "/",
  //     },
  //   ],
  //   calloutClass: "rainbow",
  // },
  {
    label: "Maximus",
    icon: "CrownIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://lydia.info",
      },
      {
        label: "Tokens",
        href: "https://lydia.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://lydia.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://lydia.info/accounts",
      },
    ],
  },
  // {
  //   label: "IFO",
  //   icon: "IfoIcon",
  //   items: [
  //     {
  //       label: "Next",
  //       href: "/ifo",
  //     },
  //     {
  //       label: "History",
  //       href: "/ifo/history",
  //     },
  //   ],
  // },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.lydia.finance",
      },
      {
        label: "Github",
        href: "https://github.com/lydia",
      },
      {
        label: "Docs",
        href: "https://docs.lydia.finance",
      },
      {
        label: "Blog",
        href: "https://lydia.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/LydiaFinance",
    // items: [
    //   {
    //     label: "English",
    //     href: "https://t.me/LydiaFinance",
    //   },
    // ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/LydiaFinance",
  },
  {
    label: "Discord",
    icon: "TwitterIcon",
    href: "https://discord.gg/5sBmmVFSqk",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
