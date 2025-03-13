[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://stavwasplayz.github.io/head-of-exile-questioneer/)

# Head of Exile Questioneer

Discover whether you're fit enuogh for the role of Rosh Ha'Gola with this **100%, 1:1 scale-accurate questioneer !!** 💥😱🤯🔥💣😲🌪️💥🤯🤯😱🔥

!["Not Jewish enough"](./public/assets/lowest.png)

## About this Abomination

Done in a rush for a very (very) dumb 10th grade History project where we had to make something to illustrate our *"knowledge"*<sup>1</sup> over the material.

Before wiping out my Windows partition for that other superior operating system (🐧), I decided to scour my PC for any software refugees needed of rescue, and found this gem upon a hidden star of this once-glorious creation of mine.

..And now it's publically available on GitHub for the whole world to shame me over. :\)

---

1\. *ChatGPT 3.5 was released to the public in Novermber 30th, 2022.*

## How it Works

1. [questions.js](./questions.js) describes the object array of `questions`, detailing all of the questions to be presented to the user.
2. Each question describes an `input_type`, one of 3 values detailed in [input_types.js](./input_types.js), responsible for correctly constructing the web element associated with the question in mind.  
    > [!NOTE]
    > I'm pretty sure that I separated `radio` and `scale` because I wanted to style them differently, but oh well.
3. [quiz.js](./quiz.js), as the main running script, constructs all the questions at once to the render tree using each of their `input_type`'s `construct` method, hiding and showing only the relevant questions during the questioning phase.
4. The final score is determined by the scale of the picked answers (highest radio button = highest answer). *(The text area one does not account for sh\^t.)*

    Using the pre-calculated maximum score of `28` in mind:
    * A score of **`18` and above** will grant the **Head of Exile** result.
    * A score of **`9` and above** will grant the **Gaon** result.
    * Any value **lesser than `9`** will grant the **Unfit** result.
