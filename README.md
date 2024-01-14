# CV About Links - More About Me

## Getting Started

1. Clone the repo to your local machine
2. `cd` into the directory
3. `open index.html` to open the app in your browser

## Description

This is a quick webpage made as an addition to my CV to give some context to comments about myself for anyone that wishes to know a little more.
It was based upon an earlier project of mine, [Knot Very Useful](https://github.com/pablisch/knot-very-useful), which was a simple app to display a range of panelTopics and their descriptions.

Screenshot of the navbar, app knot selection and descriptions:
![navbar, app knot selection and descriptions](/images/readmeImages/knot-descriptions.png)

The app itself shows a range of panelTopics in the navbar and the same range displayed as tiles. Beneath the tiles is a video display window that can be used to play a video of the currently selected knot.

Hovering over either the knot tile or the navbar link will display a description of the knot. Clicking on either the knot tile or the navbar link will make the screen scroll smoothly down to the video window and display the video of the knot being tied.

Screenshot of the video window:
![video window](/images/readmeImages/knot-video.png)

## Notes on changing the apps used within this app

There are various places througout the app that will need editing to swap one of the showcased apps for a new one. This section will help to locate all the necessary changes.

##### In index.html
1. Navlink title (currently lines 29 to 34)
2. App panel `list` element requires a new image, title and description (e.g. app one is currently lines 61 to 69)
3. **If** changing the primary app (currently LUPO) you would need to change the default app section (currently lines 132 to 157)

##### In projectData.js
`ProjectData.js` is a file containing an array of project data objects in the order that they appear. There should always be six uncommented objects.
Place the new data object int he correct place, i.e. if it is the thrid panal and third navlink, place it as the third object, index 2.
Make sure you have all data fields included.

## Notes on re-ordering the apps used within this app

Just re-ordering the apps takes quite a bit of editing in this current format. This section will guide you through that process... at least where it needs doing.

##### In index.html
1. Navlink titles (currently lines 29 to 34). Re-order as required.
2. App panel `list` element contains an image, title and description (e.g. app one is currently lines 61 to 69). Re-order to match navlinks.
3. Within in each app panel `list` element, there is a `div` and a `span` element which have IDs of `panel-#-1` and `panel-#-2` respectively. These reference the order of the panels and need to run in consecutive order.
Example: if the 3rd panel content is moved up into 2nd position the IDs `panel-3-1` amd `panel-3-1` will need to be changed to `panel-2-1` and `panel-2-1`, and the reverse done to the previously second panel that has been shfted into thrid place. **NOTE:** It is always the first number in the class that denotes panel order.

##### In projectData.js
Reorder the project objects as needed within the array to match changes made in `index.html`.

## Technologies Used

- Vanilla JavaScript
- HTML
- CSS

## The app in action

As a little extra playful touch, all panelTopics fade to description and the title turns green when you hover over the navbar app logo.

Knot descriptions when hovering over tiles of nav links:
![knot descriptions](/images/readmeImages/knot-descriptions.gif)

Selecting a knot and playing the video:
![knot selection and video](/images/readmeImages/knot-video.gif)


