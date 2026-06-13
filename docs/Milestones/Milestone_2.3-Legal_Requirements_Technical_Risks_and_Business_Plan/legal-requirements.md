---
sidebar_position: 1
---

# Legal Requirements

## Data Collection and Processing

### Acquired Data

The system currently processes:

- Player IDs;
- Usernames;
- Email addresses;
- Room IDs;
- JWT authentication tokens (30-minute validity);
- Camera frames that may contain cards, hands, and faces.

### Processing Goals

The collected data is used exclusively for:

- Room creation and monitoring;
- User authentication;
- Turn control;
- Real-time game synchronization;
- Automatic detection of physical cards.

---

## Data Protection (GDPR)

The project follows GDPR principles to minimise the processing of personal data.

### Data Minimisation

Objective: retain only the data strictly necessary for game operation.

- Computer vision processes camera frames directly in RAM;
- No image data is stored on disk.

*(GDPR Art. 5)*

### Pseudonymisation

- Players are identified internally using `player_id`.

### Anonymisation

- Match history may be retained for statistical purposes;
- Links between matches and users are removed.

### Sensitive Data Protection

- Passwords are hashed using **bcrypt** with salt.

---

## Implemented Measures

The following measures are already implemented:

- Explicit consent regarding camera usage;
- Clear privacy policy explaining data collection and retention;
- "Right to be forgotten" functionality through account deletion endpoints.

*(GDPR Art. 17)*

---

## Measures Yet to Be Implemented

Future improvements include:

- Additional reviews of privacy procedures;
- Continuous compliance monitoring as the system evolves.

---

## Licensing and Intellectual Property

### Critical Dependencies

The project relies on technologies with permissive licensing:

- OpenCV
- Kotlin
- NumPy

Software licensing conformity has been reviewed.

### YOLO Licensing

The project uses **Ultralytics YOLO**, licensed under:

- GNU Affero General Public License v3.0 (AGPL-3.0).

This license requires derivative work distributed as a service to be made available under compatible open-source terms.

---

## Sector-Specific Regulations

### Digital Entertainment Sector

At the current stage:

- The application does not involve payments;
- There are no betting systems;
- There are no financial transactions;
- There are no critical security implications.

Therefore, no specific mandatory regulations currently apply.

---

## AI Act (European Union)

The computer vision system:

- Recognises playing cards;
- Does not identify individuals;
- Does not perform biometric identification;
- Does not make automated decisions with legal consequences.

### Practical Implications

- Inform users that automatic detection is in use;
- Maintain documentation of the AI models;
- Monitor detection failures.

If monetisation or prize tournaments are introduced in the future, the legal assessment should be revisited.

---

## Terms and Conditions

### Service Limitations

The service is provided **"as is"**, including limitations of liability regarding:

- Detection failures;
- Temporary unavailability.

### Terms of Use

- Abuse of the system is prohibited;
- Cheating attempts are forbidden;
- Flooding and exploitation attempts are not allowed.

### Camera Usage

The camera is used solely for card recognition.

Users are responsible for ensuring adequate framing conditions.

### Third-Party Services

The project relies on Firebase as a subcontractor, with data hosted within the European Economic Area (EEA).

### Applicable Law

- Portuguese jurisdiction applies.

### Changes to Terms

Users will be informed of changes before participating in future matches.

---
