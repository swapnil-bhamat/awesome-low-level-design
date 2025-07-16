import { ComputerBuilder } from './computerBuilder';

const myComputer = new ComputerBuilder('Intel', '4GB')
    .addStorage('1TB')
    .addMonitor('LG')
    .build();

console.log(myComputer);
