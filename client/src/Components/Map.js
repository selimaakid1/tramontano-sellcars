import React, { Component } from 'react'
import { GoogleMap, Map, GoogleApiWrapper, withScriptjs, withGoogleMap, Marker } from "react-google-maps"


export const WrappedMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 40.811069, lng: 14.619330 }}
    >
        {/* {props.isMarkerShown &&  */}
        <Marker position={{ lat: 40.811069, lng: 14.619330 }} />
    </GoogleMap>
))
