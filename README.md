# Tarot - WIP

A simple app that gets information on tarot cards from the [Tarot API](https://github.com/ekelen/tarot-api).  
Users can pull one or three cards for now, and receive an image and keywords associated with that card (when pulled up).  

## TODO:
- create a component to show individual card information
- only refresh the card details component not the whole page
- routes?... 
- ...look into next.js
- polish/jazz it up 

## Challenges

### Importing the images

The API doesn't actually return the images, so I had downloaded these separately into the `assets` folder.  
There was no key or name for the image file names in the data returned. However there is a short name so I wrote a function to convert the short name into a valid file name. E.g. the short name might be 'ar05' which refers to major arcana, but the corresponding image filename would be 'm05'.  
I also needed a way to import only the required image file. There are 78 cards so I think this is a pretty short way to handle it:  

```
    // intepret the short name to retrieve the right card image
    function getImgCode(card) {
        const name = card.name_short;
        // get the first character
        let letter = name.slice(0,1);
        // get the last 2 characters
        let lastNums = name.slice(2);

        // get major arcana
        if (letter === 'a') {
            letter = 'm'
        } 

        // get minor arcana
        if (lastNums === 'ac') { // ace
            lastNums = '01'
        } else if (lastNums === 'pa') { // page
            lastNums = '11'
        } else if (lastNums === 'kn') { // knight
            lastNums = '12'
        } else if (lastNums === 'qu') { // queen
            lastNums = '13'
        } else if (lastNums === 'ki') { // king
            lastNums = '14'
        }

        const code = letter+lastNums;
        return code;
    }
```

To import the images:  
I googled 'react import images dynamically' and came across this stack overflow answer that describes using custom hooks. I didn't have any experience with this yet so I'm not 100% on how it works but I gave it a try. It basically means I can pass the fileName prop (my 'code' returned from the function above) and it will return the right image from the `assets/cards` folder without worrying about the full path.  

### github build issues - not resolved

On deploying to GitHub pages the app does not load, and these two messages are in the console.  

#### Warning: Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'.
Apparently this can be safely ignored but I managed to fix it by following these instructions and adding a meta tag to my `index.html` head. Now this error appears intermittently. Yay.


#### Error: GET https://mchlol.github.io/src/main.jsx net::ERR_ABORTED 404 (Not Found)
So we can see the file path is wrong. Apparently this is not unheard of using Vite. I tried these methods: 
- https://stackoverflow.com/a/75367844 - adding a `base` property to `vite.config.js`
- https://stackoverflow.com/a/70148453 - changing the build script in `package.json`
- adding . to the file path in `index.html`
- adding a homepage in `package.json`

## Resources

- [Tarot API](https://github.com/ekelen/tarot-api)
- [Stack Overflow](https://stackoverflow.com/a/70024111)