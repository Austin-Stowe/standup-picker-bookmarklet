# standup-picker-bookmarklet
A simple bookmarklet generator that you can use to refresh a list of names on a spinner wheel! 

# Why it exists
Within my team at work, we rotate who runs standup daily. We would choose a name at random, and then the next day we would select from a list without anyone that was chosen before. This meant that every day we would have to recreate the list with the names of people that haven't been chosen yet, then when the list is exhausted we would need to create the list again with everyone on it. This was annoying, and I prefer to just click a single button. 

And so the idea was born. [I found a website](www.wheelofnames.com) that stored it's settings in local storage, so this was the perfect way to maintain the data between days. I just needed to push in my settings with the list of names, so that's what this does. 

# How to use it
Check the actions, and there is a single stage that runs the pyhton code that creates the bookmarklet code. All you need to do is create a new bookmark, and paste that output into the URL part! That's it! Feel free to fork this project and tweak the name list to suit your team or other settings for the site. 
