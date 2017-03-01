# webOS
web application pseudo OS for raspberry pi.  Think Chumby but based purely on web tech.

Maybe name it Friendo?

Architecture: 

* "window manager", needs to be barebones
* browser in kiosk mode - chromium or FF
* local server for configuration and options - Node?  How to bridge to Chromium... use Electron?

Hardware:

* raspberry pi
* need to ensure everything works with just arrows, enter, (back?) and home, or touchscreen

The browser basically has a landing page similar to FF or Chrome, but icons are pulled from web app manifests.  Web app URLs are pulled from a list either shipped with the distro or living on the web.  Node app will pull web app info from list and create a db of available apps.  This ensures an open ecosystem that is super simple to maintain.

The beauty of this is that apps are decentralized and "installation" is just a fetch of a manifest.json and pulling the icon and name from that, and putting it on a homescreen.  

Idea land:

```
Phase 1:
electron app to launch into other web apps
Other app launching takes you to a URL, plus performs a JS inject
pressing some button takes you back "home"

Phase 2:
app management: add / remove from splash screen, have a database of app manifest URLs (NEDB?  Or just flat txt)
settings: change geolocation, timezone, app source
Ship with Alarm clock and music player apps - alarm clock is installed, music player is online, or possibly a custom inject of Google Play Music?
Determine how to manage different size apps - custom manifest elements for window creation?

Phase 3: input management
How do I enter keyboard input with a touchscreen?
How do I enter keyboard input with a D-pad?
Onscreen HTML Keyboard? <= probably, but need to trigger from Atom when input is selected
matchbox keyboard?

Phase 4: 
More settings control...
wifi

Phase 5:
full distro
b2g type OS?
raspberry pi image

```
