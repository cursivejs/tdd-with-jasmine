This project is designed to help get people started with test driven development using the newer features of Javascript ES6 and the Jasmine testing framework.

To set up the project locally
1. git clone the repo
2. npm install the dependencies
3. Run ````gulp watch```` and leave it running while you work with your tests.
4. In another tab, run ```gulp jasmine-browser```
5. Open your browser to localhost:8888

You should see a failing test in the browser.

To fix it, open spec/example_spec.js and change the code in the test.
Can you make it pass?

From here, we suggest trying a [coding kata for daily TDD practice](https://medium.com/@marlenac/learning-tdd-with-katas-3f499cb9c492#.qqgc451gt).

[This repo](https://github.com/garora/TDD-Katas) has a nice list of katas.

We suggest saving your tests in the spec folder.  They'll need to have ```_spec.js``` at the end of the filename.

Implementation code goes in a similarly named file in the src folder.