---
title: "Customizing Keyboard Firmware for GH60"
date: 2020-03-10T21:52:49+07:00
url: /2020/03/10/customizing-tmk-firmware-gh60-pcb
description: Customizing firmware for a custom mechanical keyboard built with GH60 PCB
thumbnail:
tags:
- hardware
- mechanical keyboard
- gh60
categories:
- mechanical keyboards
---

I have a custom mechanical keyboard built with GH60 Satan PCB.
Here are steps I use to customize the keyboard's firmware with custom keys.

I go to [keyboard-layout-editor.com](http://www.keyboard-layout-editor.com/)
then I go to the menu on the top > select **Preset** > **Default 60%**.
It will load the layout in the editor area.

Select a key to remap. For example, I want to remap the `right shift` key to an arrow `up`.

I go to [https://tkg.io/#help](https://tkg.io/#help) and search for `up`.
The values in the right column are ones I need.

Back to the keyboard-layout-editor.com, I select the right shift key (it will highlight in red border).
Then I change the `Top Legend:` value from `Shift` to `UP`.

And I do the same for `LEFT`, `DOWN`, and `RIGHT` keys.

<p class="message--warning">
  Values are case-insensitive. <code>up</code> and <code>Up</code> and <code>UP</code> are the same key.
</p>

## Layers

I want to have another layer of the keyboard to have more keys.
The first layer is pretty much full.

I map the `caps lock` and the right `alt` keys to `FN0` - the Function key.
I will use them to toggle another layer of the keyboard.

<p class="message--warning">
  The function key itself doesn't do anything special, but we will set its behavior later on.
</p>

Now I finish the first layer. I go to `Raw data` tab below the keyboard layout
and copy the raw data in the text field.

Then I to back to [tkg.io](https://tkg.io/#), on the home page, paste the copied raw data into `Layer0` field.

```text
["~\n`","!\n1","@\n2","#\n3","$\n4","%\n5","^\n6","&\n7","*\n8","(\n9",")\n0","_\n-","+\n=",{w:2},"Backspace"],
[{w:1.5},"Tab","Q","W","E","R","T","Y","U","I","O","P","{\n[","}\n]",{w:1.5},"|\n\\"],
[{w:1.75},"FN0","A","S","D","F","G","H","J","K","L",":\n;","\"\n'",{w:2.25},"Enter"],
[{w:2.25},"Shift","Z","X","C","V","B","N","M","<\n,",">\n.","?\n/",{w:2.75},"UP"],
[{w:1.25},"Ctrl",{w:1.25},"Win",{w:1.25},"Alt",{a:7,w:6.25},"",{a:4,w:1.25},"FN0",{w:1.25},"LEFT",{w:1.25},"DOWN",{w:1.25},"RIGHT"]
```

In `Layer1` field, I put this

```text
["esc",{a:7},"","","","","","","","","","","","",{w:2},""],
[{w:1.5},"","","","","","","","","","","psc","","",{w:1.5},""],
[{w:1.75},"","","","","","","","","","","","",{w:2.25},""],
[{w:2.25},"","","","","","","","",{a:7},"",{a:4},"","",{w:2.75},""],
[{w:1.25},"",{w:1.25},"",{w:1.25},"",{a:7,w:6.25},"",{a:4,w:1.25},"",{w:1.25},"",{w:1.25},"",{w:1.25},""]
```

## `FN0` key

Still on tkg.io, under `Fn` section, at `Fn0` I select **Layout action > Momentary** and select `layer 1`
on the right side.

This means when I press and hold `FN0` key, it will switch to layer1.
When I release the `FN0` key, it will switch back to the default `layer0`.

Then I download the `.eep` file.

## Flashing `.eep` file to the keyboard

First I clone the `tkg-toolkit` repo to my computer.

Then I copy the downloaded `.eep` file from the previous step to under `mac/` in this folder
as I'm using a Mac to flash the firmware.

```sh
$ cp ~/Desktop/keymap.eep ~/code/tkg-toolkit/mac
```

I go to `~/code/tkg-toolkit/mac` folder and run

```sh
$ ./reflash.sh keymap.eep
```

I enter `Y`

and when it says "waiting for bootloder", I flip the keyboard and press `RESET` button on the PCB.

wait for a few seconds and it is done. the new firmware is now on the keyboard.