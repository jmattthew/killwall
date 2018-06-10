# KillWall Bookmarklet

This bookmarklet attempts to kill website "walls" such as adblock-blockers and signup walls.

## How to install

To install this bookmarklet:
* copy the code from the [killwall bookmarklet.js](../master/killwall%20bookmarklet.js) file
* add a new browser bookmark (for Chrome:  Bookmarks > Bookmark Manager > *tap dots in upper-right corner* )
* for the "NAME" field:  enter "KillWall" (or whatever you want)
* for the "URL" field:  paste in the copied code
* save the new bookmark to your bookmark bar (or wherever you want)

## How to use

* tap the bookmark to remove the wall
* if that doesn't work, tap the "TRY AGAIN" button in the upper-right corner
* if that doesn't, we're out of luck ¯\\\_(ツ)_/¯
* to revert all changes, simply refresh the page

## How it works

### Method 1

Website walls usually have two properties:  they fill most of the page, and they don't have much content compared to the useful part of the page.  This method hides any elements that meet that criteria, then removes any code that prevents scrolling the page up and down.  

### Method 2

This method temporarily opens the page within a new window.  It then copies the content of that window before the wall has appeared, but strips-out the Javascript code that makes the wall appear.  Finally, it replaces the content of the current window with that de-walled content and closes the temporary window.

### Trying again

By default for each website, the bookmarklet tries method-1.  When you tap the "TRY AGAIN" button, it tries method-2, and then remembers to use method-2 for the current website.  After that, tapping "TRY AGAIN" again will try method-1, and revert to using method-1 for this website.

## Sites where this won't work

KillWall bookmarklet can only remove the wall.  Therefore, it won't work on sites that force you to comply with their wall before fully loading the useful content (e.g. Forbes.com).  

Some websites redirect to a new web page that is all-wall and erase the browser history of the original page.  In these cases, method-1 won't work on the all-wall page.  Tap the "TRY AGAIN" button to use method-2 from now on.  Initially, method-2 won't either, since you're now on a different page, but it will work in the future.  Just go back to whatever link brought you to the original page, tap that link again, then quickly tap the KillWall bookmark before the redirect.

## Privacy

This bookmarklet doesn't collect, transmit, nor share any personally identifiable information nor any information about the websites that you visit.  The only data it save is your preferred wall-killing method for each website.  That data is only stored locally on your computer and never transmitted nor shared.  To view or edit this data, use your browser's cookie settings tools.  The bookmarklet code can only run if and when you tap your saved bookmark.  You can delete the bookmark at any time.  

## Authors

* [@mattthew](https://github.com/jmattthew)

## License

This project is licensed under the MIT License - see the [LICENSE.txt](../master/LICENSE.txt) file for details
