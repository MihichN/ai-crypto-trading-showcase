# Roadmap

## Near Term

- Add contract tests around exchange adapter behavior.
- Add a replay mode for historical market snapshots.
- Track model drift and strategy performance by market regime.

## Scaling

- Move scanner output into a queue when candidate volume grows.
- Split ML inference into a separately autoscaled service.
- Store feature snapshots for explainability and post-trade analysis.

## Leadership Notes

- Treat strategy changes as controlled releases with rollback.
- Keep risk parameters reviewable and audited.
- Separate product metrics from trading-performance metrics.
