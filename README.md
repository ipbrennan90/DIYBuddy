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

In this Branch we will be adding basic navigation by adding a NavigatorIOS Component. This means stripping out our initial camera code and making it it's own component.

After doing that we need to add NavigatorIOS to our react-native import section, this is not a cross-platform navigator but I am sticking to IOS code for now since I do not own an android device at the moment. I will be making an attempt to do some cross platform adjustments later on. After NavigatorIOS is added to the import the index.ios.js should look really simple. Just a singe NavigatorIOS component that's initialRoute property points to the Camera component as the first component to load.

####Issues with react-native navigationbar

So, I initially thought I would use the built in navigation bar that comes out of the box with react native and is the same navigation bar seen when you use a navigationcontroller in native swift or objective-C. When trying to dynamically hide and show said navbar ran into a problem where the navbar could be hidden on the camera initially but there were no good event listeners for when a view was pushed on or popped off of the navigator. This meant hiding the navigation bar dynamically when popping off a view controller and returning to the Camera view was pretty much impossible. After a solid attempt at jerry rigging a viewdidappear function I decided to just jump in and make my own navbar so I would have complete control of the navigation bar showing up and getting hidden, as well as the callbacks from hitting the left or right side buttons on said NavBar. On top of all that I learned a good lesson in creating dynamic styles through adding functions that return style code blocks. All of this code is available to see if you check out the feature/basic-navigation branch and look at the NavBar component file. I have also added eslint in this branch, should have done this from the get-go, but better late than never. I found a straightforward and thorough tutorial of how to add it and make it play nicely with react-native [here](https://medium.com/the-react-native-log/getting-eslint-right-in-react-native-bd27524cc77b#.4a6c357x6). for those of you who don't know eslint is a great little tool that helps you write cleaner code with no un-used variables and every single semi-colon, which I sometimes forget when going back and forth between the languages.

####PropType Validation

This branch also was the first branch where component props came into play in a serious way. I have always been a fan of PropType validation as an extra layer of security when shooting from the hip in a loosely typed language such as Javascript. PropType validation is a way that you can validate that the type of the prop getting passed into the component is of the type you expect. You can also require that a prop is passed in before a component gets loaded. If that prop is not passed, or is of a different type than specified your application will break, ensuring that you get this right, otherwise your app could break farther down the stack and it could not be caught or result in a bug that's harder to catch. The errors thrown by PropType validations are readable and will break immediately, making it easy to trace and easy to fix. So, how do you write them you ask? First step includes just adding PropTypes to your import from the react frame work. Then, within your component class definition you simply add a static variable, I like to add them at the top and it looks as simple as:

```
static propTypes = {
	title: PropTypes.string.isRequired,
	callback: PropTypes.function,
	person: PropTypes.object
}
```
