# Text Engine i made in one single file!! woohoo!!

This is just a random thing i made in like **8 hours**, and its just a text effect engine  

oh and also i made like 20 presets-

## Okay, cool, but how to i make my own things?
First, find the part wheres theres a bunch on stuff like this:

> // text
> 
>    text = text.replace(/##(.*?)##/g, '<thing="something">$1</thing>');

Copypaste that under the last one (of the example i showed) and change:  
>> things on the **(/##(.*?)##** section _(in this case, the **#'s**)_
>> to make the effect trigger itself (example: _**$**_ text _**$**_)

>> **class=""** name on the ***<thing* class="something">**
