---
sidebar_position: 1
---

# Performance

## API Response Times

- Fastest processing time: **< 15.6ms**
- Measured at API Gateway level for request forwarding.

## Bottlenecks Identified

- Slow endpoint: `game/command/create_room`
- Inefficient endpoint: `/api/friends/list`

### Root Cause

- Fetching friend profiles in a loop (N+1 pattern)
- Lack of optimized database queries

### Optimizations

- Replace Python-side filtering with native Firestore queries
- Use indexed queries for faster lookups

---

## Throughput

- System handles **~137 API requests/second**
- Tested under concurrent load conditions

---

## Load Testing Results

- **0% HTTP failures** under 50 virtual users
- System remains stable but slows under load (no crashes)

Tools used:
- k6 load testing framework
- 50–2500 virtual users

---

## Memory Management

- Queue size capped at **512 events**
- Excess events are dropped to prevent memory leaks or crashes

---
