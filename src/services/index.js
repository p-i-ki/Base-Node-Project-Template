module.exports = {
  AirPlaneService: require("./airplane-service"),
  CityService: require("./city-service"),
};

// AirPlaneService: { createAirplane }
// access it like ->  AirPlaneService.createAirplane()

//  -> replace it with whatever you have exported in airplane-service file , for ex ->
// if you have exported it like module.exports = createAirplane
// then -> AirPlaneService: createAirplane
// access it like -> AirPlaneService()  will refer to createAirplane() method
