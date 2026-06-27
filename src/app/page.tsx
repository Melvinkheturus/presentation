"use client";

import React from "react";
import SlideContainer from "./components/SlideContainer";
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "./slides/Slides1_5";
import { Slide6, Slide7, Slide7_5, SlideNo, SlidePerfectClient, SlideProduct, Slide8, Slide9, Slide10 } from "./slides/Slides6_10";
import { Slide11, Slide12, Slide13, SlideDecisionFilter, Slide14, Slide15 } from "./slides/Slides11_15";
import { Slide16, Slide17, Slide18, Slide19, Slide20, SlideTheQuestion } from "./slides/Slides16_20";

/**
 * MERGEX 2.0 PRESENTATION ENGINE
 * 
 * Keyboard navigation:
 * - Spacebar or Right Arrow (→) to go next
 * - Left Arrow (←) to go back
 * - 'N' key to toggle Presenter Notes
 * - 'F' key to toggle Fullscreen Mode
 */

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "Introduction",
      notes: `Welcome every team member to the MergeX v2 Launch Summit.
Make eye contact with all 18 team members.
Start with: "Today, we are not talking about tasks. We are talking about our future. We are restarting."`,
      component: <Slide1 />,
    },
    {
      id: 2,
      title: "Why Are We Here?",
      notes: `Read Slide: Why are we here?
Emphasize: "We are not here to celebrate. We are here to reset."
Explain that we will learn from our mistakes, align under one vision, and rebuild.`,
      component: <Slide2 />,
    },
    {
      id: 3,
      title: "The AirPods Metaphor",
      notes: `Tell the AirPods metaphor.
Wired headphones get tangled every time they are in your pocket. We spend hours untangling them, only to pack them and repeat the cycle.
AirPods solved this structurally. No wires, no tangling.
Ask: "How much time does MergeX spend untangling internal wires instead of doing growth strategy?"`,
      component: <Slide3 />,
    },
    {
      id: 4,
      title: "The Brutal Truth",
      notes: `Read Slide: The Brutal Truth.
Be direct: We failed to run structured systems, we waited for instructions instead of solving constraints. Departures happened because we were task-oriented.
If Sales struggles... MergeX struggles.
If Operations struggles... MergeX struggles.
If Product struggles... MergeX struggles.
There is no "their problem."
There is only one company.`,
      component: <Slide4 />,
    },
    {
      id: 5,
      title: "Who is MergeX?",
      notes: `People often ask...
What does MergeX do?
Some people say... "We build websites."
Others say... "They do marketing."
Some say... "They build software."

No.
Those are our capabilities.
Not our identity.
Our identity is much deeper.

A founder doesn't come to us because they want a website.
They come to us because their business has stopped growing.
They don't know why.

Our job is not to sell services.
Our job is to find the real constraint.
Fix it.
Measure it.
And help the business scale.
That... is MergeX.`,
      component: <Slide5 />,
    },
    {
      id: 6,
      title: "What We Say NO To",
      notes: `This is our boundary definition.
Read through the rejections list.
We do not chase low-margin, high-overhead clients just to make numbers.
We say NO to purposeless deliverables.
Refusing the wrong business is how we build a legendary brand.`,
      component: <SlideNo />,
    },
    {
      id: 7,
      title: "The Perfect Client",
      notes: `Every team member must know who our perfect client is.
A perfect client is open to change, values systems, takes action, and respects expertise.
The wrong client wants cheap labor, expects instant magic, and ignores advice.
We only sell to the perfect client profile.`,
      component: <SlidePerfectClient />,
    },
    {
      id: 8,
      title: "The Real Problem",
      notes: `Let's imagine a founder walks into our office.
He says, "I need a website."
Do we immediately build one? No.
Another founder says, "I need marketing."
Do we immediately start ads? No.

Why?
Because people don't always know what they actually need.
Just like a patient doesn't walk into a hospital and prescribe their own medicine.
A doctor first diagnoses. Then prescribes.
We do exactly the same.

Businesses don't suffer from a lack of websites.
They suffer from hidden constraints.
Until those constraints are identified, every solution is just guessing.
MergeX doesn't guess. MergeX diagnoses.`,
      component: <Slide6 />,
    },
    {
      id: 9,
      title: "Why Most Agencies Fail",
      notes: `This is why we're different.
Most agencies ask, "What service do you want?"
We ask, "What is stopping your business from growing?"
That single question changes everything.

We don't start with solutions.
We start with understanding.
Because the wrong solution, implemented perfectly, is still the wrong solution.`,
      component: <Slide7 />,
    },
    {
      id: 10,
      title: "The Value Trajectory",
      notes: `Let's look at the financial comparison of these two models.
The Traditional Agency model relies on billing hours. It is linear, capped by headcount, and drives low customer lifetime value.
MergeX 2.0's outcome-based scaling model creates exponential value. It leverages repeatable systems and retains clients through compounding growth.`,
      component: <Slide7_5 />,
    },
    {
      id: 11,
      title: "MergeX is a Product",
      notes: `Explain the concept: MergeX is a product.
We don't sell random consulting hours.
We sell a repeatable growth operating system: MergeX → SCALE Methodology → MergeX OS → Execution Framework → Business Growth.
Productizing our service is how we guarantee outcomes.`,
      component: <SlideProduct />,
    },
    {
      id: 12,
      title: "The Depth of MergeX",
      notes: `Consultants often stop here: Diagnosis. Advice. Report. Goodbye.
Agencies often stop here: Delivery. Website finished. Goodbye.

MergeX doesn't stop there.
We stay with the client until we can measure improvement.
If the strategy doesn't produce results, we improve it.
Because our success isn't measured by project completion.
Our success is measured by client growth.`,
      component: <Slide8 />,
    },
    {
      id: 13,
      title: "The MergeX Ecosystem",
      notes: `People sometimes think MergeX has many services.
Actually... We have one service.
Business Growth.

Everything else is simply a capability.
Technology. Branding. Sales. AI. Operations. Research.
Each exists for one reason.
To remove whatever is stopping the business from growing.`,
      component: <Slide9 />,
    },
    {
      id: 14,
      title: "Why MergeX Exists",
      notes: `This is why MergeX exists.
Not to sell more websites.
Not to sell more software.
Not to sell more marketing.

Our purpose is much bigger.
When a founder is stuck...
When growth has stopped...
When nothing seems to work...
We want MergeX to become the first company they think of.
Not because we have the best technology, but because we consistently solve the right problems.
That is the company we are building.`,
      component: <Slide10 />,
    },
    {
      id: 15,
      title: "Before We Scale Others...",
      notes: `Before we tell businesses how to scale...
We must prove that our own methodology works.
Tomorrow... MergeX becomes our first consulting client.

Every week... We will identify our biggest constraint.
We will diagnose it. We will remove it. We will improve our systems.
Exactly the same way we will help every client.
If our methodology cannot transform MergeX... It has no right to transform anyone else.`,
      component: <Slide11 />,
    },
    {
      id: 16,
      title: "Why MergeX v1 Failed",
      notes: `Let's be honest.
We have talented people. We have intelligent people. We have hardworking people.
Talent was never our biggest problem.
The problem was... Our systems.

If a founder stopped pushing... The system stopped.
If someone forgot... The process disappeared.
That isn't a people problem. That's a systems problem.
MergeX 2.0 will never depend on one person.
It will depend on repeatable systems.`,
      component: <Slide12 />,
    },
    {
      id: 17,
      title: "New Operating Principles",
      notes: `This is probably the biggest cultural shift.
Imagine Sales has a problem. The Sales SPOC owns the outcome.
But everyone asks, "How can I help?"

Imagine Product is delayed. The Product SPOC owns delivery.
But nobody walks away saying, "Not my department."
Because there are no walls anymore.
There is only one company. One mission. One standard.`,
      component: <Slide13 />,
    },
    {
      id: 18,
      title: "The Decision Filter",
      notes: `Every decision we make must pass through this five-step filter:
1. Will this help the client grow?
2. Will this improve MergeX's systems?
3. Will this scale the system?
4. Will this build trust?
5. Will this create measurable value?
If you cannot answer "Yes" to all five, do not do it.`,
      component: <SlideDecisionFilter />,
    },
    {
      id: 19,
      title: "From 'I' to 'We'",
      notes: `I want everyone to remember this.
When a client signs with MergeX...
They didn't choose Manikandan.
They didn't choose Yaashwanth.
They didn't choose a department.
They trusted MergeX.

That means every success belongs to MergeX.
Every failure belongs to MergeX.
Every improvement belongs to MergeX.

When we shift from "I" to "We"...
We stop protecting our roles.
We start protecting our mission.
That is what world-class organizations do.`,
      component: <Slide14 />,
    },
    {
      id: 20,
      title: "The MergeX 2.0 Commitment",
      notes: `Today...
I don't want your agreement.
I want your commitment.
Because a company isn't built by founders.
A company is built by people who choose the same mission every single day.

From this moment...
MergeX 2.0 officially begins.
Not next month. Not next year.
Today.`,
      component: <Slide15 />,
    },
    {
      id: 21,
      title: "The Next 90 Days",
      notes: `People often ask, "Where do we start?"
The answer is... Not everywhere.
We focus on one thing at a time.
Systems. Execution. Growth.
That's how companies scale.`,
      component: <Slide16 />,
    },
    {
      id: 22,
      title: "What Success Looks Like",
      notes: `People remember companies because of what they make them feel.
Apple made technology simple.
Toyota made reliability a standard.
McKinsey became known for strategic thinking.

I want MergeX to become known for one thing.
Business Transformation.`,
      component: <Slide17 />,
    },
    {
      id: 23,
      title: "The Legacy We Want to Leave",
      notes: `MergeX is not just another company.
We're not here only to make revenue.
Revenue is necessary. Profit is necessary. Growth is necessary.
But those are outcomes. Our purpose is much bigger.

Every client that succeeds...
Creates more jobs.
Supports more families.
Improves more lives.
That is the impact we are building.`,
      component: <Slide18 />,
    },
    {
      id: 24,
      title: "My Promise to You",
      notes: `I don't expect perfection from anyone.
Not from you. Not from myself.
But I do expect commitment.

If we stay committed...
We'll learn. We'll improve. We'll grow.
Together.`,
      component: <Slide19 />,
    },
    {
      id: 25,
      title: "Day One & Commitment Pledge",
      notes: `Final Founder Dialogue:
Years from now, people will only see the success.
They won't see today's uncertainty.
They won't see today's struggles.
They won't see today's sacrifices.
But we will remember.
Because this... This is where the story begins.
Every great company has a Day One. Today is ours.

Let's build MergeX—not for ourselves, but for every founder who trusts us, every business we transform, and every future team member who will one day say, "I'm proud to be part of MergeX."
Trust the process. Stay confident. Success will follow us.
Thank you.

*** ACTION ON END ***
Ask every one of the 18 members to stand.
"If you believe in this vision—not because I said it, but because you choose it—then from this moment, let's commit to building MergeX 2.0 together."
(Read the pledge in the box on screen together)`,
      component: <Slide20 />,
    },
    {
      id: 26,
      title: "The Final Question",
      notes: `(Pause for 10 seconds. Let the question sink in. Do not rush.)
Then, with confidence, say: "Let's build it."
Walk off the stage.`,
      component: <SlideTheQuestion />,
    },
  ];

  return <SlideContainer slides={slides} />;
}
