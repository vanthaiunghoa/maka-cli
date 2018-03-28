### Update 2.10.0
Drinking Mocha! While I love me some Jasmine, I think it's best to support the officially supported testing driver by Meteor.  Now when you scaffold your application you may define the following flag:
```sh
$ maka create mocha-app --test=mocha
```
At the moment, I don't have it configured with coverage reports like I do with Jasmine, but that's on the list.  Also, Mocha runs in headless browser mode because there isn't a nice way to display the client tests to the browser like there is for Jasmine.  So all the server and client tests will show up in the server console.

To change this, just open up your config/development/env.sh file and change the variables there.


Enjoy!

## UPDATE 2.9.0
Good evening!

I've been away a little bit, but I just decided to come back! I come with a gift!  REFLUX!

If you don't know what reflux is... well you should find out.  If you DO, then please help yourself to the new
reflux client engine and generator.

```sh
$ maka create reflux-app --client=reflux
```

```sh
$maka g:template new-store --store
```

Look for the new store in:
```sh
$ reflix-app/app/imports/ui/stores/new-store
```

Now, "what about actions?!" you fervently ask?  I'm not sure where to put those at the moment.  For all my dealings, they
sit just fine right in the stores... maybe my ignorance... I'm open to suggestions (and yes, I've already thought of a
directory in ./ui called "actions" but if that makes the MOST sense then so shall it be).

I also want to turn your attention to the new option when creating apps to NOT include 'withTracker'.  I've thought about
this long and hard... and I find that trying to use testing, meteor's reactivity and just another layer has been ever so
exhausting.  I'm not saying I don't love Meteor... after all.. Meteor Apps Kick Ass!  I'm just saying I don't have to
LIKE withTracker right now.  So if you would like to skip the inclusion of withTracker use this option.

```sh
$ maka create no-track-app --skip-tracker
```

For existing apps, if you want to disable the withTracker you'll just need to go into the .maka/config.json and add the following to the object:

```json
...
"features": {
    "withTracker": "false"
}
...
```


Anywho... I also removed all those boiler plate docstrings from the react templates. I may have gotten carried away with the boilerplate... 