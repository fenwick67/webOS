# webOS
web application pseudo OS for raspberry pi.  Think Chumby but based purely on web tech.

Architecture: 

* "window manager", needs to be barebones
* browser in kiosk mode - chromium or FF
* local server for configuration and options - Node?  How to bridge to Chromium... use Electron?

Hardware:

* raspberry pi
* need to ensure everything works with just arrows, enter, (back?) and home, or touchscreen

The browser basically has a landing page similar to FF or Chrome, but icons are pulled from web app manifests.  Web app URLs are pulled from a list either shipped with the distro or living on the web.  Node app will pull web app info from list and create a db of available apps.  This ensures an open ecosystem that is super simple to maintain.
