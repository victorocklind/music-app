(business domains)

Each feature gets its own mini-architecture.

Inside discovery:

    discovery-page.component.ts (container)

    track-list.component.ts (presentational)

    discovery.service.ts (API calls)

    discovery.store.ts (state)

    models.ts

Each feature:

    Owns its routes

    Owns its services

    Owns its models

    Owns its state

    No cross-feature coupling.