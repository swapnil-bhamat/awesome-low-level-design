import { TV, Radio } from './device';
import RemoteControl from './remoteControl';

// Creating instances of devices
const tv = new TV();
const radio = new Radio();

// Creating a remote control for the TV
const tvRemote = new RemoteControl(tv);
tvRemote.pressOn();
tvRemote.pressOff();

// Creating a remote control for the Radio
const radioRemote = new RemoteControl(radio);
radioRemote.pressOn();
radioRemote.pressOff();
