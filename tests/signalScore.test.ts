import { describe, expect, it } from "vitest"
import { scoreSignal } from "../examples/signal-engine/signalScore"

describe("scoreSignal", () => {
  it("allows high quality liquid symbols", () => {
    const result = scoreSignal({
      symbol: "BTCUSDT",
      spreadBps: 1,
      volatilityPct: 1.5,
      volumeRank: 3,
      trendStrength: 0.9,
    })

    expect(result.allowed).toBe(true)
    expect(result.reasons).toEqual([])
    expect(result.score).toBeGreaterThanOrEqual(0.65)
  })

  it("blocks symbols with wide spreads even when other inputs are strong", () => {
    const result = scoreSignal({
      symbol: "ALTUSDT",
      spreadBps: 12,
      volatilityPct: 1.8,
      volumeRank: 10,
      trendStrength: 0.95,
    })

    expect(result.allowed).toBe(false)
    expect(result.reasons).toContain("spread_too_wide")
  })

  it("blocks low-liquidity symbols", () => {
    const result = scoreSignal({
      symbol: "LOWLIQ",
      spreadBps: 2,
      volatilityPct: 1.2,
      volumeRank: 150,
      trendStrength: 0.8,
    })

    expect(result.allowed).toBe(false)
    expect(result.reasons).toContain("low_liquidity")
  })
})
