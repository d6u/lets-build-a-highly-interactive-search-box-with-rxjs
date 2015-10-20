# Let's Build A Highly Interactive Search Box with RxJS

## Issues of Highly Interactive UI

Events are just data.

- Data happens over time
- Asynchronous data flow
- Data has multiple sources or consumers
- Data also controls above behaviors
- "Houston, we have an error"

![cat with yarn](./images/cat-with-yarn.jpg)

## Patterns to Solve the Issue

- EventEmitter, EventBus...
- Data binding (e.g. Angular, Ember), `Object.observe`, computed properties...
- Node Stream v1, v2, v3, v4, v5...
- Or just callbacks over callbacks

## Let's Build A Piece of A Highly Interactive UI

SpanishDict.com search box

**DEMO**

What does the diff look like when adding new feature

**Diff**

Can we improve

**DEMO**

Can we sleep in the night with those code?

![cannot sleep at night](./images/cannot-sleep-at-night.jpg)

## What Are Observables

Observable represents values over time. Reactive Extension is an implementation of observable pattern that is great at handling:

- Data over time
- Asynchronous data flows
- Combination of multiple sources
- Subscription of multiple consumers
- Errors
- Fine grained control over data

## Let's Rebuild The Search Box with RxJS

**DEMO**

## Example on Asynchronous Data Flow

`flatMap`, `flatMapLatest`

## Example on Combination of Multiple Sources

`combineLatest`, `zip`

## Example on Combination of Multiple Consumers

`subscribe`, `publish`, `share`

## Example on Error Handling

`catch`, `retry`

## Example on Handling Back Pressure

`buffer`, `debounce`, `throttle`, `controlled`

## Hot vs Cold Observables

`publish`, `connect`

## Who Uses Observables
