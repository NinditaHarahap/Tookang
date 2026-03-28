  
**TOOKANG**

Software Requirements Specification

*Version 1.5  |  March 2026  |  Adds Solo Tukang vs Mandor/Crew Model*

| Platform:         Web (Next.js 14\) \+ Mobile (React Native / Expo) Language:         Bilingual — Bahasa Indonesia & English Business Model:   Marketplace with Hybrid Escrow & Percentage Commission AI Layer:         Claude API (Anthropic /v1/messages) Target Market:    Bali — Homeowners, Expats, Villa & Property Managers v1.5 Focus:       Introduces Solo Tukang (Freelancer) vs Mandor/Crew (Agency) model |
| :---- |

**Sections marked ★ NEW are new in v1.5  |  ● SOLO \= Solo-specific  |  ▲ CREW \= Mandor/Crew-specific**

# **1\. Project Overview**

Tookang is a bilingual (Bahasa Indonesia / English) marketplace platform connecting homeowners, expats, and property managers in Bali with trusted local craftsmen (tukang). The platform operates as a managed marketplace with a hybrid escrow model and now supports two distinct service-provider types — Solo Tukang (individual craftsmen) and Mandor/Crew (foreman-led teams) — mirroring the Upwork Freelancer vs Agency model.

## **1.1 The Core Problem**

* No central directory of verified tradespeople in Bali

* Language barrier between expats and local Tukang

* No accountability — ghosting, incomplete jobs, price disputes are common

* No way to compare individual craftsmen vs trade crews before hiring

* Complex multi-trade jobs (e.g. full villa renovation) have no structured quoting path

## **1.2 The Solution**

* Searchable directory of Solo Tukang and Mandor/Crew teams across 8 trade categories

* Two-stage bidding (Inspection → Final Quote) with job-size routing to appropriate tier

* AI-powered job assistant, photo analysis, voice input, and bilingual translation

* Hybrid escrow with milestone-based fund release

* Fully independent rating systems — solo rating and agency rating never cross-pollinate

# **2\. Goals & Success Metrics**

Target: 3 months post-launch

| Goal | Metric | Target (3 months) |
| :---- | :---- | :---- |
| Grow Solo Tukang supply | Registered & verified Solo Tukang | 200+ in Bali |
| Grow Mandor/Crew supply | Registered & verified Mandor crews | 30+ in Bali |
| Drive demand | Jobs posted per week | 100+ |
| Ensure quality | Average rating (both tiers) | ≥ 4.2 / 5.0 |
| Monetize | Completed escrow transactions | 50+ / month |
| Large-job capture | Jobs taken by Mandor/Crew | \> 20% of total |
| Trust | Dispute rate | \< 5% of completed jobs |
| Retention | User repeat hire rate | \> 30% |

# **3\. User Roles**

## **3.1 User (Job Poster)**

A homeowner, expat, villa manager, or anyone who needs a craftsman. They post jobs, receive bids from both Solo Tukang and Mandor/Crew teams, compare options, and hold payment in escrow.

## **3.2 Solo Tukang  ● SOLO**

An individual craftsman who works alone. Equivalent to an Upwork Freelancer. Has a personal profile, builds a solo reputation, and bids directly on jobs. Can optionally join a Mandor's crew later without losing their independent solo profile or rating history.

## **3.3 Mandor (Crew Lead)  ▲ CREW  ★ NEW**

A foreman or contractor who manages a team of workers. Equivalent to an Upwork Agency Owner. The Mandor owns the agency profile, bids on jobs on behalf of the crew, and is solely accountable for job delivery. Individual crew members do not interact directly with Users during a crew-type job.

## **3.4 Crew Member  ▲ CREW  ★ NEW**

A Tukang who belongs to one or more Mandor crews. They maintain a fully independent Solo Tukang profile and can bid on small jobs as an individual. When a Mandor assigns them to a crew job, they operate under the Mandor's accountability. Their solo reviews and agency-job internal scores are stored separately and never merged.

## **3.5 Admin**

Tookang platform staff. They verify both Solo Tukang KTPs and Mandor business registrations, handle disputes, and monitor platform health across both tiers.

# **4\. Functional Requirements**

## **4.1 Authentication & Onboarding — Updated**

### **Both Roles**

* Register via email \+ password or Google OAuth

* Phone number verification (OTP via SMS/WhatsApp)

* Language preference (ID / EN) on first launch

* Role selection: "I need a Tukang" / "I am a Solo Tukang" / "I manage a crew (Mandor)"

### **User Onboarding**

* Name, profile photo, location (area in Bali), optional property type

### **Solo Tukang Onboarding  ● SOLO**

* Personal info, WhatsApp number, service area, trade categories (max 3\)

* KTP upload for identity verification

* Optional portfolio photos and daily/job rates

* Availability calendar setup

* Skill assessment quiz for Tookang Certified badge eligibility

### **Mandor Onboarding  ▲ CREW  ★ NEW**

* Personal info \+ crew/agency brand name (e.g. "Bali Build Crew")

* WhatsApp number (used as the agency contact for bridge messages)

* Service area, trade categories covered by crew (can select all 8\)

* KTP upload (Mandor personal) \+ NIB or SIUP business registration document

* Agency logo/photo and portfolio of past crew projects

* Invite crew members by phone number — they receive a WhatsApp invitation link

* Set crew size and list member trade specialties

## **4.2 User — Discovery & Job Posting — Updated**

* Browse Solo Tukang and Mandor/Crew teams; toggle between views or show both

* Filter panel includes: Solo only / Crew welcome / Both

* AI Job Intelligence Assistant analyses description and suggests appropriate tier: if budget \> Rp 5,000,000 or multiple trade categories detected → recommends opening to crews

* "Crew Welcome" toggle on job post (default ON for large/multi-trade jobs, OFF for small jobs)

* Voice input for job description (Bahasa Indonesia \+ English)

* Mandatory photo with AI analysis (relevance \+ severity)

* AI price estimate displayed before submission

## **4.3 Bidding — Updated**

* A job may receive bids from Solo Tukang and/or Mandor/Crew depending on the Crew Welcome setting

* User's bid inbox clearly separates Solo bids and Crew bids with distinct card designs

* Solo bid card: individual photo, name, solo rating, badges, trade, rate

* Crew bid card: agency logo, crew name, agency rating, team member thumbnails assigned, multi-trade coverage, crew portfolio link

* User can compare both and accept one — accepting a crew bid locks out solo bids and vice versa

## **4.4 Guided Review Flow — Updated**

* After job completion, User reviews the entity they hired — either the Solo Tukang or the Mandor/Crew as a unit

* Reviews for crew jobs go to the agency rating, never to individual crew members' solo profiles

* Mandor receives an internal crew member performance score (visible only to Mandor in their dashboard) — separate from public agency rating

* Guided questions: on time? price accuracy? would rehire? \+ optional free text

## **4.5 Job Completion Certificate (Auto-PDF)**

* Auto-generated on confirmation for both solo and crew jobs

* For crew jobs, certificate lists: agency name \+ Mandor name \+ assigned crew members

## **4.6 Tukang Availability Calendar**

* Solo Tukang: personal availability (Available Today / Busy / On Leave)

* Mandor: crew availability — can flag as available even if some members are busy, based on bench capacity

# **5\. Solo Tukang vs Mandor/Crew — Full Specification**

| This section is the definitive reference for all logic that differs between the two service-provider tiers. Where behaviour is identical, it is not repeated here — refer to the relevant section. Design principle: ratings are ALWAYS kept separate. A Tukang's solo score and their agency-job internal score are stored in different columns and never averaged, combined, or displayed together. |
| :---- |

## **5.1 Account Type Overview  ★ NEW**

| Dimension | Solo Tukang  ● | Mandor / Crew  ▲ |
| :---- | :---- | :---- |
| Upwork analogue | Freelancer | Agency |
| Profile owner | Individual Tukang | Mandor (foreman) |
| Trade categories | Max 3 | All 8 (crew combined) |
| Job size | Small to medium | Medium to large / multi-trade |
| Bid as | Self | Agency brand |
| Accountable party | Solo Tukang | Mandor |
| Public rating | Solo rating (public) | Agency rating (public) |
| Internal score | None | Per crew member (Mandor-only) |
| Verification docs | KTP only | KTP \+ NIB/SIUP |
| Payout destination | Personal wallet | Agency wallet → Mandor distributes |
| Platform fee | 10–15% (per badge tier) | 10–15% (per agency tier) |
| Max active bids | 10 | 20 (larger pipeline expected) |
| WhatsApp bridge | Tukang's personal number | Mandor's number (agency contact) |
| Can join crew | Yes, without losing solo profile | — |

## **5.2 Profile Structure  ★ NEW**

| Solo Tukang Profile  ● Profile photo (personal) Full name Location & service area Trade categories (max 3\) Solo rating ★ (public) Solo badges (Top Rated, Certified...) Jobs completed (solo count only) Response rate & response time Portfolio photos (personal work) Hourly / daily / job rate Availability status KTP verified tick |  | Mandor / Agency Profile  ▲ Agency logo \+ crew brand name Mandor's name as contact Service area (all Bali or regional) Trade categories covered (crew-wide) Agency rating ★ (public) Agency badges (separate set) Agency jobs completed Agency response rate Crew portfolio (larger projects) Project-based rate (not daily) Crew availability status NIB/SIUP verified tick Crew member thumbnails (clickable) |
| :---- | :---- | :---- |

## **5.3 Crew Composition & Member Management  ★ NEW**

* A Mandor can have 2–50 active crew members

* Each crew member is a registered Solo Tukang on the platform — they have their own solo profile running in parallel

* Mandor invites crew members via phone number; the invitee receives a WhatsApp link to accept. Acceptance does not affect their solo profile

* Mandor assigns specific crew members to each job at bid time — e.g. "1 plumber \+ 1 electrician from our crew"

* Crew members can be part of multiple crews simultaneously (one Tukang, multiple Mandors)

* Mandor can remove a crew member at any time. Active jobs are not affected — the assignment stands

* Crew member can leave a crew at any time. Their solo profile is completely unaffected

## **5.4 Bid Card Design Differences  ★ NEW**

| Solo Bid Card  ● Tukang profile photo (large) Name \+ trade badge Solo star rating (e.g. ★ 4.8) Jobs completed: 47 Inspection bid or direct quote amount Estimated duration Short bid message "View solo profile" link |  | Crew Bid Card  ▲ Agency logo (large) Crew name \+ verified agency badge Agency star rating (e.g. ★ 4.9) Agency jobs completed: 23 Assigned members: 3 thumbnails Trade coverage icons for this job Project quote amount Estimated project duration "View agency profile" link |
| :---- | :---- | :---- |

## **5.5 Rating System — Fully Separate  ★ NEW**

| RULE: A Tukang's solo rating and their agency-job internal score are ALWAYS stored separately. They are never averaged, combined, displayed together, or used to infer the other. This mirrors Upwork's model exactly — a freelancer's personal profile score does not change when they complete a job as part of an agency. |
| :---- |

| Rating Type | Who receives it | Where displayed | Who can see it |
| :---- | :---- | :---- | :---- |
| Solo public rating | Solo Tukang (when hired individually) | Solo profile · search results | Everyone |
| Agency public rating | Mandor/Crew (when agency is hired) | Agency profile · search results | Everyone |
| Crew member internal score | Individual crew member (per agency job) | Mandor's team dashboard only | Mandor only |

* The crew member internal score is generated from the Mandor's private post-job rating of each team member they assigned — a 1–5 score \+ optional note

* This score is used by the Mandor to build a quality-sorted roster and decide who to assign to future jobs

* It is invisible to the User, to other Tukang, and to Admin (except in dispute investigation)

* If a crew member later bids solo on a job, only their solo rating is shown — crew internal scores are never surfaced

## **5.6 Job-Size Eligibility Routing  ★ NEW**

The AI Job Intelligence Assistant determines which tier(s) are eligible to bid based on job characteristics. This can be overridden by the User.

| Job signal | AI recommendation | User can override? |
| :---- | :---- | :---- |
| Budget \< Rp 1,000,000 | Solo Tukang only | Yes — can open to crews |
| Budget Rp 1M – Rp 5M | Both tiers eligible | Yes |
| Budget \> Rp 5,000,000 | Crew recommended | Yes — can solo-only |
| Multi-trade categories detected | Crew recommended | Yes |
| requires\_inspection \= false \+ simple job | Solo preferred | Yes |
| requires\_inspection \= true \+ complex job | Both, crew highlighted | Yes |

## **5.7 Verification Differences  ★ NEW**

| Solo Verification  ● KTP (national ID) upload Admin manual review (24–48 hrs) Optional: skill assessment quiz Skill pass → Certified badge eligible KTP verified tick on profile |  | Agency Verification  ▲ Mandor KTP upload NIB or SIUP business registration Both docs reviewed by Admin Agency portfolio spot-check Crew member count minimum: 2 NIB/SIUP verified tick on agency profile No skill quiz (agency rated on project outcomes) |
| :---- | :---- | :---- |

## **5.8 Platform Fee — Applied Equally by Tier  ★ NEW**

| Tier / Badge | Platform Fee | Applies to |
| :---- | :---- | :---- |
| Tookang Certified Solo | 10% | Solo jobs only |
| Top Rated Solo | 12% | Solo jobs only |
| Standard Solo | 15% | Solo jobs only |
| Verified Agency (NIB/SIUP) | 12% | Crew jobs only |
| Unverified Agency | 15% | Crew jobs only |
| Top Agency (new badge) | 10% | Crew jobs only |

*Note: A Solo Tukang who also belongs to a crew is billed the crew rate for agency jobs and their solo rate for individual jobs — independently.*

## **5.9 Payout Flow Differences  ★ NEW**

| Solo Tukang Payout  ● Escrow releases to personal wallet Solo Tukang withdraws to personal bank Min withdrawal: Rp 100,000 Tookang is not involved in any labour split |  | Agency / Crew Payout  ▲ Escrow releases to agency wallet Mandor withdraws from agency wallet Mandor distributes to crew members externally (cash/transfer — not on-platform) Tookang is NOT responsible for internal crew payroll Min withdrawal: Rp 500,000 (higher minimum for agency) |
| :---- | :---- | :---- |

# **6\. Non-Functional Requirements**

| Requirement | Specification |
| :---- | :---- |
| Performance | Page load \< 2s on 4G; AI responses streamed with loading state |
| Availability | 99.5% uptime; Supabase managed infra |
| Security | Midtrans PCI-DSS; HTTPS everywhere; JWT auth; RLS on all tables |
| Data Privacy | UU PDP (Indonesian Data Protection Law) compliance |
| Localization | Full bilingual (ID/EN); IDR; WIB/WITA/WIT timezones |
| AI Fallback | If Claude API down, job posting falls back to standard manual form |
| Offline Tolerance | Key screens cached; WhatsApp Bridge functional on 2G |
| Accessibility | WCAG 2.1 AA minimum for web; ≥ 44pt touch targets on mobile |
| Rating isolation | Solo ratings and agency ratings stored in separate DB columns — no shared query path |

# **7\. AI Features Specification (Claude API)**

| All AI features use POST /v1/messages  |  Model: claude-sonnet-4-20250514 All prompts are bilingual (ID \+ EN). Every AI-dependent flow has a manual fallback. |
| :---- |

## **7.1 Job Intelligence Assistant — Updated**

Now also determines which tier to recommend (solo / crew / both) as part of its structured output.

* Output JSON: { category, title, budget\_range, urgency, requires\_inspection, missing\_fields\[\], recommended\_tier: 'solo'|'crew'|'both' }

* If multi-trade categories are detected in one description, recommended\_tier \= 'crew'

## **7.2 Smart Tukang Matching — Updated**

Runs twice per job — once to rank Solo Tukang, once to rank Mandor/Crew. Results are served as two separate sorted lists to the User.

| Factor | Weight | Solo source | Crew source |
| :---- | :---- | :---- | :---- |
| Skill / Category match | 30% | tukang\_profiles.categories | agencies.trade\_categories |
| Distance from job | 20% | tukang\_profiles.service\_area | agencies.service\_area |
| Rating average | 20% | solo\_rating\_avg | agency\_rating\_avg |
| Jobs completed | 15% | solo\_jobs\_count | agency\_jobs\_count |
| Response rate | 10% | messages avg (solo thread) | messages avg (agency thread) |
| Availability | 5% | availability\_status | crew\_availability\_status |

## **7.3 Bilingual Chat Bridge**

Identical for both tiers. For crew jobs, the translation bridge connects the User's in-app chat to the Mandor's WhatsApp — not to individual crew members.

## **7.4 Trust & Safety**

Flags suspicious reviews across both rating systems independently.

## **7.5 Dispute Assistant**

Unchanged — Mandor is the accountable party for crew jobs, so dispute resolution is always with the Mandor.

## **7.6 Voice Input**

Unchanged.

## **7.7 AI Price Estimator**

Generates two estimates for eligible jobs: one for solo hire and one for crew hire, shown side by side.

## **7.8 AI Photo Analysis**

Unchanged.

# **8\. Payment, Escrow & Bidding Specification**

The core two-stage escrow logic is identical for both tiers. Differences are noted below.

## **8.1 Platform Fee Logic**

See Section 5.8 for the full fee table by tier and badge.

## **8.2 Two-Stage Bidding & Escrow Flow**

Stages are identical for solo and crew jobs. The only difference is who submits what:

* Stage 1 (Inspection Bid): submitted by Solo Tukang / Mandor

* GPS check-in: Solo Tukang checks in personally. For crew jobs, the Mandor checks in (or designates a crew lead to check in using the Mandor's app)

* Stage 2 (Final Quote): submitted by Solo Tukang / Mandor

* Material Deposit: up to 30% released on Job Start photo — same for both tiers

* Job Finish photo: submitted by Solo Tukang / Mandor

* Auto-release: 72 hours after Job Finish photo — same for both

## **8.3 Bid Rules & Cancellation Policy**

* Solo Tukang: max 10 active bids at any time

* Mandor/Crew: max 20 active bids (larger pipeline expected for agencies)

* Bid expiry, retraction, and cancellation rules are identical across both tiers

## **8.4 Dispute Resolution**

Identical process for both tiers. For crew jobs, the Mandor is the sole accountable party — crew members are not named in disputes or resolution outcomes.

# **9\. Tukang Wallet & Payout Specification**

## **9.1 Solo Tukang Wallet  ●**

* Accumulates earnings from solo jobs only

* Available balance, pending balance, material advance tracking

* Min withdrawal: Rp 100,000 to personal bank account

* Payout via Midtrans Payouts (MVP) / Xendit (post-launch)

## **9.2 Agency Wallet  ▲  ★ NEW**

* Separate wallet entity linked to the agency, not the Mandor's personal profile

* Accumulates earnings from crew/agency jobs only

* Min withdrawal: Rp 500,000 to Mandor's registered business bank account

* Payout displayed as: agency jobs completed × net amount after platform fee

* Mandor's personal solo wallet (if they also do solo work) is a completely separate balance

* Tookang does not facilitate or track internal crew payroll — that is outside platform scope

# **10\. Notification System**

## **10.1 Notification Channels**

| Event | User | Solo Tukang | Mandor (Crew) |
| :---- | :---- | :---- | :---- |
| New bid received | Push \+ in-app | — | — |
| Bid accepted | — | Push \+ WhatsApp | Push \+ WhatsApp |
| Escrow funded | In-app | Push \+ WhatsApp | Push \+ WhatsApp |
| Final quote submitted | Push \+ in-app | — | — |
| Job Start photo uploaded | Push \+ in-app | — | — |
| Job Finish photo | Push \+ in-app | — | — |
| Funds released to wallet | — | Push \+ WhatsApp | Push \+ WhatsApp (agency wallet) |
| Dispute opened | Push \+ email | Push \+ WhatsApp | Push \+ WhatsApp |
| Crew invite received | — | WhatsApp | — |

## **10.2 Implementation**

* Push: Expo Push (mobile) \+ browser push (web)

* WhatsApp: Twilio/Wati API — Mandor's number for all crew-job notifications

* SMS fallback for critical events (escrow funded, dispute)

* All notifications respect language preference (ID / EN)

# **11\. Tukang Label & Badge System — Updated**

Two independent badge sets. Solo badges only appear on solo profiles. Agency badges only appear on agency profiles. A Tukang who belongs to a crew shows their solo badges when browsing in solo mode.

## **11.1 Solo Tukang Badges  ●**

| Badge | Emoji | Criteria |
| :---- | :---- | :---- |
| Newly Joined | 🟢 | \< 30 days, ≥ 70% profile completion — solo only |
| Top Rated | 🟡 | ≥ 10 solo jobs, ≥ 4.5 solo rating, ≥ 80% response rate |
| Tookang Certified | 🟣 | KTP verified, skill assessment passed, ≥ 20 solo jobs, zero solo disputes. Highest search boost \+ 10% fee. |
| Repeat Favourite | 🟠 | Rehired by ≥ 3 unique Users (solo contracts only) |
| Fast Responder | 🔵 | Average solo first-reply \< 1 hour |
| Rising Star | 🟩 | \< 90 days, ≥ 5 solo jobs, recent solo ratings ≥ 4.5 |

## **11.2 Agency / Mandor Badges  ▲  ★ NEW**

| Badge | Emoji | Criteria |
| :---- | :---- | :---- |
| New Agency | 🟢 | \< 60 days on platform, NIB/SIUP verified, ≥ 2 crew members |
| Top Agency | 🟡 | ≥ 10 agency jobs, ≥ 4.5 agency rating — earns 10% fee tier |
| Certified Agency | 🟣 | NIB/SIUP \+ KTP verified, ≥ 20 agency jobs, zero agency disputes, Admin-approved portfolio review |
| Multi-Trade Crew | 🟠 | Has verified members across ≥ 4 distinct trade categories |
| Fast Mandor | 🔵 | Average agency bid response \< 2 hours (crew response budgeted longer than solo) |
| Rising Crew | 🟩 | \< 120 days, ≥ 5 agency jobs, recent ratings ≥ 4.5 |

# **12\. In-App Chat & WhatsApp Bridge**

## **12.1 Core In-App Chat**

* Real-time text, read receipts, media uploads (Supabase Realtime)

* Server-side bilingual translation on every message

* Mandatory Job Start \+ Job Finish photo prompts injected as system messages

* For crew jobs: chat thread is User ↔ Mandor only. Crew members do not have a chat channel with the User

## **12.2 WhatsApp Bridge**

* Solo jobs: User in-app messages → Solo Tukang's WhatsApp

* Crew jobs: User in-app messages → Mandor's WhatsApp (the agency contact number)

* Media sync: photos from either WhatsApp number are auto-attached to the correct job record

## **12.3 Deep-Link Specification**

| Event | Deep link target |
| :---- | :---- |
| New job match (solo) | tookang://jobs/{job\_id} |
| New job match (crew) | tookang://agency/jobs/{job\_id} |
| Bid accepted | tookang://jobs/{job\_id}/active |
| Crew invite received | tookang://crew/invite/{invite\_token} |
| Dispute opened | tookang://disputes/{dispute\_id} |

# **13\. Tech Stack**

| Layer | Technology | Notes |
| :---- | :---- | :---- |
| Web Frontend | Next.js 14 \+ Tailwind CSS | App Router; SSR for job/profile detail pages |
| Mobile | React Native (Expo) | EAS Build for production |
| Backend / API | Node.js \+ Express \+ Supabase Edge Fns | Edge Functions for AI and webhooks |
| Database & Auth | PostgreSQL (Supabase) \+ Supabase Auth | RLS policies enforced; separate views for solo vs agency data |
| Realtime | Supabase Realtime (WebSockets) | Chat, job status updates |
| AI | Claude API — claude-sonnet-4-20250514 | Job assistant, matching, translation, photo analysis |
| Payments | Midtrans (Indonesia) | Mocked in MVP |
| Communications | Twilio / Wati WhatsApp Business API | Bridge \+ notifications |
| Storage | Supabase Storage | Photos, KTP, NIB/SIUP docs, PDFs |
| PDF Generation | Puppeteer (server-side) | Job Completion Certificates |
| Push Notifications | Expo Push / Browser Push API | Per Section 10 |
| Voice Input | Web Speech API / Expo Speech | Bahasa Indonesia \+ English |

# **14\. Database Schema (Overview)**

Updated in v1.5 to support the Solo Tukang / Mandor/Crew split with fully isolated rating columns.

### **users**

| id, email, phone, name, avatar\_url, location, language\_preference, role (enum: user/tukang), account\_type (enum: solo/mandor), created\_at |
| :---- |

### **tukang\_profiles  ●  (Solo Tukang)**

| id, user\_id (FK), bio, categories\[\] (max 3), service\_area, rates, solo\_rating\_avg, solo\_jobs\_count, solo\_disputes\_count, verification\_tier, ktp\_verified (bool), availability\_status (enum: available/busy/on\_leave), bank\_account\_json, wallet\_balance\_idr, wallet\_pending\_idr |
| :---- |

### **agencies  ▲  (Mandor/Crew)  ★ NEW**

| id, mandor\_id (FK → users.id), agency\_name, bio, logo\_url, trade\_categories\[\] (all 8 possible), service\_area, agency\_rating\_avg, agency\_jobs\_count, agency\_disputes\_count, nib\_siup\_doc\_url, nib\_verified (bool), ktp\_verified (bool), crew\_availability\_status (enum: available/busy/on\_leave), agency\_wallet\_balance\_idr, agency\_wallet\_pending\_idr, agency\_bank\_account\_json, created\_at |
| :---- |

### **agency\_members  ▲  ★ NEW**

| id, agency\_id (FK → agencies.id), tukang\_id (FK → tukang\_profiles.id), trade\_specialty, joined\_at, status (enum: active/inactive), internal\_score\_avg (float — visible to Mandor only), internal\_score\_count (integer) |
| :---- |

### **jobs**

| id, user\_id (FK), title, description, category, photos\[\], budget\_min, budget\_max, urgency, status, location, requires\_inspection (bool), inspection\_fee\_idr, hired\_type (enum: solo/crew), hired\_tukang\_id (FK, nullable), hired\_agency\_id (FK, nullable), crew\_member\_ids\[\] (assigned members for this job), start\_photo\_url, finish\_photo\_url, ai\_price\_estimate\_json, photo\_analysis\_json, voice\_transcript, certificate\_url, crew\_welcome (bool), recommended\_tier, created\_at |
| :---- |

### **bids**

| id, job\_id (FK), bid\_from\_type (enum: solo/crew), tukang\_id (FK, nullable), agency\_id (FK, nullable), assigned\_member\_ids\[\] (for crew bids), amount, message, duration\_estimate, status, expires\_at, bid\_type (enum: inspection\_only/direct\_quote), final\_quote\_amount |
| :---- |

### **transactions**

| id, job\_id (FK), user\_id (FK), payee\_type (enum: solo/crew), tukang\_id (FK, nullable), agency\_id (FK, nullable), total\_amount, platform\_fee\_rate, platform\_fee\_amount, material\_release\_amount, status (enum: inspection\_escrowed/full\_escrow\_funded/pending\_confirmation/completed/disputed), midtrans\_order\_id |
| :---- |

### **reviews**

| id, job\_id (FK), reviewer\_id (FK), review\_target\_type (enum: solo/crew), tukang\_id (FK, nullable), agency\_id (FK, nullable), on\_time, price\_accuracy, would\_rehire, comment, ai\_authenticity\_score, created\_at |
| :---- |

### **crew\_member\_internal\_scores  ▲  ★ NEW**

| id, job\_id (FK), agency\_id (FK), tukang\_id (FK → crew member), mandor\_score (1–5 integer), mandor\_note (text, optional), created\_at \[ Visible ONLY to the Mandor who owns the agency. Never exposed via public API. \] |
| :---- |

### **messages · notifications · disputes**

| Unchanged from v1.4. messages.thread\_id links to the job record, which carries hired\_type so the UI can render solo vs crew chat context correctly. |
| :---- |

# **15\. MVP Scope vs Post-Launch**

## **15.1 Hackathon MVP (v1.0)**

| Build the Solo Tukang flow end-to-end first — it is the simpler path and the majority use case. Add Mandor/Crew as a demonstrable second tier — show the profile, bid card, and isolated rating UI. Crew internal scoring can be mocked (static data) for the demo. |
| :---- |

| Priority | Feature | Tier |
| :---- | :---- | :---- |
| P0 | User auth & role selection (solo / mandor path) | Both |
| P0 | AI Job Posting \+ photo analysis \+ price estimate | Both |
| P0 | Two-Stage Escrow State Machine | Both |
| P0 | Bilingual Chat \+ WhatsApp Bridge (demo) | Both |
| P0 | Solo Tukang profile, bidding, rating | Solo |
| P1 | Mandor/Agency profile \+ crew member roster UI | Crew |
| P1 | Crew bid card (distinct design from solo bid card) | Crew |
| P1 | Separate rating display (solo ★ vs agency ★) | Both |
| P1 | Voice input \+ guided review flow | Both |
| P2 | Crew internal score (Mandor dashboard — can mock) | Crew |
| P2 | Agency wallet (separate balance display) | Crew |
| P2 | Job Completion Certificate PDF | Both |

## **15.2 Post-Launch (v1.1 – v2.0)**

* Full Smart Tukang Matching AI (dual-list: solo ranked \+ crew ranked)

* Dynamic badge system recalculated every 24 hours (both badge sets)

* Crew member invitation flow (WhatsApp link \+ in-app accept)

* Mandor internal team dashboard (crew member scores, assignment history)

* Map view for both solo and crew discovery

* Full Midtrans Payouts for both solo wallet and agency wallet

* In-app analytics for both Solo Tukang and Mandor (earnings, response rate)

* Agency leaderboards and verified agency directory page

# **16\. Screen List**

## **16.1 User Screens**

* Onboarding (role selection, location, property type)

* Home Feed (recommended Solo Tukang \+ featured Mandor/Crew)

* Search (toggle: Solo / Crew / Both; filter by trade, area, rating, availability)

* Solo Tukang Profile View (solo badges, solo rating ★, portfolio)

* Agency Profile View (agency badge, agency rating ★, crew thumbnails, crew portfolio)

* AI Job Post (voice input, crew welcome toggle, photo upload, AI refine, dual price estimate)

* Bids Inbox (two tabs: Solo Bids / Crew Bids — or unified with type label)

* Escrow Pay (inspection fee) \+ Escrow Top-up (final quote)

* Active Job Chat (User ↔ Solo Tukang or User ↔ Mandor)

* Guided Review Screen (reviews the entity hired — solo or agency as a unit)

* Job Completion Certificate download

## **16.2 Solo Tukang Screens  ●**

* Onboarding (KTP, categories max 3, rates, bank account)

* Job Feed (solo-eligible jobs, AI fit score, crew-welcome indicator)

* Submit Solo Bid (inspection fee vs direct quote)

* Active Job (GPS check-in, start/finish photos, chat with User)

* Solo Wallet (balance, payout history, withdraw)

* Availability Calendar (personal status)

* My Crew Memberships (list of crews I belong to — read-only, leave option)

## **16.3 Mandor Screens  ▲  ★ NEW**

* Agency Onboarding (crew brand name, KTP, NIB/SIUP, trade categories, invite crew)

* Agency Job Feed (crew-eligible jobs sorted by AI fit score)

* Submit Crew Bid (select assigned members for this job, quote amount)

* Active Job — Mandor View (GPS check-in, start/finish photos, chat with User)

* Agency Wallet (agency balance separate from personal wallet, payout history)

* Team Dashboard (crew member roster, internal scores per job, assign to bid)

* Crew Invitation Manager (invite by phone, accept/pending/remove)

## **16.4 Admin Screens**

* Dashboard (platform KPIs for both tiers: solo jobs vs crew jobs, escrow volume, disputes)

* Solo Tukang Verifications (KTP review, skill assessment, badge assignment)

* Agency Verifications (KTP \+ NIB/SIUP review, portfolio spot-check, Certified Agency approval)

* Disputes (AI summary view, resolution action — Mandor is sole named party for crew disputes)

* Transaction Monitor (separate ledgers: solo transactions vs agency transactions)

# **Appendix A — Changelog: v1.4 → v1.5**

| Section | Change | Type |
| :---- | :---- | :---- |
| 3 | User Roles expanded: Mandor and Crew Member added as distinct roles | NEW |
| 4.1 | Onboarding now branches into Solo vs Mandor paths (NIB/SIUP, crew invite) | UPDATED |
| 4.2 | Job posting: Crew Welcome toggle, AI tier recommendation | UPDATED |
| 4.3 | Bidding: separate Solo bid card and Crew bid card designs | UPDATED |
| 4.4 | Reviews: crew reviews go to agency rating only — solo profile never affected | UPDATED |
| 5 | NEW full section: Solo Tukang vs Mandor/Crew specification | NEW |
| 5.1 | Account type overview comparison table | NEW |
| 5.2 | Profile structure differences (solo vs agency) | NEW |
| 5.3 | Crew composition & member management rules | NEW |
| 5.4 | Bid card design differences | NEW |
| 5.5 | Rating system isolation — fully separate, never merged | NEW |
| 5.6 | Job-size eligibility routing via AI | NEW |
| 5.7 | Verification differences (KTP only vs KTP \+ NIB/SIUP) | NEW |
| 5.8 | Platform fee per tier (solo and agency independently) | NEW |
| 5.9 | Payout flow differences (personal wallet vs agency wallet) | NEW |
| 7.1 | AI Job Assistant now outputs recommended\_tier | UPDATED |
| 7.2 | Smart Matching runs dual-pass: one for solo, one for crew | UPDATED |
| 7.7 | AI Price Estimator generates dual estimates (solo vs crew) for eligible jobs | UPDATED |
| 9.2 | Agency Wallet added as separate entity (min Rp 500K withdrawal) | NEW |
| 11.2 | Agency badge set (6 badges, fully independent from solo badges) | NEW |
| 14 | DB schema: agencies, agency\_members, crew\_member\_internal\_scores tables added | NEW |
| 14 | jobs.hired\_type, bids.bid\_from\_type, reviews.review\_target\_type columns added | UPDATED |
| 15 | MVP priority table updated: P0/P1/P2 with tier labels | UPDATED |
| 16.3 | Mandor screen list added | NEW |

*— End of Document —*