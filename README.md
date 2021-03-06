# greenbelter.io ☀️ 🍃 🏞

This web-app displays useful information about the Barton Creek Greenbelt in Austin, TX. It will eventually be hosted at greenbelter.io.

## Directions

Most people who live in Austin know about the Greenbelt, but few know where each swimming hole is and how to get to each one. This project aims to solve that problem. Greenbelter provides directions to each swimming hole via Google Maps. The swimming holes featured in this project are:

* Hill of Life Dam
* Sculpture Falls
* Twin Falls
* Campbell's Hole
* Gus Fruh
* The Flats

## Water Status

Another problem people encounter when going to the Greenbelt is not knowing whether the creek will be swimmable when they get there. It is disappointing to hike for 30 minutes through the woods expecting to be rewarded with running water, only to find a dry creekbed. The water level and flow rate of the Barton Creek Greenbelt fluctuates frequently and depends greatly on recent rainfall.

Greenbelter uses live data from the USGS Water Services API to display the water depth and flow rate at various points in the creek. Flow rates are measured in cubic feet per second, and water depth is measured in feet. For a moving body of water to be considered safe to swim in, the flow rate must measure between 10 and 250 cubic feet per second, but when venturing into anything above 150cfs, use caution. When water is moving slower than 10cfs, there is the possibility of bacteria forming from standing water. It is possible to go tubing/kayaking on the greenbelt when the flow rate is between 150 and 300cfs, but please use extreme caution when doing so.

The point at which flow rates and water depth are measured are:

* Barton Creek at SH 71 near Oak Hill
* Barton Creek at Lost Creek Blvd.
* Barton Creek at Loop 360
* Barton Creek above Barton Springs

### Which data point corresponds to which swimming hole?

Displaying the water status for different swimming holes on the greenbelt is difficult because none of the swimming holes have a flow/depth meter specific to that location. Generally, if there is no water at Loop 360, there will be no water at Gus Fruh, Campbell's Hole, The Flats, and the water level will be quite low at Twin Falls. The two swimming holes that are most likely to have water when there is a dry spell are Hill of Life Dam and Sculpture Falls because they are the furthest upstream.

To determine if there is water at each swimming hole, the following data points should be considered:

* Hill of Life Dam & Sculpture Falls => Look at data for Lost Creek Blvd.
* Twin Falls => Look at data for Loop 360
* Campbell's Hole, Gus Fruh, and The Flats => Combination of Loop 360 and Barton Springs
