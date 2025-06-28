---
name: "Am I Drunk?"
description: "Estimate your Blood Alcohol Concentration (BAC), and gauge how long it will take before you can drive"
url: "https://amidrunk.odysseusdev.app"
repository: "am-i-drunk"
favourite: false
---

## Overview

A web application to assist you in estimating your current Blood Alcohol Concentration (BAC), as well and provide an indication of how long it will take before you can drive.

## Background

Drinking is one of the foundational pillars of Australian social culture. Whether it's for sports, arts and music, or a social gathering at home, the availability to consume alcohol is always close by. Whilst most Aussies love a cold beer on a summer's day, there's naturally those that will take it too far.

Everyone consumes, absorbs and eliminates alcohol differently, and because of that, the classic **"2 standards in the first hour, and 1 standard each hour after that"** isn't always the best rule of thumb when it comes to playing it safe.

Over time a lot of people tend to understand their limits, however that often comes at the cost of trial and error, which is by no means appropriate when the consequences can be so high. So my mates and I did some digging to see if we could find something more reliable.

## Blood alcohol concentration calculators

Discussing the topic over a beer at the pub, we came across several **blood alcohol concentration calculators** online that take in some simple data points about yourself and the drinks you've consumed, and provides you with a quick estimate of where you land on the BAC spectrum.

I quickly identified two key problems that most of them had in common.

1. They had awful user experience and responsive design
2. They were often not transparent about the calculations they were using

I decided to create one of my own, hoping to resolve the above two concerns, but also to learn more about the science behind the actual calculations used for estimation.

## Development

This was my second delve into using the [**Mantine**](https://v6.mantine.dev) UI library, so the foundational layout and componentry (if that's a word?) came pretty quickly.

I did some very high-level research into BAC calculation and the usage of the **Windmark formula**, which I quickly came to realise only scratches the surface of an accurate calculation, so my initial focus was user experience.

Alcoholic drinks can come in various different formats, involving various different metrics of defining the alcohol content. For example, beer and premix drinks commonly use **standard drinks**, whereas spirits use the **alcohol by volume (ABV)**. Cocktails can then use any combination of these depending on the ingredients. With this in mind, having a streamlined way of providing drink data would be vital to improving the user experience of this application. The current implementation using the concept of **"parts"**, which allows multiple volumes of liquid (if applicable) of a specified metric to be added together to derive a drink.

I pumped out a quick and dirty version that solves the user experience problem, allowing my mates and I to track our night and estimate where we land, but it doesn't quite scratch the accuracy problem I'd aimed to achieve. Unfortunately I decided to move on to some other projects, but I desperately want to find the time to revisit and address some additional features (listed below under **"To be implemented"**).

## Features

-   Track multiple drinkers at once
-   Entered data is stored in **localStorage**, meaning data isn't lost after a page refresh
-   Gain insights into when it's safe to drive, or return to 0.00% \*\*
-   Responsive design

## To be implemented

-   More accurate calculations using additional data and real-world research papers and equations
-   Transparency of the above equations used by the application
-   A nice chunky disclaimer about using the estimations in a court of law \*\*

## Contributors

![Contributors](https://contrib.rocks/image?repo=odysseusdev/am-i-drunk)

## Notes

\*\* The application provides estimates only. These estimates should be used with caution, and will never be as accurate or reliable as a physical breathalyzer test. Data produced from this application cannot be used as evidence in a court of law.
