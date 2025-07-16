import USB_A_Connector from './usbA_connector';

class USB_Adapter {
    private connector: USB_A_Connector;

    constructor(connector: USB_A_Connector) {
        this.connector = connector;
    }

    plugIn(): string {
        return this.connector.connect();
    }
}

export default USB_Adapter;
