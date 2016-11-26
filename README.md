This project is designed to help get people started with test driven development using the newer features of Javascript ES6 and the Jasmine testing framework.

To set up the project locally

1.  git clone the repo
2.  npm install the dependencies
3.  run the sanity tests to make sure your setup is working ```gulp```

Now you're ready to write some tests.

There are two ways to run your jasmine tests.

##h2  Running and linting on the command line with ```gulp```
This is the default gulp command for the build and it is running the jasmine-cli command which you can find in tasks/jasmine-cli.

This will run your tests on the command line and will also lint your code.


##h2 Running tests in the browser with ```gulp jasmine-browser```
1.  Run ```gulp watch``` and leave it running while you work with your tests.
2.  In another tab, run ```gulp jasmine-browser```
3.  Open your browser to localhost:8888

This runs jasmine in the browser.  When you change your code, you'll need to hard refresh the web page.  On mac, this is cmd-shift-r, on windows, this is ctrl-shift-r.


From here, we suggest trying a [coding kata for daily TDD practice](https://medium.com/@marlenac/learning-tdd-with-katas-3f499cb9c492#.qqgc451gt).

[This repo](https://github.com/garora/TDD-Katas) has a nice list of katas.

We suggest saving your tests in the spec folder.  They'll need to have ```_spec.js``` at the end of the filename.

Implementation code goes in a similarly named file in the src folder.