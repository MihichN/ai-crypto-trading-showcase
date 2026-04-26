export type MarketSnapshot = {
  symbol: string
  spreadBps: number
  volatilityPct: number
  volumeRank: number
  trendStrength: number
}

export type SignalScore = {
  symbol: string
  score: number
  allowed: boolean
  reasons: string[]
}

export function scoreSignal(snapshot: MarketSnapshot): SignalScore {
  const reasons: string[] = []

  if (snapshot.spreadBps > 8) {
    reasons.push("spread_too_wide")
  }

  if (snapshot.volumeRank > 100) {
    reasons.push("low_liquidity")
  }

  const liquidityScore = normalizeInverse(snapshot.volumeRank, 1, 100)
  const spreadScore = normalizeInverse(snapshot.spreadBps, 0, 8)
  const volatilityScore = normalize(snapshot.volatilityPct, 0.2, 3)
  const trendScore = normalize(snapshot.trendStrength, 0, 1)

  const score =
    liquidityScore * 0.3 +
    spreadScore * 0.25 +
    volatilityScore * 0.2 +
    trendScore * 0.25

  return {
    symbol: snapshot.symbol,
    score: round(score),
    allowed: reasons.length === 0 && score >= 0.65,
    reasons,
  }
}

function normalize(value: number, min: number, max: number): number {
  return Math.max(0, Math.min(1, (value - min) / (max - min)))
}

function normalizeInverse(value: number, min: number, max: number): number {
  return 1 - normalize(value, min, max)
}

function round(value: number): number {
  return Math.round(value * 1000) / 1000
}
