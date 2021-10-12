
import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";


export declare enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42
}

export enum PoolIds {
  poolBasic = 'poolBasic',
  poolUnlimited = 'poolUnlimited',
}

export interface Address {
  97?: string;
  56?: string;
  1?: string;
  4?: string;
}
export enum PoolCategory {
  "COMMUNITY" = "Community",
  "CORE" = "Core",
  "BINANCE" = "Binance",
  "ETHEREUM" = "ETHEREUM", // Pools using native BNB behave differently than pools using a token
  "AUTO" = "Auto",
}
export interface Token {
  symbol: string;
  address?: Address;
  decimals?: number;
  projectLink?: string;
}


export interface PoolConfig {
  sousId: number
  earningToken: Token
  stakingToken: Token
  poolCategory: PoolCategory
  tokenPerBlock: string
  sortOrder?: number
  isFinished?: boolean
}

export type Images = {
  lg: string
  md: string
  sm: string
  ipfs?: string
}

export type PageMeta = {
  title: string
  description?: string
  image?: string
}

export enum ConnectorNames {
  Injected = "injected",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
}