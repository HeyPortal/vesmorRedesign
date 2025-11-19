# React + TypeScript + Vite

Since I'm the only one developing this, this is just a reference for myself for everytime I come back to work on this website.

## Building
Run `npm run dev` to start it on the local network, this will automatically start the development server on localhost on the port specified in 'vite.config.ts':
```ts
  server: {
    port: 5173,
  },
```
To expose the developement server over the local network, you can either use `npm run host` or `npm run dev -- --host`
This will probably not work out of the box. It definitely doesn't work on WSL2 because it's a HyperV with its own network interface...I have not found a way to fix this yet so I just try to run it on Windows: this also doesn't work out of the box and I will update as I find solutions for this.

## Deploying
Deploying should be easy.  
After pushing whatever main branch I want to be tracked. Go ahead and run `npm run deploy` while in the development environment. This will run a predeploy script where it builds the packages, puts it into a /dist folder and then proceeeds to push only the /dist folder onto a new branch named gh-pages, where the website will deploy from.

## Resources 
I've been using [shadcnui](https://ui.shadcn.com/) components as a baseline but have made a lot of changes to them for styling so that they can try to fit into the theme of the website. I've also been using [magicui](https://magicui.design/), which is a similar component library for more 'flashy' buttons. To embed Links into these buttons, please remember to wrap the App componenet with the BrowserRouter component/service/thing.
```ts
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
```
That took me _way_ too long to figure out...  

*Edit 11/13/34:*  
So I had to switch from the BrowserRouter to the HashRouter because I have been hosting on Github Pages, and it does not play well with the BrowserRouter's technology. That is why when navigating around the website there is an ugly "#" on the URL.  


For the landing page, I used plain css to make the simple animation, but later on I switched to framer-motion. So this may not build well on top of each other later, but thus far I have yet to run into any problems. If need be, hopefully it should be simple to switch the landing page to framer-motion. For time sake I will keep this as is though.

## Why the switch from CRA to Vite
Because I wanted to use shadcn.... and the new cli they updated in ~August did not support CRA without a bunch of manual oversight, which I did not want to be worried about as I wanted to keep working on other projects than just this web portfolio.
