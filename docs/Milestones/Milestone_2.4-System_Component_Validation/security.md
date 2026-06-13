---
sidebar_position: 3
---

# Security

## Authentication

- JWT tokens with expiry time
- JTI-based revocation for session control

## Password Security

- Passwords stored using salted **bcrypt hashing**

## Input Validation

- Pydantic schemas validate all incoming requests

## Rate Limiting

- Redis-backed rate limiting protects critical endpoints from abuse

---

## Network Security

- Cloudflare Tunnel used for controlled external access
- Internal services isolated from direct exposure

---

## Authorization

- Session binding ensures users only access their own game resources
- Scoped tokens used for service-to-service communication

---

## Logging & Auditability

- Structured logs with correlation IDs enable request tracing
- System supports debugging across distributed services

---
