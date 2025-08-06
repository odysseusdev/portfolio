---
name: "Session Statistics"
description: "A modern companion to track your drinks"
url: "https://sessionstats.odysseusdev.app"
repository: "session-statistics"
favourite: true
---

## Overview

A web application to create sessions and keep track of drinking habits, including comparisons with friends and previous sessions.

## Background

As a young adult, a few of my mates and I began a tradition of getting together regularly, playing video games and having a few drinks. On many occasions, the rate of drinking became directly tied to your success in the video game.

**Mario Kart Wii** quickly became a favourite, due to its fast paced action, close finishes and regular breaks between races. A well known drinking game variant, called **don't drink and drive** involved consuming a drink each race, with the caveat that you must be stationary whilst drinking. Unfortunately, we quickly realized the optimal way to play this drinking game was to neck the drink as soon as the race starts and then race as normal.

We decided we wanted to play something that encouraged solid racing, as well as gradually making the criteria for drinking more difficult to avoid. Due to its reliance on skill and luck, everyone would drink at different rates, and we wanted to track everyone's statistics over the course of a session.

Seemed like a perfect excuse to get developing.

## Development

After many hours researching React component libraries, I settled on [**mantine**](https://v5.mantine.dev), which I quickly came to love. The documentation and customisation was solid and was easy to implement as a relatively new React dev at the time.

I settled on storing data locally via **indexeddb**, and implemented some fun little color and theme pickers. I also included some dynamicly colored images using [**undraw**](https://undraw.co/).

## Features

-   Track multiple sessions, drinks and drinkers
-   Data stored in **indexeddb**, meaning data isn't lost after a page refresh
-   Leaderboards and comprehensive charts to show trends
-   A very rudimentary BAC estimation tool
-   Responsive design, theme color picker and dark mode

## Contributors

![Contributors](https://contrib.rocks/image?repo=odysseusdev/session-statistics)
