# ADR 0001: Separate Scanner, Orchestrator, and Worker

## Status

Accepted

## Context

Trading systems often fail when discovery, decision-making, and position management are coupled into one runtime loop. A slow exchange response, model call, or database operation can block unrelated safety logic.

## Decision

Split responsibilities into three independent runtime concerns:

- Scanner discovers candidate symbols.
- Orchestrator builds a decision context and applies risk gates.
- Worker manages open position lifecycle and safety exits.

## Consequences

- Safety logic can continue even when new entries are paused.
- Each runtime can be monitored and restarted independently.
- The architecture requires explicit event/state persistence to avoid hidden in-memory coupling.
