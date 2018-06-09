# KillWall Bookmarklet

This bookmarklet attempts to kill website "walls" such as adblock-blockers and signup walls.

## How to install

To install this bookmarklet:
* copy the code from the [killwall bookmarklet.js](../blob/master/killwall%20bookmarklet.js) file
* add a new bookmark in your browser (for Chrome:  Bookmarks > Bookmark Manager > *tap dots in upper-right corner* )
* enter "KillWall" (or whatever you want) into the "NAME" field
* paste the copied code into the "URL" field
* save the new bookmark to your bookmark bar (or wherever you want)

## How to use

* tap the bookmarklet
* if that doesn't remove the wall, tap the "TRY AGAIN" button in the upper-right corner
* if that doesn't remove the wall, we're out of luck.  
* to revert all changes, refresh the page

## How it works

Website walls usually have to properties:  they fill most of the page, and they don't have much content compared to the useful part of the page.  When you tap the bookmarklet, it first hides any elements that meet that criteria.  Then it removes any code that prevents scrolling the page up and down.  

When you tap the "TRY AGAIN" button, it temporarily opens the page in a new window, copies the content before the wall appears, strips-out the Javascript that makes the wall appear, then replaces the content of the current window with that de-walled content.

## Sites where this won't work

KillWall won't work on sites that don't load the useful content until you've complied with their wall (e.g. Forbes.com).  It also won't work on pages that redirect to a new URL, unless you tap "TRY AGAIN" before the redirect occurs.

## Authors

* [@mattthew](https://github.com/jmattthew)

## License

This project is licensed under the MIT License - see the [LICENSE.txt](..blob/master/LICENSE.txt) file for details
