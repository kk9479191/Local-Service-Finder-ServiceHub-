import React from "react";

function Map({ location }) {

  return (
    <div className="mt-3">
      <iframe
        title="map"
        width="100%"
        height="200"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps?q=${location}&output=embed`}
      ></iframe>
    </div>
  );
}

export default Map;