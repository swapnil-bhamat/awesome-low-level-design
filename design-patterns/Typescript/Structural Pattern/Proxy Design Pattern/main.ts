import { ProxyImage } from '../../../typescript/structural/proxy/proxyImage';

const image = new ProxyImage('test.jpg');

console.log('First call to display:');
image.display();

console.log('\nSecond call to display:');
image.display();
