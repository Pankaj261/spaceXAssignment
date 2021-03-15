export interface spaceX {
    crew: null,
    details: string,
    flight_number: number,
    is_tentative: boolean,
    launch_date_local: string,
    launch_date_unix: number,
    launch_date_utc: string,
    launch_failure_details: launch_failure_details,
    launch_site: launch_site,
    launch_success: boolean,
    launch_window: number,
    launch_year: string,
    links: links
    mission_id: [],
    mission_name: string,
    rocket: rocket,
    ships: [],
    static_fire_date_unix: number,
    static_fire_date_utc: string,
    tbd: boolean,
    telemetry: telemetry,
    tentative_max_precision: string,
    timeline: timeline,
    upcoming: boolean
}

interface telemetry {
    flight_club: null,
}

interface timeline {
    webcast_liftoff: number
}

interface launch_failure_details {
    altitude: null,
    reason: string,
    time: number
}

interface launch_site {
    site_id: string
    site_name: string
    site_name_long: string
}

interface links {
    article_link: string,
    flickr_images: [],
    mission_patch: string,
    mission_patch_small: string,
    presskit: null,
    reddit_campaign: null,
    reddit_launch: null,
    reddit_media: null,
    reddit_recovery: null,
    video_link: string,
    wikipedia: string,
    youtube_id: string
}

interface rocket {
    fairings: fairings,
    first_stage: first_stage,
    rocket_id: string,
    rocket_name: string,
    rocket_type: string,
    second_stage: second_stage
}

interface fairings {
    recovered: false,
    recovery_attempt: false,
    reused: false,
    ship: null,
}

interface first_stage {
    cores: cores[]
}

interface cores {
    block: null
    core_serial: string,
    flight: number,
    gridfins: false,
    land_success: null,
    landing_intent: false,
    landing_type: null,
    landing_vehicle: null,
    legs: false,
    reused: false,
}

interface second_stage {
    block: number,
    payloads: payloads[]
}

interface payloads {
    customers: [string],
    manufacturer: string,
    nationality: string,
    norad_id: [],
    orbit: string,
    orbit_params: orbit,
    payload_id: string,
    payload_mass_kg: number,
    payload_mass_lbs: number,
    payload_type: string,
    reused: false,
}

interface orbit {
    apoapsis_km: number,
    arg_of_pericenter: null,
    eccentricity: null,
    epoch: null,
    inclination_deg: number,
    lifespan_years: null,
    longitude: null,
    mean_anomaly: null,
    mean_motion: null,
    periapsis_km: number,
    period_min: null,
    raan: null,
    reference_system: string,
    regime: string,
    semi_major_axis_km: null
}