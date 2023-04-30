import { Controller } from "@hotwired/stimulus";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export default class extends Controller {
  connect() {
    navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error.bind(this), options);
  }

  success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude: ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    const latitude = crd.latitude;
    const longitude = crd.longitude;

    // Send an AJAX request to the server
    fetch('/pages/update_latitude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      body: JSON.stringify({ latitude: latitude, longitude: longitude })
    })
    .then(response => {
      if (response.ok) {
        console.log('Latitude sent to the server successfully!');
      } else {
        console.error('Failed to send latitude to the server.');
      }
    })
    .catch(error => {
      console.error('An error occurred while sending latitude to the server:', error);
    });
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
}
