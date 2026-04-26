# Production Concerns

## Risk Controls

- Hard daily loss limits and per-symbol cooldowns.
- Explicit risk gate before any exchange-side order placement.
- Kill switch that can disable new entries while allowing exits.
- Testnet-first rollout for strategy changes.

## Reliability

- Timeouts around exchange, model, and news/provider calls.
- Idempotent order intents to prevent duplicate placement after retries.
- Structured logs with correlation IDs for scanner decisions and trade lifecycle events.
- Persisted trade state so workers can resume after restart.

## Observability

- Metrics for skipped candidates, approved signals, order failures, latency, win rate, drawdown, and model confidence drift.
- Alerts for exchange API degradation, missing worker heartbeats, and loss threshold breaches.

## Security

- Exchange keys stored only in secret managers or local `.env`, never in Git.
- Separate testnet and production credentials.
- Principle-of-least-privilege API keys where provider supports it.
