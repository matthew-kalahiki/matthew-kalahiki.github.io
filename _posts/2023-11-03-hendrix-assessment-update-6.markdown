---
layout: post
title:  "Hendrix Assessment Update 6"
date:   2023-11-03 22:22:14 -0500
categories: update
---

This week, we have been continuing to find ways to optimize the Hendrix Assessment Project. To do this, a lot of time was spend learning the intricacies of Microsoft's Entity Framework and implementing more efficient methods for querying data from our database. Currently, there are methods for a plethora of different queries that one might need to use in the project. Methods that need these complex queries would then just call a series of these simpler query methods, but as it turns out, this is actually pretty resource intensive. It is more efficient to implement a single complex query to get the information that you need and minimize the number of queries to the database.

Also, I have implemented some tools to analyze the query efficiency. Specifically, I have implemented a logger so we can see the SQL calls being made by our code to the database, and I have implemented a stopwatch to see how much time specific methods take to complete.
