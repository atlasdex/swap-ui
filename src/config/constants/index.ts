import Metamask from 'components/Svg/Icons/Metamask';
import { Config, ConnectorNames } from './types';

export { default as poolsConfig } from './pools'



const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  }
];

export default connectors;

export const NetworkContextName = 'NETWORK'
  
