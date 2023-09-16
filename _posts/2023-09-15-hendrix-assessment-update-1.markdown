---
layout: post
title:  "Hendrix Assessment Update 1"
date:   2023-09-15 22:22:14 -0500
categories: update
---

It took some time getting started with the Hendrix Assessment project. The code isn't particularly well documented, so I spent quite a bit of time figuring out how everthing works. After I managed to get the gist of things, I successfully separated topic manager access and admin access. The problem was that the faculty who manage different topics are considered admin, but in an attempt to change the results that they could view, they unknowingly changed the entire database for everyone else. This said, we want to limit the power of topic managers so that this doesn't happen in the future.
