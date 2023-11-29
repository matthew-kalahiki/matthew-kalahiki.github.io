---
layout: post
title:  "Hendrix Assessment Update 7"
date:   2023-11-10 22:22:14 -0500
categories: update
---

This week, I have continued to optimize the query methods used in the Hendrix Assessment Project. Last week, I had an incorrect understanding about how a specific part of the databased functioned, particularly regarding the relationship between a few of the tables. Because of this, there was an error in the code I wrote last week, so I had to spend some time correcting it.

After I finally managed to get my new methods implemented correctly for the chart building methods of the ViewData page, there was a significant performance increase. The old methods averaged a time of roughly six and a half seconds to run, but the new methods completed in roughly half a second, over a ninety percent reduction in time. This said, I will continue to make similar optimization in other sections of the code and hopefully get it running much more smoothly.
