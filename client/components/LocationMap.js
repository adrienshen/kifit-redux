import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
 
export default function LocationMap (props) {
  return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            
            style={{
              height: "250px",
              marginTop: "25px",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={13}
            defaultCenter={{ lat: props.lat, lng: props.lng }}
          >
            {props.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}/>
              );
            })}
          </GoogleMap>
        }
      />
    </section>
  );
}
