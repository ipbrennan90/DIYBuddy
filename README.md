# WELCOME TO DIY BUDDY!
This document will serve as a tutorial to create a react-native project as well
as a readme for the DIYBuddy Project. I plan to keep this app open source so
contributions are welcome, but at the moment this is a side project and things
may be slow. I also more than welcome criticism and pointers as this is my first
full scale attempt at using React-Native so any constructive criticism on best
practices and/or lack thereof are greatly appreciated.

### Getting Started
Ray Wenderlich gets all the credit for my limited understanding of React-Native.
His free tutorials are amazing and fast, wonderful for the jack of all trades
developer who wants to tinker to learn. The ol' TTL Dev, that's me. Here's a
link to his tutorial for getting started with [React-Native](https://www.raywenderlich.com/126063/react-native-tutorial).

Alright, after my ode to Ray let's dig in

First, you'll need to install some dependencies so your machine is ready to crush some React-Native code

If you don't have Homebrew you might as well be this guy:
![alt text](http://s8.favim.com/orig/150908/computer-funny-cat-meme-dog-meme-Favim.com-3260838.jpeg "Dog at Computer 1")

So go get [homebrew](http://brew.sh/), #levelup.

If you don't have Node, you might be in the wrong place but brew up node:

```
brew install node
```

Use homebrew to install watchman, a file watcher developed by the code czars at Facebook.

```
brew install watchman
```

Welcome to the world of instantaneous builds, if you're used to twiddling your thumbs, calling your mom, or checking in on [A Dark Room](http://adarkroom.doublespeakgames.com/) say goodbye to needless workplace fun and hello to non-stop productivity. If you're used to HMR well, good for you, nothing should impress you about watchman, but I promise you it's amazing. Save a file and watch the simulator reload. MAGIC.

Moving on, you'll need to install the React-Native command line interface so you can quickly get up and running. Time to install that baby now.

```
npm install -g react-native-cli
```

If you're not used to this npm thing, it's node's package manager. Much like Cocoapods or Carthage, this lets you add some sweet modules created by you or the open source community.

The CLI will allow you to now bust out your very first project:

```
react-native init DIYBuddy

```

You, of course, can replace DIYBuddy with whatever you want to name your project. DIYBuddy is such a great, and relatively cute name, so just think really hard before changing it. And there you have it we are up and running, react-native has basically just booted up a hello world app for ya. To run what you've so laboriously done so far:

```
react-native run-ios
```

You should see all sorts of stuff happening in your terminal, marvel at your computer doing computer things for a second, then, WHOA, another terminal pops up! DON'T TOUCH IT! This is your project doing it's thing, it is also watchman doing it's thing. Soon, you should see your IOS simulator pop up, it will load your initial project and this should appear:

![alt text](https://koenig-media.raywenderlich.com/uploads/2016/02/ReactNative-Starter-281x500.png "react native launch screen")

CMD+R is a really useful command if things get screwy. Also hit CMD+D and enable hot-reloading, or live reloading. This will add the absolutely killer feature of your simulator reloading every time it senses a file has changed, or every time you have saved a file. You can also enable remote debugging, this will open a browser window and anything you are logging will be able to be seen if you inspect the open browser page. I haven't done a deep dive into what else you can explore in the remote debugger but I'm sure there's lots of hidden gems in there. You can also hit the show inspector button, this magical feature will show you a browser-like tool where you can click on different elements and it will show you it's padding, margins, and other styles that you've added to the element, much like the chrome debugger or other browser inspectors. This, if you've been working with xcode, is an amazing little tool and is really, really, helpful with working out what exactly the styles you're applying are actually doing. You can also run the project in Xcode and use any of the handy debugging tools within just as you would with any other IOS app.

If, by chance, your application crashes right off the bat, or something wonky should occur. I would recommend shutting down the terminal that is running the application (the second one that popped up after the run-ios command) and running the run-ios command again.

Alright, let's start writing some react!


### Camera Branch

The first thing I want to do here is get the phone's camera up and running in the react app. This includes some things that might be a bit complicated for newcomers but I will try to be as thorough as possible, feel free to reach out if at any point you get lost.

We will be using a dependency to get into the camera on the phone. Consider yourself lucky that there are some geniuses out there doing your job for you:

```
npm install react-native-camera --save
```
This one is a little weird, it is allowing us to use code native to IOS to access the camera. In order to do that we have to do what's called linking. Luckily react-native allows us to do that in a simple command:

```
react-native link react-native-camera
```

in the above command, if you had multiple dependencies that needed linking, or maybe a dependency that you weren't sure of, but may need linking you can just run the above command without specifying a library to link like:

```
react-native link
```

cross your fingers and hope that react-native is as smart as it thinks it is. It will, in most cases, catch all the dependencies that require linking and link them automatically. If that doesn't work you can always [manually link them](https://facebook.github.io/react-native/docs/linking-libraries-ios.html).

Once this is done you can write up your camera

Checkout the branch feature/camera, to checkout the basic camera code.

###Adding a Navigator Branch

In this Branch we will be adding basic navigation by adding a NavigatorIOS Component as an overlay to our camera component. This is a design choice, it does add some unnecessary complication but I do believe it looks cool, so sometimes it's worth a few headaches along the way.
