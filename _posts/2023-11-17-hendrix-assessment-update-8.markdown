---
layout: post
title:  "Hendrix Assessment Update 8"
date:   2023-11-10 22:22:14 -0500
categories: update
---

This week has been spent continuing to optimize queries used throughout the Hendrix Assessment project. It has been interesting learning how C# queries work and how they translate to SQL. Specifically, I have been working on the queries that export the data for a specific topic in a specific year into a csv file. I thought I had successfully completed this task, but I recently noticed a minor difference between the file the new code is producing  the file the old code produced which is that the old code included classes in the topic that topic that did not have any completed assessments where as the new code only includes classes that have completed assessments. This said, I have to redo the queries to include classes with no assessments.
