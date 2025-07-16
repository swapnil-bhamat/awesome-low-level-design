import { LightOnCommand, LightOffCommand, FanOnCommand, FanOffCommand } from './command';
import { Light, Fan } from './receiver';
import { RemoteControl } from './invoker';

const light = new Light();
const fan = new Fan();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const fanOn = new FanOnCommand(fan);
const fanOff = new FanOffCommand(fan);

const remote = new RemoteControl();

// Turning on the light
remote.setCommand(lightOn);
remote.pressButton();

// Turning off the light
remote.setCommand(lightOff);
remote.pressButton();

// Turning on the fan
remote.setCommand(fanOn);
remote.pressButton();

// Turning off the fan
remote.setCommand(fanOff);
remote.pressButton();
