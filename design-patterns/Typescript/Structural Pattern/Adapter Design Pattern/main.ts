import USB_A_Connector from './usbA_connector';
import USB_Adapter from './adapter';

const usbAConnector = new USB_A_Connector();
const adapter = new USB_Adapter(usbAConnector);
console.log(adapter.plugIn());
