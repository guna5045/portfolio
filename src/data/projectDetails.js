export const PROJECTS_DATA = [
  {
    id: "civicresolve",
    title: "Civic Resolve",
    subtitle: "Crowdsourced Civic Issue Reporting & Resolution Platform",
    tagline: "Empowering citizens and municipal authorities with transparent, location-aware incident tracking and automated department routing.",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Maps Integration", "REST APIs"],
    images: {
      primary: "/assets/images/civicresolve-1.png",
      secondary: "/assets/images/civicresolve-2.png"
    },
    githubUrl: "https://github.com/guna5045/civic-resolve",
    liveDemoUrl: "https://civic-resolve-org.vercel.app/",

    // 1. Problem Statement
    problemStatement: {
      summary: "Citizens struggle with fragmented, opaque civic reporting systems, leading to delayed municipal resolutions and unaddressed public hazards.",
      points: [
        "Citizens struggle to report civic issues due to scattered phone helplines and legacy paper workflows.",
        "Municipal authorities receive fragmented, unverified information from multiple channels without location context.",
        "Lack of transparency and status visibility creates public dissatisfaction and mistrust in municipal operations.",
        "Absence of centralized issue tracking leads to lost reports, duplicate work orders, and unaccountable SLAs.",
        "City leaders have limited visibility into civic problem trends, preventing proactive infrastructure maintenance."
      ]
    },

    // 2. Solution Overview
    solutionOverview: {
      summary: "Civic Resolve is a unified enterprise civic management SaaS platform bridging the communication gap between citizens and city administration.",
      details: "By combining geospatial mapping, automated duplicate detection, and role-based department routing, Civic Resolve transforms unstructured public complaints into prioritized, actionable engineering tickets. Municipal teams gain real-time SLA tracking, automated severity scoring, and data-driven infrastructure analytics."
    },

    // 3. Key Features
    keyFeatures: [
      { name: "Issue Reporting", desc: "Intuitive citizen reporting interface with instant geospatial pin placement." },
      { name: "Image Upload", desc: "Secure multi-file image evidence upload with compression and preview." },
      { name: "Location Tracking", desc: "GPS auto-detection and interactive maps integration for exact latitude/longitude tagging." },
      { name: "Issue Categorization", desc: "Structured categorization across Roadways, Sanitation, Water Supply, and Electricity." },
      { name: "Admin Dashboard", desc: "Centralized command center for municipal department heads and field supervisors." },
      { name: "Status Tracking", desc: "Live resolution milestone pipeline (Submitted -> In Review -> Assigned -> Resolved)." },
      { name: "Analytics Dashboard", desc: "City-wide incident heatmap, SLA resolution efficiency, and department response charts." },
      { name: "Priority Management", desc: "Algorithmic upvoting and severity weighting to elevate high-danger infrastructure issues." },
      { name: "Department Assignment", desc: "Automated work-order routing based on category rules and geographical zones." },
      { name: "Duplicate Detection", desc: "Geospatial proximity matching (within 50m radius) to merge duplicate incident reports." },
      { name: "Severity Scoring", desc: "Weighted formula combining upvotes, public impact, and hazard proximity." }
    ],

    // 4. System Architecture Flow
    architectureFlow: [
      { step: 1, name: "Citizen Portal", desc: "React.js PWA client captures issue geotag, photo, and details." },
      { step: 2, name: "API Layer", desc: "Express.js REST APIs validate payload, authenticate user JWT, and sanitize inputs." },
      { step: 3, name: "Business Logic Layer", desc: "Duplicate detection engine checks spatial proximity and calculates severity score." },
      { step: 4, name: "Database", desc: "PostgreSQL persists relational data with Spatial B-Tree indexes for fast spatial queries." },
      { step: 5, name: "Admin Dashboard", desc: "WebSocket push updates municipal work queues with prioritized tickets." },
      { step: 6, name: "Resolution Workflow", desc: "Field engineers update status; automated notifications dispatched to citizens." }
    ],

    // 5. Database Design (ER Schema)
    databaseSchema: {
      tables: [
        {
          name: "Users",
          columns: [
            { name: "id", type: "UUID (PK)", desc: "Unique user identifier" },
            { name: "email", type: "VARCHAR(255)", desc: "Unique login credential" },
            { name: "role", type: "ENUM", desc: "'CITIZEN' | 'ADMIN' | 'DEPT_LEAD'" }
          ]
        },
        {
          name: "Issues",
          columns: [
            { name: "id", type: "UUID (PK)", desc: "Incident record primary key" },
            { name: "title", type: "VARCHAR(150)", desc: "Brief description of problem" },
            { name: "category_id", type: "INT (FK)", desc: "References Categories(id)" },
            { name: "latitude", type: "DECIMAL(9,6)", desc: "Geospatial coordinate" },
            { name: "longitude", type: "DECIMAL(9,6)", desc: "Geospatial coordinate" },
            { name: "severity_score", type: "INT", desc: "Computed priority index (1-100)" },
            { name: "status", type: "ENUM", desc: "'OPEN' | 'IN_PROGRESS' | 'RESOLVED'" },
            { name: "assigned_dept_id", type: "INT (FK)", desc: "References Departments(id)" }
          ]
        },
        {
          name: "Departments",
          columns: [
            { name: "id", type: "INT (PK)", desc: "Department ID" },
            { name: "name", type: "VARCHAR(100)", desc: "Public Works, Sanitation, Electrical, etc." },
            { name: "sla_hours", type: "INT", desc: "Target resolution window in hours" }
          ]
        },
        {
          name: "IssueStatusHistory",
          columns: [
            { name: "id", type: "BIGINT (PK)", desc: "Audit log ID" },
            { name: "issue_id", type: "UUID (FK)", desc: "Target issue" },
            { name: "old_status", type: "VARCHAR(30)", desc: "Previous status" },
            { name: "new_status", type: "VARCHAR(30)", desc: "Updated status" },
            { name: "updated_by", type: "UUID (FK)", desc: "User or system trigger" }
          ]
        },
        {
          name: "Comments & Notifications",
          columns: [
            { name: "id", type: "BIGINT (PK)", desc: "Comment or notification payload ID" },
            { name: "issue_id", type: "UUID (FK)", desc: "Associated issue record" },
            { name: "message", type: "TEXT", desc: "Update text or system alert" }
          ]
        }
      ]
    },

    // 6. API Architecture
    apiArchitecture: [
      { method: "POST", path: "/api/v1/issues", desc: "Create new civic incident report with multipart image payload & GPS validation", auth: "JWT Required" },
      { method: "GET", path: "/api/v1/issues", desc: "Fetch paginated issue stream with spatial bounding box filter & category search", auth: "Public / JWT" },
      { method: "PUT", path: "/api/v1/issues/:id/status", desc: "Update issue resolution state and re-assign department lead", auth: "Admin / Dept Lead" },
      { method: "GET", path: "/api/v1/analytics", desc: "Retrieve aggregated resolution metrics, SLA breach rates, and heatmap dataset", auth: "Admin Only" },
      { method: "GET", path: "/api/v1/dashboard", desc: "Fetch real-time executive dashboard KPIs and active workload counts", auth: "Admin / Dept Lead" }
    ],

    // 7. Engineering Challenges & Solutions
    engineeringChallenges: [
      {
        challenge: "Duplicate Issue Reports",
        problem: "Multiple citizens reporting the same pothole or water leak flooded the database with duplicate records.",
        solution: "Implemented a geospatial proximity check using Haversine algorithm and PostGIS bounding box queries to merge reports within a 50-meter radius into a unified upvote thread."
      },
      {
        challenge: "Location-Based Issue Clustering",
        problem: "Rendering thousands of individual map pins degraded client-side React DOM performance.",
        solution: "Integrated spatial grid clustering algorithms that aggregate proximate markers into dynamic cluster nodes at higher map zoom levels."
      },
      {
        challenge: "Real-Time Issue Updates",
        problem: "Citizens had no insight into status updates unless manually refreshing the page.",
        solution: "Built a lightweight Server-Sent Events (SSE) stream pushing status state changes to client applications as soon as field teams update ticket milestones."
      },
      {
        challenge: "Large-Scale Issue Management & Department Assignment",
        problem: "Manually categorizing and assigning hundreds of daily reports created administrative bottlenecks.",
        solution: "Engineered automated rule-based routing based on category IDs, zip codes, and department SLA workload balances."
      }
    ],

    // 8. Design Thinking Process
    designThinking: [
      { stage: "Empathize", desc: "Interacted with local residents and municipal staff to understand frustrations regarding lost complaints and lack of tracking." },
      { stage: "Define", desc: "Framed core problem: Municipalities need structured data; citizens need transparency and instant feedback loops." },
      { stage: "Ideate", desc: "Brainstormed geotagged reporting, community upvoting for priority ranking, and role-separated dashboards." },
      { stage: "Prototype", desc: "Developed interactive React UI wireframes and designed PostgreSQL relational ER schemas." },
      { stage: "Test", desc: "Tested system latency with synthetic load tests, verifying query response times under 50ms for spatial lookups." }
    ],

    // 9. Future Improvements
    futureImprovements: [
      "AI-Based Issue Categorization: Train computer vision models to automatically detect pothole depth and garbage volume from citizen uploads.",
      "Automated Image Verification: Filter non-civic or spam images before database persistence.",
      "Predictive Infrastructure Maintenance: Analyze spatial historical trends to alert authorities before seasonal drainage failures occur.",
      "Smart City IoT Sensor Integration: Connect municipal telemetry sensors directly into Civic Resolve for automated issue generation.",
      "Native iOS & Android Mobile Apps: Build cross-platform React Native applications for offline-first field engineer reporting."
    ]
  },

  {
    id: "apexpulse",
    title: "Apex Pulse",
    subtitle: "Real-Time API Observability & Telemetry Monitoring Platform",
    tagline: "High-throughput telemetry ingestion engine and real-time operational dashboard for distributed microservices.",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Redis", "Docker", "AWS", "WebSockets", "REST APIs"],
    images: {
      primary: "/assets/images/apexpulse-1.png",
      secondary: "/assets/images/apexpulse-2.png"
    },
    githubUrl: "https://github.com/guna5045/Apex-Pulse",
    liveDemoUrl: null, // Disabled Coming Soon button

    // 1. Problem Statement
    problemStatement: {
      summary: "Distributed microservices struggle with undetected API latency spikes, silent 5xx errors, and uncoordinated incident response.",
      points: [
        "Engineering teams lack centralized, sub-second visibility into API request latency curves (P50, P90, P99).",
        "Unmonitored error rate spikes lead to customer churn before engineering on-call engineers are notified.",
        "Unplanned traffic surges exhaust database connections without automated rate limiting or alert triggers.",
        "Performance degradation across backend microservices is difficult to isolate without unified telemetry metrics.",
        "Legacy logging platforms are prohibitively expensive and introduce high ingestion latency."
      ]
    },

    // 2. Solution Overview
    solutionOverview: {
      summary: "Apex Pulse is a high-performance telemetry processing engine designed to ingest thousands of metric payloads per second with sub-millisecond overhead.",
      details: "By coupling Redis stream buffering with asynchronous worker processes, Apex Pulse decouples metric ingestion from persistent PostgreSQL storage. Engineering teams view real-time latency graphs, active service health indices, and error distributions through a responsive React dashboard."
    },

    // 3. Core Features
    keyFeatures: [
      { name: "Real-Time Monitoring", desc: "Live metric ingestion pipeline streaming operational telemetry without page reloads." },
      { name: "Latency Tracking", desc: "Sub-second percentiles calculation (P50, P90, P99 latency curves)." },
      { name: "Error Tracking", desc: "Categorized tracking of HTTP 4xx/5xx status code frequencies." },
      { name: "Service Health Monitoring", desc: "Synthetic pulse probes measuring upstream service availability index." },
      { name: "API Analytics", desc: "Route-by-route performance breakdown and throughput monitoring." },
      { name: "Dashboard Visualization", desc: "Interactive canvas graphs built for high-density engineering metrics." },
      { name: "Redis Caching", desc: "In-memory caching layer accelerating dashboard query responses to sub-5ms." },
      { name: "Alerting System", desc: "Configurable metric thresholds triggering immediate Webhook alerts." },
      { name: "Rate Limiting", desc: "Redis Token Bucket rate limiter preventing API abuse and service exhaustion." },
      { name: "Telemetry Processing", desc: "Asynchronous stream worker queues buffering high-volume metric payloads." }
    ],

    // 4. Monitoring Architecture Diagram
    architectureFlow: [
      { step: 1, name: "Applications & Services", desc: "Microservices emit lightweight HTTP/gRPC telemetry metric payloads." },
      { step: 2, name: "Telemetry Collector API", desc: "Express.js ingress endpoint validates and acknowledges metrics instantly (< 3ms)." },
      { step: 3, name: "Redis Stream Queue", desc: "Redis acts as a high-speed memory buffer absorbing high throughput bursts." },
      { step: 4, name: "Processing Workers", desc: "Node.js background workers aggregate percentile metrics and evaluate alert rules." },
      { step: 5, name: "PostgreSQL Storage", desc: "Aggregated time-series metrics persisted into partitioned relational tables." },
      { step: 6, name: "Analytics Dashboard", desc: "React dashboard renders live latency graphs via WebSocket streams." },
      { step: 7, name: "Engineering Team", desc: "On-call engineers receive immediate alerts upon threshold breach." }
    ],

    // 5. Database Design (ER Schema)
    databaseSchema: {
      tables: [
        {
          name: "Metrics",
          columns: [
            { name: "id", type: "BIGINT (PK)", desc: "Auto-increment metric record ID" },
            { name: "service_id", type: "UUID (FK)", desc: "References Services(id)" },
            { name: "endpoint", type: "VARCHAR(255)", desc: "Target API path" },
            { name: "latency_ms", type: "INT", desc: "Measured execution latency in ms" },
            { name: "status_code", type: "INT", desc: "HTTP Response status code (e.g. 200, 500)" },
            { name: "timestamp", type: "TIMESTAMPTZ", desc: "Ingestion time index" }
          ]
        },
        {
          name: "Services",
          columns: [
            { name: "id", type: "UUID (PK)", desc: "Unique service identifier" },
            { name: "name", type: "VARCHAR(100)", desc: "Service name (e.g. Auth-Service)" },
            { name: "environment", type: "VARCHAR(50)", desc: "'Production' | 'Staging'" }
          ]
        },
        {
          name: "Alerts & Incidents",
          columns: [
            { name: "id", type: "UUID (PK)", desc: "Alert record identifier" },
            { name: "service_id", type: "UUID (FK)", desc: "Target service" },
            { name: "metric_type", type: "VARCHAR(50)", desc: "'LATENCY_SPIKE' | 'ERROR_RATE'" },
            { name: "threshold", type: "FLOAT", desc: "Configured trigger barrier" },
            { name: "triggered_at", type: "TIMESTAMPTZ", desc: "Incident trigger timestamp" }
          ]
        },
        {
          name: "Users & Logs",
          columns: [
            { name: "id", type: "UUID (PK)", desc: "User or log record identifier" },
            { name: "action", type: "TEXT", desc: "Audit log message or system operation" }
          ]
        }
      ]
    },

    // 6. Redis Integration
    redisArchitecture: [
      { role: "Caching Layer", desc: "Stores active 5-minute metric aggregates to serve dashboard requests without hitting PostgreSQL." },
      { role: "Queue Processing", desc: "Uses Redis Streams to queue raw telemetry events, decoupling ingestion from DB writes." },
      { role: "Rate Limiting", desc: "Implements Token Bucket algorithm in Redis to enforce API quota limits per service key." },
      { role: "Session Storage", desc: "Manages authenticated WebSocket connections and real-time subscriber state." },
      { role: "Background Jobs", desc: "Coordinates background worker batch insertion timers." }
    ],

    // 7. Docker Container Architecture
    dockerArchitecture: [
      { container: "apexpulse-frontend", image: "Node Alpine / Nginx", desc: "Serves compiled React.js production build with static caching." },
      { container: "apexpulse-api", image: "Node 20-alpine", desc: "Express.js REST & Telemetry Ingestion API service." },
      { container: "apexpulse-worker", image: "Node 20-alpine", desc: "Background worker consuming Redis Streams & persisting DB batches." },
      { container: "apexpulse-redis", image: "redis:7-alpine", desc: "In-memory cache and stream message broker." },
      { container: "apexpulse-db", image: "postgres:16-alpine", desc: "Relational database with partitioned metrics tables." }
    ],

    // 8. AWS Cloud Deployment Architecture
    awsArchitecture: [
      { component: "AWS CloudFront", desc: "Global CDN serving React SPA assets with low latency." },
      { component: "AWS EC2 / ECS", desc: "Dockerized container tasks running Node.js Ingress API & Background Workers." },
      { component: "AWS ElastiCache (Redis)", desc: "Managed Redis cluster ensuring 99.99% memory availability for queues." },
      { component: "AWS RDS PostgreSQL", desc: "Multi-AZ relational database instance with automated daily snapshots." },
      { component: "AWS CloudWatch & VPC", desc: "Isolated network security groups and infrastructure health probes." }
    ],

    // 9. Engineering Challenges & Solutions
    engineeringChallenges: [
      {
        challenge: "High-Volume Metric Ingestion",
        problem: "Direct synchronous database writes during traffic spikes created DB connection pool starvation.",
        solution: "Architected an asynchronous pipeline using Redis Streams as an in-memory queue, enabling batch insertion of 1,000 metrics per SQL transaction."
      },
      {
        challenge: "Real-Time Dashboard Updates",
        problem: "Polling API endpoints every second caused unnecessary server overhead and latency.",
        solution: "Established WebSocket channels broadcasting aggregated metric frames directly to connected React clients only when metrics mutate."
      },
      {
        challenge: "Database Storage Optimization",
        problem: "Raw telemetry table grew by gigabytes daily, slowing down analytical query performance.",
        solution: "Implemented PostgreSQL table partitioning by timestamp ranges (daily tables) and automated retention policies that purge raw metrics older than 30 days while retaining hourly rollups."
      },
      {
        challenge: "Monitoring System Reliability",
        problem: "The observability system itself needed to remain operational during downstream service outages.",
        solution: "Wrapped ingestion handlers in circuit breakers and fallback memory buffers to ensure telemetry ingestion never blocks primary application traffic."
      }
    ],

    // 10. Future Improvements
    futureImprovements: [
      "Machine Learning Anomaly Detection: Train isolation forest models on metric history to detect subtle performance anomalies before thresholds breach.",
      "Distributed Tracing: Integrate OpenTelemetry instrumentation for cross-microservice trace visualization.",
      "Kubernetes Helm Chart Deployment: Package containers for auto-scaling Kubernetes cluster deployments.",
      "Multi-Region AWS Cloud Infrastructure: Deploy multi-region active-active telemetry collectors for ultra-low latency global ingestion.",
      "Advanced Alert Escalation: Integration with PagerDuty, Slack, and SMS notification webhooks."
    ]
  }
];
