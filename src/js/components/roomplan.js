import { setAttributes } from '../utils';
import {
  createMarker,
  createText,
  createFrame,
  createBox,
  calculateAvailability,
  loadJSON,
} from './utils';

export default class Roomplan {
  constructor() {
    this.scene = document.querySelector('#a-scene');
    this.markers = [];

    // load the marker from the server
    const response = loadJSON('https://freinbichler.me/apps/ar-room-backend/');
    response.then((m) => {
      this.markerActivities = m;
      this.init();
    });
  }

  init() {
    const markers = this.markerActivities;
    console.log(markers);

    Object.keys(markers).forEach((key) => {
      const marker = createMarker(key);

      const { free, duration } = calculateAvailability(markers[key]);
      const text = createText(this.getText({ free, duration }));
      const frame = createFrame(free);
      frame.map(box => (marker.appendChild(box)));
      marker.appendChild(text);

      this.scene.appendChild(marker);
      this.markers.push(marker);
    });

    // refresh every minute
    this.refresh();
  }

  getText({ free, duration }) {
    const freeText = free ? `free ${duration.humanizedDuration}` : 'not free';
    return freeText;
  }

  stopRefresh() {
    clearInterval(this.timer);
  }

  refresh() {
    this.timer = setInterval(() => {
      this.markers.map((marker) => {
        const text = marker.querySelector('a-text');
        const key = marker.getAttribute('value');
        const { free, duration } = calculateAvailability(this.markerActivities[key]);

        text.setAttribute('value', this.getText({ free, duration })); // TODO: fix this to set text correctly
      });
    // }, 60000);
    }, 2000);
  }

}
