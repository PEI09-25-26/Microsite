---
sidebar_position: 2
---

# Technical Risks

## Interoperability and External Dependencies

### Critical External Dependencies

#### YOLO

**Risk:**

Future updates may introduce incompatibilities affecting image processing.

**Mitigation:**

- Version control;
- Extensive testing before upgrades.

#### MQTT

**Risk:**

Broker failures or library discontinuation could disrupt real-time communication.

**Mitigation:**

- Alternative messaging strategies;
- Monitoring and contingency planning.

---

## Critical External Services

The project depends on several external services:

- Cloudflare;
- Firebase;
- SendGrid (Twilio).

Service interruptions may impact availability.

---

## Technical Debt and Maintainability

### Duplicate Architectures

**Problem**

Multiple messaging implementations resulted in duplicated logic.

**Mitigation**

- Consolidate the architecture around Pub/Sub 1.4.

---

### Limited Backend Validation

**Problem**

Weak validation and fault protection increase system fragility.

**Mitigation**

- Introduce robust validations;
- Improve exception handling.

---

### Lack of Automated Testing

**Problem**

Absence of:
- Unit tests;
- Integration tests;
- End-to-end tests.

**Mitigation**

- Establish a complete testing strategy.

---

### Limited Front-End Error Handling

**Problem**

Poor feedback may confuse users.

**Mitigation**

- Improve consistency and clarity of user-facing errors.

---

## Fragility of Critical Components

### VisionActivity

**Problem**

The image processing pipeline:

- Converts images to bitmap;
- Uses only the first colour layer;
- Relies on fixed thresholds.

Different devices and lighting conditions may reduce detection accuracy.

**Impact**

Card recognition failures.

**Mitigation Strategy**

Implement dynamic thresholds that self-calibrate according to environmental conditions.

---

### Referee Component

**Problem**

`Referee()` is currently implemented as a singleton.

Running multiple physical games simultaneously could mix game states.

**Impact**

Incorrect gameplay behaviour.

**Mitigation Strategy**

Instantiate a separate Referee for each `game_id`.

---
