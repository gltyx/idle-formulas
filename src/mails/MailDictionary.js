import { notify } from "../utilities";

const getHomeworkProgress = () => [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];
const homeworkResponses = [
  <>Flawless! You sent back the correct answers with explanations.</>,
  <>Well done! You sent back the correct answers.</>,
  <>You sent back mostly correct answers.</>,
  <>Terrible! You sent back random answers that are most likely wrong.</>,
];

export const mailDictionary = {
  //Storyline World Formula
  Warning: {
    id: "Warning",
    title: "Warning",
    content: (
      <>
        You are searching for it as well, aren't you? Please, stop before it is
        too late! The pursuit will rob you off your sleep, even once you know it
        is futile. For me it is too late to turn back, to give up. But I believe
        you can still be saved.
      </>
    ),
    responses: [<>What are you talking about?</>, <>Who are you?</>],
    sender: "Mister Y",
    check: (state) => state.xValue[0] > 200e6 && state.highestXTier >= 1,
    delay: 20,
    afterComplete: [
      ["What", "Prince", "Favorites"],
      ["Who", "Prince", "Favorites"],
    ],
  },
  What: {
    id: "What",
    title: "Re: What are you talking about?",
    content: (
      <>
        I noticed how obsessed you were lately with researching formulas and
        large numbers, so I was sure you must have heard about it. About the
        mythical formula that is said to transcend maths itself. I've spent
        years following traces, not even sure why it is important or what my
        ultimate goal is. My curiousity led me deeper and deeper into the rabbit
        hole, but it was all in vain. Save yourself the trouble and stop digging
        deeper.
      </>
    ),
    responses: [
      <>What did you find out so far?</>,
      <>Yeah, I'd rather not get involved in this.</>,
    ],
    sender: "Mister Y",
    check: (state) => state.xValue[0] > 520e6 && state.highestXTier >= 1,
    delay: 500,
    afterComplete: [["Formula"], ["Still"]],
  },
  Who: {
    id: "Who",
    title: "Re: Who are you?",
    content: (
      <>
        You may call me "Y", my real name is a secret. A few years ago, I first
        heard the rumors about <i>that</i> formula from a work colleague, and
        ever since I devoted my life to finding it. I remember that, back when I
        started, I was just like you, always on the look for more and more
        powerful formulas. But it's a slippery slope! For your sanity, I hope
        you can resist. But at the same time, I am wondering how far you could
        get if, just like me, you put all of your heart, and also your sanity,
        into this...
      </>
    ),
    responses: [
      <>What did all your research amount to?</>,
      <>I am nothing like you, you are creeping me out!</>,
    ],
    sender: "Mister Y",
    check: (state) => state.xValue[0] > 520e6 && state.highestXTier >= 1,
    delay: 500,
    afterComplete: [["Amount"], ["Still"]],
  },
  Amount: {
    id: "Amount",
    title: "My Research",
    content: (
      <>
        Haha, I knew you would be curious about it. I will tell you more about
        the findings of my research when the time is right.
      </>
    ),
    sender: "Mister Y",
    check: (state) => state.xValue[0] > 5e9 && state.highestXTier >= 2,
    delay: 100,
    afterRead: ["Formula", "Prime"],
  },
  Still: {
    id: "Still",
    title: "Still here?",
    content: (
      <>
        I see you are still working on those formulas, despite my warnings.
        Maybe I'll share some of my most recent findings with you...
      </>
    ),
    sender: "Mister Y",
    check: (state) => state.xValue[0] > 5e9 && state.highestXTier >= 2,
    delay: 100,
    afterRead: ["Formula", "Prime"],
  },
  Formula: {
    id: "Formula",
    title: "My Findings",
    content: (
      <>
        It is said there is a formula so powerful, that it can be used to alter
        the laws of reality. Some have dubbed it the "Origin Formula", others
        call it the "God Formula" but the name that resonates most with me is
        "World Formula". It seems that the World Formula is not something
        tangible: It's neither an object you can find, nor a formula you can
        just write down. Much rather, it appears to be a state of mind, some
        kind of enlightenment. A stream of conciousness that lets you unleash
        your full potential and ultimately allows you to go way beyond!
      </>
    ),
    sender: "Mister Y",
    check: (state) => state.xValue[0] > 234e21 && state.highestXTier >= 3,
    delay: 30,
    afterRead: ["Joined"],
  },
  Joined: {
    id: "Joined",
    title: "About the Academy",
    content: (
      <>
        So you've joined the Academy to aid your goals? They can be very helpful
        and you will need all help you can get. But be careful, you must not let
        them know you are looking for the world formula. We don't want the
        Academy to steal the fruits of our endeavors.
      </>
    ),
    sender: "Mister Y",
    check: (state) =>
      state.progressionLayer >= 1 &&
      state.xValue[0] > 300e6 &&
      state.highestXTier >= 3,
    delay: 30,
    afterRead: ["How"],
  },
  How: {
    id: "How",
    title: "But how???",
    content: (
      <>
        Hearing about the world formula, you may be wondering how to achieve
        such a state of mind, how to <i>discover</i> the World Formula for
        yourself. One must break out of the prison imposed by ones formulas.
        Find unlimited growth. Yearn for <b>Infinity</b>. Yet one must not just
        invent new formulas, instead one must{" "}
        <b>exploit the core of mathematics</b> to break free of the bounds which
        constrain ones conciousness. And those who get blinded by greed and stop
        being careful may end up stuck with infinitely many problems, or deep
        down in the depths of hell.
      </>
    ),
    sender: "Mister Y",
    check: (state) => state.alpha >= 42,
    delay: 500,
    afterRead: ["Dangerous"],
  },
  Dangerous: {
    id: "Dangerous",
    title: "Be careful!",
    content: (
      <>
        The World Formula can be very dangerous in the wrong hands! It can
        manifest all sorts of energies. If you ever happen to find it, I trust
        that you will make the right choice.
      </>
    ),
    sender: "Mister Y",
    check: (state) => state.alpha >= 400,
    delay: 80,
    afterRead: ["After"],
  },
  After: {
    id: "After",
    title: "How is it going?",
    content: (
      <>
        Hey, I haven't heard back from you in a while. How are you? How is your
        research going?
      </>
    ),
    responses: [<>I found the World Formula</>, <>Not much going on lately</>],
    sender: "Mister Y",
    check: (state) => state.startingStoneTurned["WorldFormula"],
    delay: 7700,
    afterComplete: [["Found"], ["Nothing"]],
  },
  Found: {
    id: "Found",
    title: "Re: I found the World Formula",
    content: (
      <>
        Haha, you got me for a moment. You got to be kidding, there is no way
        you could just find it <i>that quickly</i> while I have put in years
        with nothing to show. But to be honest, you seem to be in a better place
        now, sorry for bothering you. Maybe it is finally the right time for me
        to give up and move on as well.
      </>
    ),
    sender: "Mister Y",
    check: (state) => true,
    delay: 4600,
  },
  Nothing: {
    id: "Nothing",
    title: "Re: Not much going on lately",
    content: (
      <>
        Yeah I know that feeling. Sometimes it is best to just put your mind to
        something different. I'm also feeling my passion for the World Formula
        fading away slowly. I am happy that we could be a part of each other's
        journey!
      </>
    ),
    sender: "Mister Y",
    check: (state) => true,
    delay: 4600,
  },

  //Storyline Homework
  Homework: {
    id: "Homework",
    title: "Help with Homework",
    content: (
      <>
        Hey, you are good with numbers aren't you? Can you help my sons with his
        maths homework?
      </>
    ),
    responses: [
      <>Sure, maybe I can learn a thing too!</>,
      <>Sorry I have more important things to do.</>,
    ],
    sender: "Karen",
    check: (state) => state.alpha > 1,
    delay: 3000,
    afterComplete: [["Learn"], ["Important"]],
  },
  Learn: {
    id: "Learn",
    title: "Re: Sure, maybe I can learn a thing too!",
    content: (
      <>
        Exactly, the teacher learns more than the student! That's why you are
        going to pay me some Alpha Tokens for the privilege of helping my boys!
      </>
    ),
    responses: [<>Deal!</>, <>Wait, what?</>],
    sender: "Karen",
    check: (state) => state.alpha >= 4,
    delay: 3000,
    afterComplete: [["Klausi"], ["Klausi"]],
  },
  Important: {
    id: "Important",
    title: "Re: Sorry I have more important things to do!",
    content: (
      <>
        Nothing is more important than my little boys! But well I'll let you
        farm some of those important Alpha Tokens for me while you are helping
        them.
      </>
    ),
    responses: [<>Yes, ma'am!</>, <>Can I say no?</>],
    sender: "Karen",
    check: (state) => state.alpha >= 4,
    delay: 3000,
    afterComplete: [["Klausi"], ["Refuse"]],
  },
  Refuse: {
    id: "Refuse",
    title: "Re: Can I say no?",
    content: <>No.</>,
    sender: "Karen",
    check: (state) => true,
    delay: 8,
    afterRead: ["Klausi"],
  },
  Klausi: {
    id: "Klausi",
    title: "Klausi's Homework",
    content: (
      <>
        Hi I'm Klausi. My homework is about eights and zeroes or something. Here
        are the exercises for you:{" "}
      </>
    ),
    responses: homeworkResponses,
    getProgress: getHomeworkProgress,
    exercises: [
      {
        question: <>8 + 0</>,
        answers: ["0", "8", "80", "Not defined"],
        correct: 1,
      },
      {
        question: <>8 - 0</>,
        answers: ["0", "8", "80", "Not defined"],
        correct: 1,
      },
      {
        question: <>8 * 0</>,
        answers: ["0", "8", "80", "Not defined"],
        correct: 0,
      },
      {
        question: <>8 / 0</>,
        answers: ["0", "8", "80", "Not defined"],
        correct: 3,
      },
    ],
    sender: "Klausi",
    check: (state) => true,
    delay: 1000,
    alphaCost: 2,
    afterComplete: [["Henry"], ["Henry"], ["Henry"], ["Henry"]],
  },
  Henry: {
    id: "Henry",
    title: "Henry's Homework",
    content: (
      <>
        Hi I'm Henry, Klausi's older brother. My homework is about squares and
        negative numbers. The teacher said the insights from the bold questions
        could become very important for <i>something</i>. Here are the exercises
        for you:{" "}
      </>
    ),
    responses: homeworkResponses,
    getProgress: getHomeworkProgress,
    exercises: [
      { question: <>2 - 5</>, answers: ["3", "7", "-3", "-7"], correct: 2 },
      {
        question: (
          <>
            8<sup>2</sup>
          </>
        ),
        answers: ["16", "64", "-16", "-64"],
        correct: 1,
      },
      {
        question: (
          <>
            (-8)<sup>2</sup>
          </>
        ),
        answers: ["16", "64", "-16", "-64"],
        correct: 1,
        important: true,
      },
      {
        question: <>2 - (-5)</>,
        answers: ["3", "7", "-3", "-7"],
        correct: 1,
        important: true,
      },
    ],
    sender: "Henry",
    check: (state) => true,
    delay: 2000,
    alphaCost: 20,
    afterComplete: [["Powerful"], ["Powerful"], ["Powerful"], ["Tommy"]],
  },
  Powerful: {
    id: "Powerful",
    title: "I love Squaring now",
    content: (
      <>
        Hi this is Henry again, thanks to you I learned that squaring a number
        is very powerful, the square increases really fast when the number
        increases. And it can even make negative numbers positive, how crazy is
        that? From now on I will use the square whenever I want to make big
        numbers!!!{" "}
      </>
    ),
    sender: "Henry",
    check: (state) => true,
    delay: 1300,
    afterRead: ["Tommy"],
  },
  Tommy: {
    id: "Tommy",
    title: "Tommy's Homework",
    content: (
      <>
        Hi I'm Tommy, Henry's older brother. My homework is about logarithms or
        something. Here are the exercises for you:{" "}
      </>
    ),
    responses: homeworkResponses,
    getProgress: getHomeworkProgress,
    exercises: [
      {
        question: (
          <>
            log<sub>2</sub>(4)
          </>
        ),
        answers: ["2", "-2", "1", "Not defined"],
        correct: 0,
      },
      {
        question: (
          <>
            log<sub>2</sub>(-4)
          </>
        ),
        answers: ["2", "-2", "1", "Not defined"],
        correct: 3,
      },
      {
        question: (
          <>
            log<sub>2</sub>(1/4)
          </>
        ),
        answers: ["2", "-2", "1", "Not defined"],
        correct: 1,
        important: true,
      },
      {
        question: (
          <>
            log<sub>2</sub>(0)
          </>
        ),
        answers: ["2", "-2", "1", "Not defined"],
        correct: 3,
      },
    ],
    sender: "Tommy",
    check: (state) => true,
    delay: 3000,
    alphaCost: 60000,
    afterComplete: [["Jimmy"], ["Jimmy"], ["Jimmy"], ["Jimmy"]],
  },
  Jimmy: {
    id: "Jimmy",
    title: "Jimmy's Homework",
    content: (
      <>
        Hi I'm Jimmy, Tommy's older stepbrother. My homework is about square
        roots and cubic roots or something. Here are the exercises for you:{" "}
      </>
    ),
    responses: homeworkResponses,
    getProgress: getHomeworkProgress,
    exercises: [
      {
        question: <>sqrt(9)</>,
        answers: ["3", "-3", "3i", "Infinity"],
        correct: 0,
      },
      {
        question: <>sqrt(-9)</>,
        answers: ["3", "-3", "3i", "Infinity"],
        correct: 2,
      },
      {
        question: <>cbrt(-27)</>,
        answers: ["3", "-3", "3i", "Infinity"],
        correct: 1,
      },
      {
        question: <b>sqrt(Infinity)</b>,
        answers: ["3", "-3", "3i", "Infinity"],
        correct: 3,
        important: true,
      },
    ],
    sender: "Jimmy",
    check: (state) => true,
    delay: 4000,
    alphaCost: 3e6,
    afterComplete: [["Gary"], ["Gary"], ["Gary"], ["Gary"]],
  },
  Gary: {
    id: "Gary",
    title: "Gary's Homework",
    content: (
      <>
        Hi I'm Gary, the oldest brother. My homework is about infinities or
        something. Here are the exercises for you:{" "}
      </>
    ),
    responses: homeworkResponses,
    getProgress: getHomeworkProgress,
    exercises: [
      {
        question: <>5 - Infinity</>,
        answers: ["0", "Infinity", "-Infinity", "No limit"],
        correct: 2,
      },
      {
        question: (
          <>
            log<sub>2</sub>(Infinity)
          </>
        ),
        answers: ["0", "Infinity", "-Infinity", "No limit"],
        correct: 1,
        important: true,
      },
      {
        question: <>Infinity + Infinity</>,
        answers: ["0", "Infinity", "-Infinity", "No limit"],
        correct: 1,
      },
      {
        question: <>Infinity - Infinity</>,
        answers: ["0", "Infinity", "-Infinity", "No limit"],
        correct: 3,
      },
    ],
    sender: "Gary",
    check: (state) => true,
    delay: 5000,
    alphaCost: 1e8,
    afterComplete: [["Done"], ["Done"], ["Done"], ["Done"]],
  },
  Done: {
    id: "Done",
    title: "Homework is done",
    content: (
      <>
        That's all their homework done. Let's see how my boys do in the upcoming
        tests. Or if <i>you</i> were the only one to profit from this.
      </>
    ),
    responses: [
      <>So how exactly did I profit?</>,
      <>I did not profit, I was just trying to help</>,
    ],
    sender: "Karen",
    delay: 100,
    check: (state) => true,
    afterComplete: [["Profit"], ["Profit"]],
  },

  Profit: {
    id: "Profit",
    title: "Your Profit",
    content: (
      <>
        Well now you know that{" "}
        <b>logarithms of fractions can produce negative results</b>, those
        negative numbers can become <b>positive by squaring</b> them,{" "}
        <b>subtracting negative numbers</b> makes things bigger, and that square
        roots and logarithms <b>go towards Infinity</b> if you put in bigger and
        bigger numbers. Seems like a lot to me.
      </>
    ),
    responses: [
      <>I knew that before!</>,
      <>Thx, I guess?!?</>,
      <>Oooh, that might actually help me.</>,
    ],
    sender: "Karen",
    delay: 2000,
    check: (state) => true,
    afterComplete: [["Children"], ["Children"], ["Children"]],
  },

  Children: {
    id: "Children",
    title: "Bye",
    content: (
      <>
        Yeah, good for you. Now stop annoying me and my children for your stupid
        research. Stop wasting our time and instead go{" "}
        <b>find that powerful formula</b> or whatever you were looking for!
      </>
    ),
    sender: "Karen",
    delay: 2000,
    check: (state) => true,
    afterReadConditional: (state) => {
      const score =
        state.mailsCompleted["Klausi"] +
        state.mailsCompleted["Henry"] +
        state.mailsCompleted["Tommy"] +
        state.mailsCompleted["Jimmy"] +
        state.mailsCompleted["Gary"];
      if (score === 0) return ["Perfect"];
      else if (score <= 4) return ["Good"];
      else if (score === 15) return ["Terrible"];
      else return ["Thx"];
    },
  },

  Perfect: {
    id: "Perfect",
    title: "Thank you so much",
    content: (
      <>
        Hi this is Karen again. My sons got top scores on the test thanks to
        your help. I was a little harsh with you and wanted to apologize for
        that. Thank you so much for teaching my kids!
      </>
    ),
    sender: "Karen",
    delay: 60000,
    check: (state) => true,
  },

  Good: {
    id: "Good",
    title: "Thank you",
    content: (
      <>
        Hi this is Karen again. My sons got good grades. Maybe your help had
        something to do with that, so thank you, I guess.
      </>
    ),
    sender: "Karen",
    delay: 60000,
    check: (state) => true,
  },

  Thx: {
    id: "Thx",
    title: "Thx",
    content: (
      <>
        Hi this is Karen again. My sons barely passed their tests because you
        just gave them answers instead of teaching them properly. But maybe that
        still helped. So thx.
      </>
    ),
    sender: "Karen",
    delay: 60000,
    check: (state) => true,
  },

  Terrible: {
    id: "Terrible",
    title: "FUCK YOU!!!!",
    content: (
      <>
        Karen here. My sons got LITERALLY everything wrong on their tests. I
        don't know what you taught them, but even if they just guessed randomly
        they would have gotten more points than with your "help". You measly
        lowlife are going to regret this, I tell you!!!
      </>
    ),
    sender: "Karen",
    delay: 60000,
    check: (state) => true,
  },

  //Storyline: Academy
  Welcome: {
    id: "Welcome",
    title: "Welcome to the Academy",
    content: (
      <>
        Due to your outstanding research in the field of x differentials and
        formulas, the Academy decided to support you on your journey as one of
        our members. You should already have received your very first Alpha
        Token. Your Alpha Tokens can be traded with us for various upgrades. You
        can obtain additional Alpha Tokens by getting the three differentials
        and then performing an Alpha Reset. If you manage to Alpha Reset with a
        very high x, we will award you with multiple Alpha Tokens at once!
      </>
    ),
    sender: "Academy",
    check: (state) => state.progressionLayer >= 1,
    delay: 7,
    afterRead: ["Research", "Stones"],
  },
  Research: {
    id: "Research",
    title: "Research",
    content: (
      <>
        As a part of our Academy, you may now use our institutions for Research.
        You find Research on the Alpha tab. For Research it is important to not
        do your x-Resets immediately, but instead aim for a better highscore.
        The speed of your research is directly proportional to your highscores.
        If a highscore gets very much ahead of a Research level, you can even
        claim multiple levels at once! Research may not seem to help much when
        you first start, but its benefits grow exponentially, and they will soon
        speed up your daily work greatly.
      </>
    ),
    responses: [<>UNLOCK RESEARCH</>],
    sender: "Academy",
    check: (state) =>
      state.alphaUpgrades.SLOT ||
      state.alphaUpgrades.AAPP ||
      state.alphaUpgrades.AUNL,
    delay: 48,
    afterComplete: [["Challenges", "Maxxed", "Homework", "Survey"]],
  },
  Challenges: {
    id: "Challenges",
    title: "Academy Projects",
    content: (
      <>
        We are very happy with the results of your Research so far. As such we
        would like to invite you to participate in more complex projects.
        Sometimes true wisdom can only be achieved by restricting ones options,
        forcing one to assume new perspectives. On the Alpha tab you can find
        our projects under Challenges. Every Challenge and Challenge segment you
        clear will allow us to make your formulas more efficient. And once you
        have proven yourself, there will be special rewards if you can help with
        the toughest Challenges our Academy faces right now.
      </>
    ),
    responses: [<>UNLOCK CHALLENGES</>],
    sender: "Academy",
    check: (state) =>
      state.researchLevel["x"] >= 100 &&
      state.researchLevel["x'"] >= 100 &&
      state.researchLevel["x''"] >= 100 &&
      state.researchLevel["x'''"] >= 100,
    delay: 128,
    afterComplete: [["Idle", "God"]],
  },
  Stones: {
    id: "Stones",
    title: "Stones",
    content: (
      <>
        I heard you found a rare stone? I do not know what it is and what to do
        with it. But you can find your stones on the Alpha tab. Feel free to
        experiment with them, though I am not sure if they will turn out to be
        useful for anything.
      </>
    ),
    responses: [<>UNLOCK STARTING STONES</>],
    sender: "Academy",
    check: (state) => Object.keys(state.startingStoneTurned).length > 0,
    delay: 380,
    afterComplete: [["MaxStones"]],
  },
  Maxxed: {
    id: "Maxxed",
    title: "Maxxed Research",
    content: (
      <>
        The Academy committee is very impressed with your Research. For every
        field of research that you fully complete, we will double your Formula
        Efficiency. Keep up the good work!
      </>
    ),
    sender: "Academy",
    check: (state) =>
      state.researchLevel["x"] >= 2500 ||
      state.researchLevel["x'"] >= 2500 ||
      state.researchLevel["x''"] >= 2500 ||
      state.researchLevel["x'''"] >= 2500,
    delay: 260,
  },
  Idle: {
    id: "Idle",
    title: "Master of Idle",
    content: (
      <>
        Congratulations on finishing the Master of Idle Challenge. We improved
        your Passive Alpha gain, from now on you will get Alpha based on your
        best fully idle Alpha run. You can check it on the Alpha upgrades tab.
      </>
    ),
    sender: "Academy",
    check: (state) => state.clearedChallenges["FULLYIDLE"],
    delay: 90,
  },
  God: {
    id: "God",
    title: "Formula God",
    content: (
      <>
        Thank you for attempting the Formula God Challenge. That one is truly
        giving us nightmares. However, we are able to support you by multiplying
        your research speeds by your respective best scores in the Formula God
        Challenge. You can check this special boost on the Research tab. Keep
        trying and improving those highscores!
      </>
    ),
    sender: "Academy",
    check: (state) => state.formulaGodScores[0] > 1,
    delay: 45,
  },
  MaxStones: {
    id: "MaxStones",
    title: "Maximum Stone Power",
    content: (
      <>
        Congratulations! You got all Starting Stones and managed to max out
        their bonus to your starting x. As to what the point of that is, we are
        not sure, but we will sure try to find out. Or maybe you will figure it
        out before we do, let's see.
      </>
    ),
    sender: "Academy",
    responses: [<>I could use some help.</>, <>I don't need your help.</>],
    check: (state) => state.startingStoneX >= 3e9,
    delay: 380,
    afterComplete: [["Hint"], []],
  },
  Hint: {
    id: "Hint",
    title: "Re: I could use some help.",
    content: <>We'll do our best. It may take some time though.</>,
    sender: "Academy",
    check: (state) => true,
    delay: 1300,
    afterRead: ["TrueHint"],
  },
  TrueHint: {
    id: "TrueHint",
    title: "We have an idea for those Stones.",
    content: (
      <>
        Sorry for taking so long, we went down the wrong path for a while: Your
        starting x now allows you to get the three differentials without using
        any formulas. But that does not really seem to help you do anything new.
        Then, upon closer inspection we noticed that with your Starting X it
        should now be possible to use x''' &#10141; x''' + log<sub>2</sub>(x)
        <sup>2</sup> as your first formula. Curiously, if one was to apply that
        formula while x = Infinity, then one could also reach x''' = Infinity.
      </>
    ),
    check: (state) => true,
    delay: 30000,
    sender: "Academy",
  },

  //Storyline: Destiny
  Destiny: {
    id: "Destiny",
    title: "Fight the Darkness with me",
    content: (
      <>
        Hello, congratiulations on finishing the main game! You now have gained
        access to my realm. My name is Estelle, the goddess of Starlight and
        sleepless overseer of the eternal night. Sadly, during the last weeks,
        the night sky has darkened drastically. It became almost devoid of Stars
        and Starlight. I could really use your help to restore as much of that
        as possible. Since this is optional post-game content, you can do as
        little or much of it as you want without really missing out on anything
        important. But every ray of Starlight counts and helps me! <br />
        <br />
        Here is a quick overview:
        <br />
        <br />
        Astral Glance: Produces 1 Starlight per Second
        <br />
        <br />
        Shooting Star: Doubles Starlight Rate
        <br />
        <br />
        Luminous Moon: Multiplies Starlight Rate with number of Destiny Stars
        <br />
        <br />
        Gaze at the night sky: Grants 1 Starlight, only possible if there is no
        other means of generating Starlight
        <br />
        <br />
        Destiny Reset: Resets the entire main game ("New Game Plus") for a
        Destiny Star. Only available when the main game is completed.
        <br />
        <br />
        Destiny Star: The number of Destiny Stars acts as a global multiplier
        for many aspects of the main game. And, as mentioned before, Destiny
        Stars boost the effect of Luminous Moons.
        <br />
        <br />
        Star Constellations: There is a legend that, when the night sky is full
        of Starlight, all of it can be transformed into a beautiful Star
        Constellation!
      </>
    ),
    sender: "Estelle",
    check: (state) => state.destinyStars >= 1,
    delay: 0,
    afterReceive: ["Constellation"],
    silent: true,
  },
  Constellation: {
    id: "Constellation",
    title: "A Star Constellation!",
    content: (
      <>
        Wow! I am very impressed! You really managed to create a Star
        Constellation. We may have to start over, but the night sky has expanded
        to fit even more Starlight, and also all Starlight upgrades have become
        a bit easier to obtain. Together we can make the night sky brighter than
        it ever has been!!!
      </>
    ),
    sender: "Estelle",
    check: (state) => state.constellationCount >= 1,
    delay: 0,
    afterReceive: ["Zodiac"],
    silent: true,
  },
  Zodiac: {
    id: "Zodiac",
    title: "We completed the Zodiac!",
    content: (
      <>
        I am speechless, you completed all the Star Constellations! The entire
        Zodiac is complete. Thank you very much for help, you did more than I
        could ever have hoped.
      </>
    ),
    sender: "Estelle",
    check: (state) => state.constellationCount >= 12,
    delay: 0,
    afterReceive: ["Constellation"],
    silent: true,
  },
  Eternal: {
    id: "Eternal",
    title: "The eternal night is over",
    content: (
      <>
        This is absolutely incredible. With an Infinity of Starlight, the
        eternal night is finally coming to an end, and the Age of Illumination
        is about to begin. However, the dawn of this new era means that it is
        time for us to part ways. And that it is time for me to get some rest.
        But I will hold to the memories of our time together dearly, and take
        them with me, whereever fate may take me!
        <br />
        <br />
        Farewell, and thank you for everything!
        <br />
        <br />
        Estelle
      </>
    ),
    sender: "Estelle",
    check: (state) =>
      state.starLight >= Infinity &&
      state.lightAdder >= 1000 &&
      state.lightDoubler >= 1000 &&
      state.lightRaiser >= 1000,
    silent: true,
  },

  //Sidestory: Prince
  Prince: {
    id: "Prince",
    title: "Your Prince",
    content: (
      <>
        Hello, I am rich prince. Inheritance is good! I can make x very big. But
        need money for that. Give me. You be make happy then!
      </>
    ),
    responses: [<>How can I give you?</>, <>No</>],
    sender: "Prince",
    check: (state) => state.xValue[0] > 7e12 && state.highestXTier >= 2,
    delay: 222,
    afterComplete: [["Transfer"], ["Failed"]],
  },
  Transfer: {
    //Transfer minigame
    id: "Transfer",
    title: "Re: How can I give you?",
    content: (
      <>
        Transfer money. $150! Have only one day. But must not be suspicious.
        Must transfer only one dollar at a time!
      </>
    ),
    getProgress: () => 0,
    responses: [
      <>Transferred nothing</>,
      <>Transferred too little</>,
      <>Transferred enough</>,
      <>Transferred waaay too much</>,
    ],
    sender: "Prince",
    check: (state) => true,
    delay: 1700,
    getTimeoutReply: (state) => {
      const score = state.mailsProgress["Transfer"];
      if (score === 0) return 0;
      else if (score < 150) return 1;
      else if (score >= 1500) return 3;
      else return 2;
    },
    afterComplete: [["Zero"], ["Failed"], ["Sent"], ["Rich"]],
    transfer: true,
    timeout: 86400,
  },
  Zero: {
    id: "Zero",
    title: "You very bad person",
    content: (
      <>
        You not helped me! You no sent any money! Now prince can not feed
        family. We poor. Why you no heart? See picture of family!
      </>
    ),
    responses: [
      <>Open Attachment: familypicture.exe</>,
      <>Attachment removed by malware detection</>,
    ],
    effects: [
      (state) => {
        notify.error("Production Halted!", "familypicture.exe");
        state.noProdTime = 20 * 60000;
      },
      null,
    ],
    hiddenResponses: 1,
    sender: "Prince",
    check: (state) => true,
    delay: 3000,
    afterComplete: [["Virus"], []],
    timeout: 36000,
    getTimeoutReply: () => 1,
  },
  Failed: {
    id: "Failed",
    title: "You bad person",
    content: (
      <>
        You no sent enough! Now prince struggle with feed family. We poor. Why
        you heart so little? See picture of family!
      </>
    ),
    responses: [
      <>Open Attachment: familypicture.exe</>,
      <>Attachment removed by malware detection</>,
    ],
    effects: [
      (state) => {
        notify.error("Production Halted!", "familypicture.exe");
        state.noProdTime = 20 * 60000;
      },
      null,
    ],
    hiddenResponses: 1,
    sender: "Prince",
    check: (state) => true,
    delay: 3000,
    afterComplete: [["Virus"], []],
    timeout: 36000,
    getTimeoutReply: () => 1,
  },
  Virus: {
    id: "Virus",
    title: "YOU FOOL",
    content: (
      <>
        Haha! You open my Virus! Now no x production for next 20 minutes! Now
        you get rekt!
      </>
    ),
    sender: "Prince",
    check: (state) => true,
    delay: 5,
  },
  Sent: {
    id: "Sent",
    title: "Thank you",
    content: (
      <>
        Now prince can feed family. We poor. You have big heart. Attachment will
        double your x! But can only use once!
      </>
    ),
    responses: [<>Open Attachment: xdoubler.exe</>],
    effects: [
      (state) => {
        notify.success("Value of x doubled!", "xdoubler.exe");
        state.xValue[0] *= 2;
      },
    ],
    sender: "Prince",
    check: (state) => true,
    delay: 3000,
  },
  Rich: {
    id: "Rich",
    title: "Thank you so much!!!",
    content: (
      <>
        Not only did you help me to feed my family, I was even able to hire
        someone to fix my bad grammar and wording for this email! It really
        means a lot to us, and we send you much love! Sadly, I cannot properly
        repay you, but the attachment can triple the value of your x. It can
        only be used once though, so be careful. Best regards, the prince and
        his family.
      </>
    ),
    responses: [<>Open Attachment: xtripler.exe</>],
    effects: [
      (state) => {
        notify.success("Value of x tripled!", "xtripler.exe");
        state.xValue[0] *= 3;
      },
    ],
    sender: "Prince",
    check: (state) => true,
    delay: 3000,
  },

  //Sidestory: Just Developer Things
  Favorites: {
    id: "Favorites",
    title: "Highlight your favorite formulas!",
    content: (
      <>
        Hey, there are a lot of formulas in the shop now, and it's getting even
        more messy with each x-Reset. And many of the lower differential
        formulas seem pretty useless by now. But no worries, I have a solution:
        You can now highlight and filter your favorite formulas. Go, try it out!
      </>
    ),
    responses: [<>UNLOCK SHOP DISPLAY MODE</>],
    sender: "Dev",
    check: (state) => state.xValue[0] > 200e9 && state.highestXTier >= 2,
    delay: 60,
    afterComplete: [["RoundDown"]],
  },

  RoundDown: {
    id: "RoundDown",
    title: "Just a small hint",
    content: (
      <>
        Hi again, I hope you are doing well! Here's a small hint for you, since
        I have no idea where else to put it in the game: the result from
        applying a formula is generally rounded down (except for formulas that
        just add something to the current value). Maybe this will be helpful, or
        not, I don't know.
      </>
    ),
    sender: "Dev",
    check: (state) => state.xValue[0] > 5e30 && state.highestXTier >= 3,
    delay: 200,
    afterComplete: [[]],
  },

  Survey: {
    //Star Survey Minigame
    id: "Survey",
    title: "Survey",
    getProgress: () => 3,
    responses: [<>Rating submitted</>],
    content: (
      <>
        Hi, I hope you are enjoying this game! Please take a moment and rate
        your experience on a scale of 1 to 5 stars.
      </>
    ),
    sender: "Dev",
    check: (state) => true,
    delay: 60000,
    afterComplete: [["Submitted"]],
    rating: true,
  },
  Submitted: {
    id: "Submitted",
    title: "Your feedback has been submitted!",
    content: (
      <>
        Your submission has been received. Thank you for your feedback. If you
        are interested, I can inform you about the results of the survey.
      </>
    ),
    responses: [<>Yes, please!</>, <>No, thank you!</>],
    sender: "Dev",
    check: (state) => true,
    delay: 20,
    afterComplete: [["Interest"], []],
  },
  Interest: {
    id: "Interest",
    title: "Thanks for your Interest!",
    content: (
      <>I will get back to you with the survey results in a day or two.</>
    ),
    afterRead: ["Results"],
    sender: "Dev",
    check: (state) => true,
    delay: 20,
  },
  Results: {
    id: "Results",
    title: "Survey Results",
    content: <>Here are the latest results of the survey:</>,
    sender: "Dev",
    check: (state) => true,
    delay: 100000,
    surveyresult: true,
  },

  //Sidestory: x-Mail
  Prime: {
    id: "Prime",
    title: "x-Mail Prime",
    content: (
      <>
        Hello! Thank you for using x-Mail as your eMail client. To get the most
        out of your experience with x-Mail, upgrade now to an x-Mail Prime
        Membership!
      </>
    ),
    responses: [
      <>What's included in the membership?</>,
      <>Stop annoying me with these stupid ads</>,
    ],
    sender: "x-Mail",
    check: (state) => state.xValue[0] > 10e18 && state.highestXTier >= 3,
    delay: 420,
    afterComplete: [["Advantages"], ["Premium"]],
  },

  Advantages: {
    id: "Advantages",
    title: "x-Mail Prime Advantages",
    content: (
      <>
        Hello again! x-Mail Prime includes unlimited access to: x-Books, our
        extensive e-Book library; x-Music, the only place where you can find the
        Idle Formulas Official Soundtrack; x-Games, our quadruple A gaming
        portal and x-Videos, our streaming service with only the best movies.
      </>
    ),
    responses: [<>I think I'll pass</>],
    sender: "x-Mail",
    check: (state) => state.xValue[0] > 200e24 && state.highestXTier >= 3,
    delay: 10000,
  },

  Premium: {
    id: "Premium",
    title: "Re: Stop annoying me with these stupid ads",
    content: (
      <>
        Hello again! If you are annoyed by our ads, you will be happy to hear
        that you can use x-Mail free of advertisements starting today, by
        upgrading to our new x-Mail Premium plan.
      </>
    ),
    responses: [<>Ugh</>],
    sender: "x-Mail",
    check: (state) => state.xValue[0] > 200e24 && state.highestXTier >= 3,
    delay: 10000,
  },
};

const worldformula = [
  "Warning",
  "What",
  "Who",
  "Still",
  "Formula",
  "Joined",
  "How",
  "Dangerous",
  "After",
  "Found",
  "Nothing",
]; //Formula Layer + Alpha Layer
const academy = [
  "Welcome",
  "Research",
  "Challenges",
  "Stones",
  "Maxxed",
  "Idle",
  "God",
  "MaxStones",
  "Hint",
  "TrueHint",
]; //Alpha Layer
const homework = [
  "Homework",
  "Learn",
  "Important",
  "Refuse",
  "Klausi",
  "Henry",
  "Powerful",
  "Tommy",
  "Jimmy",
  "Gary",
  "Thx",
  "Profit",
  "Children",
]; //Alpha Layer

const prince = ["Prince", "Transfer", "Failed", "Virus", "Sent", "Rich"]; //Formula Layer
const xmail = ["Prime", "Advantages", "Premium"]; //Formula Layer
const marketresearch = ["Survey", "Submitted", "Results"]; //Alpha Layer

export const mailList = Array.prototype.concat.apply(
  [],
  [worldformula, academy, homework, prince, marketresearch, xmail]
);
