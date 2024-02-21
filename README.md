Been spending alot of time not coding and learning, This is a mobile application to get familliar with React Native, and mobile development

The current goal of the project is to show spotify recommendations, and allow you to play them from the app (maybe even autoplay recommendations). Then you can "like" or "dislike" that recommendation

Problems I have encountered so far:
1) Getting SVG's in React Native is a pain compared to React. I ended up having to convert all the regular SVG components to an SVG framework. I probably could have used feather's framework but I wanted to keep this as light and flexible as possible.
2) I need the user to log into their spotify in order to control it, and provide them recommendations. This comes with a slew of challenges that I am currently working on:
    1) I wanted the login experience to be as fluid as possible without leaving the application. I've been working with a security method, PKCE (https://datatracker.ietf.org/doc/html/rfc7636), in order to provide authentication for the user
    2) The redirect URI is the biggest challenge here because I don't have a paid domain that I can use as a source of trust, and to route everything through.
    3) Also the "intent" model for ReactNative is handled by Expo, and It is difficult to find information about what URL I should be using
                  - Turns out for development mode I just use http://localhost/:port. and it's only when I build that I need to follow the "schema"
