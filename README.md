# AI Crypto Trading Platform Showcase

Confidentiality-safe showcase of an AI-assisted crypto futures trading platform. The original project includes a TypeScript trading engine, Python ML service, MySQL persistence, Telegram monitoring, and exchange integrations. This repository contains only public-safe architecture notes and sanitized code samples.

## Highlights

- Multi-stage market scanner and trade orchestration pipeline.
- ML-assisted signal evaluation with feature scoring and risk gates.
- Separate worker process for position lifecycle management.
- Telegram monitoring and operational alerts.
- MySQL-backed audit trail for signals, trades, and model feedback.

## Tech Stack

- TypeScript, Node.js, exchange SDKs, Telegram Bot API.
- Python, FastAPI, pandas, scikit-learn, XGBoost.
- MySQL, structured logging, runtime validation.

## Repository Contents

- `docs/architecture.md` - high-level architecture and design decisions.
- `docs/adr/` - architecture decision records.
- `docs/production.md` - reliability, security, observability, and rollout concerns.
- `docs/roadmap.md` - scaling plan and future engineering work.
- `examples/signal-engine/signalScore.ts` - sanitized scoring example with no proprietary strategy.
- `tests/` - unit tests covering scoring edge cases.
- `.github/workflows/ci.yml` - CI pipeline for typecheck and tests.

## Engineering Quality

```bash
npm install
npm run typecheck
npm test
```

## Confidentiality Notice

The production implementation is private. This showcase intentionally excludes exchange keys, trading strategies, model weights, risk parameters, production schemas, and deployment details.
