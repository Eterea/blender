---

My notes on Blender
---

# My notes on Blender##

[Go to Blender Resources on my site](https://etereaestudios.com/resources/blender-resources/)

## Introduction

My journey with **Blender** began in the spring of 2024. By then I had spent about 17 years using **Modo** as my main 3D program. For a lot of tasks I also relied on **Cinema 4D**, especially for more procedural animation work (like [Nature by Numbers](https://etereaestudios.com/works/nature-by-numbers/)). And whenever I needed to model something more organic, I turned to **ZBrush**. I'd been using those programs, especially the first two, for many years, so the idea of jumping to Blender felt pretty daunting, and I thought it over for a long time.

But from the very first moment I started falling in love with this new tool. And I also understood right away that there were a huge number of things I'd have to adapt to. Some, or even many, were simply a new way of doing something I already knew. Others involved completely different methods and workflows. Either way: an enormous amount of **information**.

## The origin

> So I quickly started writing everything down.

At first I put it all in a single plain text document: tips, shortcuts, links... But little by little the amount and variety of that information kept growing. So it wasn't long before I split it into four separate text documents where I'd keep track of everything:

1. A document with small **tricks, tips, and notes** for getting different things done. Some very simple, others more complex.
2. Another document with **links** to articles and video tutorials of varying length, from simple techniques to full courses, all related to Blender.
3. A third document where I collected the most useful keyboard **shortcuts**, along with the ones I was modifying or adding to suit my own needs and preferences.
4. And finally a fourth document to keep track of every **add-on** I installed: both the ones available in Blender Extensions and the ones shared through other repositories. Free and paid alike. Plus a list of add-ons I hadn't decided to install yet but wanted to keep noted down for future reference, in case I ever needed to solve a particular problem.

Those four documents — **Tips**, **Links**, **Keymaps**, and **Add-ons** — were four **RTF** text files I always kept close at hand on my desktop. Whenever I opened Blender on my main screen, I'd also open them on one of my side screens.

> Over time I started thinking that all this information I was accumulating, as part of my ongoing learning process, could also be useful to other people learning the program.

So I decided to share it, doing a simple export from my word processor to **HTML** and putting those files up on **GitHub**.

Honestly, these documents looked pretty rough — both the originals in the word processor and the exported HTML versions — but they did their job perfectly well. And that's how things stayed for more than two years.

## The overhaul

But a few weeks ago, after my friend Alberto shared some very positive experiences building complex apps and documents with Claude's help, I decided to give it a try myself.

> That's how I ended up converting those RTF text documents into modern **Markdown** (MD) files. From there I could upload, transform, and share them on **GitHub** using the **Material theme and MkDocs**.

Claude.ai's help was hugely important throughout this whole conversion process, especially in 3 of the 4 phases.

### Phase 1. Converting RTF to Markdown

Here I had full support from **Claude.ai**. If you try exporting a formatted RTF text file to Markdown, you'll end up with a huge pile of small things you have to clean up by hand afterward. At least, that's how it would have been until not long ago. But with some well-detailed prompts, I got all that “dirty work” done by the AI in just a few minutes.

### Phase 2. Building the site

Here, once again, Claude.ai worked its magic. With the 4 files cleaned up and reviewed in MD format, Claude took care of putting the whole site together using Material for MkDocs. This was by far the most “magical” almost mysterious part. Claude did in 12–15 minutes what would have taken me several full days of research and banging my head against the wall. It left a folder on my desktop, ready to upload to GitHub, along with instructions for setting up GitHub as a web page host.

### Phase 3. Manual review

Once everything was adapted to the new system, I spent several afternoons doing completely manual work — organizing, cleaning up, and updating all this content. You could say this phase still isn't finished, since every time I look here and there I spot some detail I want to polish. These are living documents, and they'll keep being that way, growing further, for as long as I keep using Blender.

For editing the original MD documents I initially started using **Oh My Marktext** a lightweight, open-source WYSIWYG Markdown editor. But I soon found that with really large documents (like [TIPS](https://eterea.github.io/blender/tips/)) it started to choke, taking a long time to render the page. On Claude's advice I tried **Obsidian**, and then it became completely clear: it's far more powerful and responsive. So, once again, I asked Claude to help me adapt the Oh My Marktext CSS so I could view the content with a similar theme in Obsidian, and also on the website itself, through Material for MkDocs.

### Phase 4. Fine tuning again

Once I was more or less happy with all that mostly manual work of fine-tuning the content, now within the Obsidian/Markdown setup, I went back to Claude to further refine the site's user experience. We added small arrows to the Table of Contents so sections could be expanded and collapsed, plus a button to collapse everything at once. We also added a note about the content's license.

With all this in place, keeping these documents and their cloud “mirror” up to date couldn't be simpler or more dynamic:

* **Obsidian** for local editing
* **GitHub Desktop** to keep the web version up to date
* The site is built with **Material for MkDocs**
* The repository is hosted on **GitHub**

And these days I don't usually open my original Markdown documents to look something up anymore — I just use [the web version](https://eterea.github.io/blender/) directly. I only open Obsidian to edit the content, directly as MD, when needed.

Of course, I could have made this whole change and adaptation process happen before now. But how much easier Claude made everything for me is simply incredible. I still haven't gotten used to how powerful AI is — and this is really one of the more “simple” uses of this technology.
