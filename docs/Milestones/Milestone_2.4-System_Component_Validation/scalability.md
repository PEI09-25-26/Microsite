---
sidebar_position: 2
---

# Scalability

## Observed Behavior

- System is stable under increasing load
- Degradation appears as latency increase rather than failure

## Bottlenecks

- Single Uvicorn process
- No parallel worker execution

## Scaling Strategy

✔ Vertical scaling:
- Increase CPU and RAM

✔ Horizontal improvements (future):
- Multiple Uvicorn workers

---

## Stress Testing

- System begins degrading beyond ~2500 virtual users
- Success rate drops from 100% to ~90% under extreme load

---

![Stress Testing](../../../static\img\stress_testing.png)