export interface ServiceArea {
  slug: string;
  name: string;
  region: "NYC" | "Westchester" | "Nassau County";
  title: string;
  description: string;
  keywords: string[];
  heroImage: string;
  intro: string[];
  buildingTypes: string[];
  commonChallenges: { title: string; description: string }[];
  popularServices: { label: string; href: string }[];
  neighborhoods: string[];
}

export const serviceAreas: ServiceArea[] = [
  /* ═══════════════ NYC BOROUGHS ═══════════════ */

  {
    slug: "manhattan",
    name: "Manhattan",
    region: "NYC",
    title: "HVAC Services in Manhattan",
    description:
      "Professional HVAC service for Manhattan homes and buildings. Mini-splits, boiler repair, commercial HVAC, and heat pumps for co-ops and high-rises.",
    keywords: [
      "HVAC Manhattan",
      "Manhattan AC installation",
      "boiler repair Manhattan",
      "mini-split installation Manhattan",
      "commercial HVAC Manhattan",
      "Manhattan heating repair",
    ],
    heroImage:
      "/area-manhattan.webp",
    intro: [
      "Manhattan's building stock spans over a century — from prewar walk-ups on the Upper West Side to glass-curtain towers in Midtown. Each building type brings its own HVAC challenges, and the density of the borough means space for equipment is always at a premium.",
      "We work with co-op and condo boards, property managers, and individual homeowners across Manhattan. Whether it's a steam boiler in a prewar brownstone that needs annual maintenance, a ductless mini-split for a studio apartment replacing window units, or a commercial rooftop unit serving a restaurant, we handle it.",
    ],
    buildingTypes: [
      "Prewar co-ops and condos (steam and hot water heat)",
      "High-rise residential towers",
      "Brownstones and townhouses",
      "Commercial office buildings",
      "Restaurants and retail spaces",
    ],
    commonChallenges: [
      {
        title: "Steam Boiler Maintenance",
        description:
          "Many prewar buildings rely on steam heat. Failed steam traps, clogged air vents, and water hammer are some of the most common service calls we get in Manhattan.",
      },
      {
        title: "No Ductwork for Cooling",
        description:
          "Most prewar buildings were never designed for central air. Ductless mini-splits are the go-to solution — no ductwork needed, just a small line through the wall.",
      },
      {
        title: "Co-op Board Approvals",
        description:
          "Installing HVAC in Manhattan co-ops often requires board approval for exterior equipment. We handle the documentation and work within building guidelines.",
      },
      {
        title: "Commercial Kitchen Ventilation",
        description:
          "Manhattan's restaurant density means constant demand for hood installation, exhaust systems, and DOH-compliant ventilation upgrades.",
      },
    ],
    popularServices: [
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
      { label: "Commercial HVAC", href: "/services/commercial-hvac" },
      { label: "Restaurant Hoods", href: "/services/restaurant-hoods" },
      { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
    ],
    neighborhoods: [
      "Upper East Side", "Upper West Side", "Midtown", "Chelsea",
      "Greenwich Village", "East Village", "SoHo", "Tribeca",
      "Lower East Side", "Financial District", "Harlem",
      "Washington Heights", "Inwood", "Murray Hill", "Hell's Kitchen",
    ],
  },

  {
    slug: "brooklyn",
    name: "Brooklyn",
    region: "NYC",
    title: "HVAC Services in Brooklyn",
    description:
      "Brooklyn HVAC contractor for brownstones, apartments, and commercial spaces. Boiler repair, mini-splits, heat pumps, and restaurant hood installation.",
    keywords: [
      "HVAC Brooklyn",
      "Brooklyn boiler repair",
      "mini-split installation Brooklyn",
      "Brooklyn AC repair",
      "brownstone HVAC Brooklyn",
      "Brooklyn heating service",
    ],
    heroImage:
      "/area-brooklyn.webp",
    intro: [
      "Brooklyn's neighborhoods are as diverse as its building stock. From the landmark brownstones of Park Slope and Bed-Stuy to new construction towers in Downtown Brooklyn and Williamsburg, every block has different HVAC needs.",
      "We serve residential and commercial clients across all of Brooklyn. Brownstone owners call us for boiler service and ductless cooling. New condo developers bring us in for full mechanical design. Restaurant owners in neighborhoods like Bushwick and Williamsburg rely on us for kitchen ventilation.",
    ],
    buildingTypes: [
      "Brownstones and row houses",
      "Prewar apartment buildings",
      "New construction condos",
      "Mixed-use commercial/residential",
      "Restaurants and food halls",
    ],
    commonChallenges: [
      {
        title: "Brownstone Heating Systems",
        description:
          "Brooklyn brownstones typically have old boilers — many original cast iron units from the early 1900s. These need regular maintenance, and when it's time to replace, a high-efficiency condensing boiler can cut fuel bills significantly.",
      },
      {
        title: "Adding AC Without Ductwork",
        description:
          "Most brownstones and older apartments have no ductwork. Mini-splits are the standard solution — wall-mounted heads in each room, connected to one outdoor condenser.",
      },
      {
        title: "Radiator Balancing",
        description:
          "Uneven heat is the #1 complaint in older Brooklyn buildings. Some rooms are 85 degrees while others barely get warm. Proper balancing of steam traps, air vents, and zone valves fixes this.",
      },
      {
        title: "New Construction Mechanical",
        description:
          "Brooklyn's development boom means new buildings need full HVAC design from scratch — load calculations, equipment selection, ductwork layout, and code-compliant installation.",
      },
    ],
    popularServices: [
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Restaurant Hoods", href: "/services/restaurant-hoods" },
      { label: "Load Calculations", href: "/services/load-calculations" },
      { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
    ],
    neighborhoods: [
      "Park Slope", "Williamsburg", "DUMBO", "Brooklyn Heights",
      "Bed-Stuy", "Bushwick", "Crown Heights", "Bay Ridge",
      "Flatbush", "Prospect Heights", "Cobble Hill", "Carroll Gardens",
      "Greenpoint", "Sunset Park", "Downtown Brooklyn", "Bensonhurst",
    ],
  },

  {
    slug: "queens",
    name: "Queens",
    region: "NYC",
    title: "HVAC Services in Queens",
    description:
      "Queens HVAC services for homes, apartments, and businesses. Central air, mini-splits, furnace repair, and commercial refrigeration across all neighborhoods.",
    keywords: [
      "HVAC Queens",
      "Queens AC installation",
      "furnace repair Queens",
      "central air Queens NY",
      "Queens HVAC contractor",
      "heating repair Queens",
    ],
    heroImage:
      "/area-queens.webp",
    intro: [
      "Queens is the most architecturally diverse borough — detached single-family homes in Bayside, row houses in Jackson Heights, high-rises in Long Island City, and commercial corridors throughout. This variety means we see every type of HVAC system here.",
      "Homeowners in Queens often have central air conditioning and gas furnaces, unlike Manhattan and Brooklyn where boilers and mini-splits dominate. We handle everything from seasonal tune-ups and furnace repairs to full system replacements and commercial refrigeration for the borough's thousands of restaurants and food businesses.",
    ],
    buildingTypes: [
      "Single-family detached homes",
      "Semi-attached and row houses",
      "Garden-style apartment buildings",
      "High-rise condos (LIC, Flushing)",
      "Restaurants and commercial kitchens",
    ],
    commonChallenges: [
      {
        title: "Aging Central Air Systems",
        description:
          "Many Queens homes installed central air in the 1990s–2000s. These systems are now 20–30 years old and approaching end of life. Replacing with a modern heat pump system can provide both heating and cooling with better efficiency.",
      },
      {
        title: "Furnace Repairs and Replacement",
        description:
          "Gas furnaces are common in Queens single-family homes. Igniter failures, cracked heat exchangers, and blower motor issues are our most frequent furnace calls here.",
      },
      {
        title: "Restaurant and Food Business HVAC",
        description:
          "Queens has one of the highest concentrations of restaurants in NYC. Commercial kitchen ventilation, walk-in cooler maintenance, and exhaust systems are in constant demand.",
      },
      {
        title: "Ductwork Problems",
        description:
          "Homes with existing ductwork often have leaks, poor insulation, or undersized runs that cause uneven temperatures. Duct sealing and airflow testing can dramatically improve comfort.",
      },
    ],
    popularServices: [
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Commercial Refrigeration", href: "/services/commercial-refrigeration" },
      { label: "Restaurant Hoods", href: "/services/restaurant-hoods" },
      { label: "Load Calculations", href: "/services/load-calculations" },
    ],
    neighborhoods: [
      "Astoria", "Long Island City", "Jackson Heights", "Flushing",
      "Forest Hills", "Rego Park", "Bayside", "Jamaica",
      "Elmhurst", "Woodside", "Sunnyside", "Fresh Meadows",
      "Howard Beach", "Ozone Park", "Ridgewood", "Maspeth",
    ],
  },

  {
    slug: "bronx",
    name: "The Bronx",
    region: "NYC",
    title: "HVAC Services in the Bronx",
    description:
      "Bronx HVAC contractor for residential and commercial systems. Boiler repair, heating service, cooling installation, and HEAP program assistance.",
    keywords: [
      "HVAC Bronx",
      "Bronx boiler repair",
      "heating service Bronx",
      "AC installation Bronx",
      "Bronx HVAC contractor",
      "HEAP cooling program Bronx",
    ],
    heroImage:
      "/area-bronx.webp",
    intro: [
      "The Bronx has a large stock of multi-family residential buildings, many built between the 1920s and 1960s, that rely on central boiler systems for heat and hot water. Keeping these systems running efficiently is critical — both for tenant comfort and for controlling energy costs.",
      "We work with building owners, property managers, and individual homeowners across the Bronx. From boiler maintenance in large apartment complexes to mini-split installations in single-family homes in Riverdale, and HEAP/EPCP cooling assistance for eligible residents, we cover the full range of HVAC needs here.",
    ],
    buildingTypes: [
      "Multi-family apartment buildings",
      "Public housing complexes",
      "Single-family homes (Riverdale, Country Club)",
      "Commercial and retail spaces",
      "Schools and institutional buildings",
    ],
    commonChallenges: [
      {
        title: "Large Building Boiler Systems",
        description:
          "Multi-family buildings in the Bronx depend on commercial boilers that heat dozens or hundreds of units. Combustion analysis, burner tuning, and preventive maintenance are essential to keep fuel costs down and heat reliable.",
      },
      {
        title: "HEAP and Cooling Assistance Programs",
        description:
          "Many Bronx residents qualify for HEAP Cooling Assistance and the Essential Plan Cooling Program, which provide free AC installation. We're an approved vendor for both programs.",
      },
      {
        title: "Aging Heating Infrastructure",
        description:
          "Older buildings often have original piping, radiators, and controls that reduce efficiency. Upgrading controls, replacing failed zone valves, and insulating pipes can improve performance without replacing the entire system.",
      },
      {
        title: "Summer Cooling Needs",
        description:
          "Many Bronx apartments still rely on window units. Ductless mini-splits offer a permanent, quieter, and more efficient alternative with both heating and cooling built in.",
      },
    ],
    popularServices: [
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
      { label: "Cooling Assistance (HEAP/EPCP)", href: "/services/cooling-assistance" },
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Commercial HVAC", href: "/services/commercial-hvac" },
    ],
    neighborhoods: [
      "South Bronx", "Mott Haven", "Hunts Point", "Fordham",
      "Tremont", "University Heights", "Kingsbridge", "Riverdale",
      "Pelham Bay", "Throgs Neck", "Country Club", "Parkchester",
      "Morris Park", "Norwood", "Concourse", "Soundview",
    ],
  },

  {
    slug: "staten-island",
    name: "Staten Island",
    region: "NYC",
    title: "HVAC Services in Staten Island",
    description:
      "Staten Island HVAC services for homes and businesses. Central air, furnace and boiler repair, heat pumps, and seasonal maintenance.",
    keywords: [
      "HVAC Staten Island",
      "Staten Island AC repair",
      "furnace repair Staten Island",
      "central air Staten Island",
      "Staten Island HVAC contractor",
      "heating repair Staten Island",
    ],
    heroImage:
      "/area-staten-island.webp",
    intro: [
      "Staten Island is the most suburban of the five boroughs, with a housing stock dominated by single-family homes, many with full basements, yards, and existing ductwork. This means HVAC systems here look more like those in New Jersey or Long Island than in Manhattan.",
      "Most Staten Island homes have central air conditioning and a gas furnace or boiler. We handle seasonal tune-ups, equipment replacements, and emergency repairs. For homeowners looking to upgrade, heat pump systems and high-efficiency equipment qualify for NYSERDA rebates that can offset a significant portion of the cost.",
    ],
    buildingTypes: [
      "Single-family homes with basements",
      "Semi-attached and attached homes",
      "Small multi-family (2–4 units)",
      "New construction developments",
      "Commercial and retail spaces",
    ],
    commonChallenges: [
      {
        title: "Central Air Replacement",
        description:
          "Many Staten Island homes installed their first central air systems decades ago. When it's time to replace, we properly size the new system with a load calculation — the original equipment was often oversized.",
      },
      {
        title: "Furnace and Boiler Age",
        description:
          "Furnaces over 20 years old and boilers over 25 lose efficiency and become unreliable. Upgrading to high-efficiency equipment can reduce heating costs by 20–30%.",
      },
      {
        title: "Basement Humidity and Water Heaters",
        description:
          "Staten Island basements are ideal for heat pump water heaters, which pull heat from the surrounding air and dehumidify as a bonus — solving two problems at once.",
      },
      {
        title: "NYSERDA Rebates",
        description:
          "Staten Island homeowners are well-positioned for NYSERDA heat pump rebates since most are transitioning from fossil fuel systems — exactly the scenario that qualifies for the highest incentives.",
      },
    ],
    popularServices: [
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
      { label: "Load Calculations", href: "/services/load-calculations" },
    ],
    neighborhoods: [
      "St. George", "Stapleton", "Tompkinsville", "New Dorp",
      "Tottenville", "Great Kills", "Eltingville", "Annadale",
      "Huguenot", "Travis", "Bulls Head", "Westerleigh",
      "Todt Hill", "Dongan Hills", "Midland Beach", "Prince's Bay",
    ],
  },

  /* ═══════════════ WESTCHESTER ═══════════════ */

  {
    slug: "yonkers",
    name: "Yonkers",
    region: "Westchester",
    title: "HVAC Services in Yonkers",
    description:
      "Yonkers HVAC contractor for homes and businesses. Heating, cooling, boiler repair, and system upgrades with NYSERDA rebate assistance.",
    keywords: [
      "HVAC Yonkers",
      "Yonkers heating repair",
      "AC installation Yonkers",
      "boiler repair Yonkers",
      "Yonkers HVAC contractor",
      "furnace repair Yonkers NY",
    ],
    heroImage:
      "/area-lower-westchester.webp",
    intro: [
      "Yonkers is the largest city in Westchester County and sits right at the border of the Bronx, giving it a mix of urban apartment buildings and suburban single-family homes. The housing stock ranges from prewar multi-family buildings along Broadway to newer homes in the eastern hills.",
      "We serve Yonkers homeowners and building managers with the full range of HVAC services — from boiler maintenance in older multi-family buildings to central air replacements in single-family homes. As a NYSERDA-qualified contractor, we help Yonkers residents take advantage of heat pump rebates and energy efficiency incentives.",
    ],
    buildingTypes: [
      "Single-family homes",
      "Multi-family apartment buildings",
      "Attached townhouses",
      "Mixed-use commercial/residential",
      "Small commercial spaces",
    ],
    commonChallenges: [
      {
        title: "Mixed Building Stock",
        description:
          "Yonkers has everything from 1920s apartment buildings with steam heat to 1990s subdivisions with central air. Each requires different expertise — we handle both.",
      },
      {
        title: "Oil-to-Gas Conversions",
        description:
          "Many older Yonkers homes still burn heating oil. Converting to natural gas or a heat pump system eliminates oil deliveries and reduces heating costs substantially.",
      },
      {
        title: "Aging Suburban Systems",
        description:
          "Single-family homes in eastern Yonkers often have furnaces and AC units from the 2000s that are reaching end of life. Proper sizing and modern equipment can improve comfort and cut energy use.",
      },
    ],
    popularServices: [
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
      { label: "Load Calculations", href: "/services/load-calculations" },
    ],
    neighborhoods: [
      "Downtown Yonkers", "Getty Square", "Crestwood", "Bronxville border",
      "Ludlow", "Park Hill", "Nepperhan", "Nodine Hill",
      "Colonial Heights", "Dunwoodie", "Lincoln Park", "Homefield",
    ],
  },

  {
    slug: "new-rochelle",
    name: "New Rochelle",
    region: "Westchester",
    title: "HVAC Services in New Rochelle",
    description:
      "New Rochelle HVAC services for residential and commercial properties. Heating, cooling, boiler repair, and energy-efficient system upgrades.",
    keywords: [
      "HVAC New Rochelle",
      "New Rochelle heating repair",
      "AC installation New Rochelle",
      "boiler repair New Rochelle",
      "New Rochelle HVAC contractor",
      "furnace service New Rochelle",
    ],
    heroImage:
      "/area-nassau-county.webp",
    intro: [
      "New Rochelle is a growing Westchester city with a mix of older suburban homes, waterfront properties along the Long Island Sound, and a downtown undergoing significant redevelopment. The housing stock spans Colonials and Tudors from the early 1900s to modern condos and townhouses.",
      "We provide heating, cooling, and HVAC repair services throughout New Rochelle. Older homes in the North End and residential neighborhoods often need boiler or furnace work, while newer developments benefit from modern heat pump systems and energy-efficient upgrades.",
    ],
    buildingTypes: [
      "Colonial and Tudor single-family homes",
      "Waterfront and Sound-shore properties",
      "New construction condos and townhouses",
      "Garden apartments",
      "Downtown commercial spaces",
    ],
    commonChallenges: [
      {
        title: "Older Heating Systems",
        description:
          "Colonials and Tudors in New Rochelle often have heating systems from the 1980s–1990s. Upgrading to high-efficiency equipment improves comfort and qualifies for NYSERDA incentives.",
      },
      {
        title: "Humidity Control Near the Sound",
        description:
          "Properties near the Long Island Sound deal with higher humidity. Properly sized cooling equipment and whole-house dehumidification keep indoor air comfortable.",
      },
      {
        title: "New Development Mechanical",
        description:
          "New Rochelle's downtown redevelopment includes new residential buildings that need complete HVAC design — load calculations, equipment selection, and energy code compliance.",
      },
    ],
    popularServices: [
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
      { label: "Load Calculations", href: "/services/load-calculations" },
      { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
    ],
    neighborhoods: [
      "North End", "South End", "West End", "Wykagyl",
      "Larchmont border", "Pelham border", "Beechmont", "Rochelle Heights",
      "Premium Point", "Glen Island", "Residence Park", "Sutton Manor",
    ],
  },

  {
    slug: "white-plains",
    name: "White Plains",
    region: "Westchester",
    title: "HVAC Services in White Plains",
    description:
      "White Plains HVAC contractor for residential and commercial properties. Office HVAC, central air, heating repair, and energy-efficient upgrades.",
    keywords: [
      "HVAC White Plains",
      "White Plains AC repair",
      "commercial HVAC White Plains",
      "heating repair White Plains",
      "White Plains HVAC contractor",
      "furnace repair White Plains NY",
    ],
    heroImage:
      "/area-yonkers.webp",
    intro: [
      "White Plains is the commercial hub of Westchester County, with a dense downtown of office towers, retail, restaurants, and residential buildings surrounded by quieter suburban neighborhoods. This mix creates demand for both commercial and residential HVAC work.",
      "We serve White Plains businesses with commercial HVAC maintenance and repair — rooftop units, split systems, and restaurant ventilation — and residential clients with heating, cooling, and system upgrades. The proximity to I-287 and the Hutchinson means we can respond quickly from our base.",
    ],
    buildingTypes: [
      "Commercial office buildings",
      "Downtown high-rise apartments",
      "Single-family homes in surrounding neighborhoods",
      "Restaurants and retail spaces",
      "Medical and professional offices",
    ],
    commonChallenges: [
      {
        title: "Commercial System Maintenance",
        description:
          "Office buildings and retail spaces in downtown White Plains rely on rooftop units and commercial split systems that need regular preventive maintenance to avoid downtime.",
      },
      {
        title: "Restaurant Ventilation Compliance",
        description:
          "White Plains' restaurant scene requires proper commercial kitchen ventilation — hood installation, exhaust systems, and make-up air units that meet code.",
      },
      {
        title: "Suburban Home Upgrades",
        description:
          "Homes in neighborhoods surrounding downtown often have older central systems. Replacing with a heat pump provides year-round comfort and qualifies for NYSERDA rebates.",
      },
    ],
    popularServices: [
      { label: "Commercial HVAC", href: "/services/commercial-hvac" },
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Restaurant Hoods", href: "/services/restaurant-hoods" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Load Calculations", href: "/services/load-calculations" },
    ],
    neighborhoods: [
      "Downtown White Plains", "Battle Hill", "Fisher Hill",
      "Gedney Farms", "Highlands", "Carhart", "Prospect Park",
      "Rosedale", "Soundview", "North White Plains",
    ],
  },

  {
    slug: "mount-vernon",
    name: "Mount Vernon",
    region: "Westchester",
    title: "HVAC Services in Mount Vernon",
    description:
      "Mount Vernon HVAC services for homes and multi-family buildings. Boiler repair, heating, cooling, and energy-efficient system upgrades.",
    keywords: [
      "HVAC Mount Vernon",
      "Mount Vernon boiler repair",
      "heating service Mount Vernon",
      "AC installation Mount Vernon",
      "Mount Vernon HVAC contractor",
      "furnace repair Mount Vernon NY",
    ],
    heroImage:
      "/area-new-rochelle.webp",
    intro: [
      "Mount Vernon borders the Bronx and shares many of the same building types — multi-family apartment buildings, older two-family homes, and scattered single-family properties. The city's housing stock is aging, which means heating systems here often need repair, maintenance, or full replacement.",
      "We provide HVAC service throughout Mount Vernon, from boiler work in multi-family buildings to central air installations in single-family homes. Many residents here also qualify for energy assistance programs and NYSERDA rebates that can make upgrades more affordable.",
    ],
    buildingTypes: [
      "Multi-family apartment buildings",
      "Two-family and three-family homes",
      "Single-family homes",
      "Small commercial spaces",
      "Mixed-use buildings",
    ],
    commonChallenges: [
      {
        title: "Boiler Maintenance for Multi-Family",
        description:
          "Older multi-family buildings in Mount Vernon need regular boiler service — combustion analysis, safety checks, and preventive maintenance to keep heating reliable through winter.",
      },
      {
        title: "Oil Heat Conversion",
        description:
          "A number of Mount Vernon homes still use oil heat. Converting to gas or electric heat pumps eliminates the hassle of oil deliveries and typically reduces monthly costs.",
      },
      {
        title: "Energy Assistance Eligibility",
        description:
          "Mount Vernon residents may qualify for HEAP Cooling Assistance and other energy programs. We're an approved vendor and can help determine eligibility.",
      },
    ],
    popularServices: [
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Cooling Assistance (HEAP/EPCP)", href: "/services/cooling-assistance" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
    ],
    neighborhoods: [
      "Fleetwood", "Chester Heights", "South Side",
      "North Side", "Hartley Park", "Oakwood Heights",
      "Pelham Gardens border", "Eastchester border", "Bronxville border",
    ],
  },

  {
    slug: "westchester",
    name: "Westchester County",
    region: "Westchester",
    title: "HVAC Services in Westchester County",
    description:
      "Westchester County HVAC services from Pelham to Tarrytown. Heating, cooling, boiler repair, and energy-efficient upgrades for suburban homes.",
    keywords: [
      "HVAC Westchester County",
      "Westchester heating repair",
      "AC installation Westchester",
      "boiler repair Westchester NY",
      "Westchester HVAC contractor",
      "furnace repair Westchester",
      "HVAC Scarsdale",
      "HVAC Tarrytown",
      "HVAC Bronxville",
      "HVAC Pelham",
    ],
    heroImage:
      "/area-mount-vernon.webp",
    intro: [
      "Beyond Yonkers, New Rochelle, White Plains, and Mount Vernon, Westchester County is filled with dozens of towns and villages — each with its own character and housing stock. From the walkable village centers of Bronxville and Larchmont to the larger homes of Scarsdale and Chappaqua, we provide HVAC service across lower and central Westchester up to Tarrytown and Valhalla.",
      "Most Westchester homes are single-family with central heating and cooling systems. The housing stock spans prewar Colonials, mid-century ranches and splits, and newer construction. We handle seasonal maintenance, emergency repairs, equipment replacement, and energy-efficient upgrades — and help homeowners take advantage of NYSERDA rebates for heat pumps and high-efficiency systems.",
    ],
    buildingTypes: [
      "Colonial and Tudor single-family homes",
      "Ranch and split-level homes",
      "Cape Cods and bungalows",
      "Estate and waterfront properties",
      "Garden apartments and small condos",
      "Village commercial and retail spaces",
    ],
    commonChallenges: [
      {
        title: "Aging Suburban Heating Systems",
        description:
          "Many Westchester homes have furnaces and boilers that are 20–30+ years old. These systems lose efficiency over time and become unreliable. Upgrading to modern high-efficiency equipment cuts fuel costs and improves comfort.",
      },
      {
        title: "Oil-to-Gas and Oil-to-Heat-Pump Conversions",
        description:
          "A significant number of Westchester homes still burn heating oil, especially in older neighborhoods. Converting to natural gas or a cold-climate heat pump eliminates oil deliveries and qualifies for NYSERDA incentives.",
      },
      {
        title: "Central Air Replacement and New Installation",
        description:
          "Some older Westchester homes never had central AC — they relied on window units. Others have aging central systems due for replacement. In both cases, proper load calculations and equipment sizing are critical for long-lasting comfort.",
      },
      {
        title: "Zoning for Larger Homes",
        description:
          "Westchester's larger homes often have uneven temperatures — the second floor is too warm in summer, the basement is always cold. Multi-zone systems with independent thermostats solve this by conditioning different areas separately.",
      },
    ],
    popularServices: [
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Load Calculations", href: "/services/load-calculations" },
      { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
    ],
    neighborhoods: [
      "Bronxville", "Tuckahoe", "Eastchester", "Scarsdale",
      "Pelham", "Pelham Manor", "Larchmont", "Mamaroneck",
      "Rye", "Rye Brook", "Port Chester", "Harrison",
      "Ardsley", "Dobbs Ferry", "Hastings-on-Hudson", "Irvington",
      "Tarrytown", "Sleepy Hollow", "Elmsford", "Valhalla",
      "Greenburgh", "Hartsdale", "Edgemont", "Pleasantville",
    ],
  },

  /* ═══════════════ NASSAU COUNTY ═══════════════ */

  {
    slug: "hempstead",
    name: "Hempstead",
    region: "Nassau County",
    title: "HVAC Services in Hempstead",
    description:
      "Hempstead HVAC services for homes and businesses. Central air, furnace repair, heat pump installation, and seasonal maintenance across Nassau County.",
    keywords: [
      "HVAC Hempstead",
      "Hempstead AC repair",
      "furnace repair Hempstead",
      "central air Hempstead NY",
      "Hempstead HVAC contractor",
      "heating repair Hempstead Long Island",
    ],
    heroImage:
      "/area-white-plains.webp",
    intro: [
      "The Town of Hempstead is the largest town in Nassau County and one of the most populated in the country. It encompasses dozens of villages and hamlets, each with its own residential character — from Cape Cods and ranches built in the postwar era to larger Colonials and newer construction.",
      "Most homes here have central HVAC systems — a gas furnace and central air conditioner. We handle everything from seasonal tune-ups and emergency repairs to full system replacements. For homeowners considering upgrades, heat pump systems offer year-round comfort and qualify for significant NYSERDA rebates.",
    ],
    buildingTypes: [
      "Cape Cod and ranch-style homes",
      "Split-level homes",
      "Colonial single-family homes",
      "Small multi-family properties",
      "Commercial and retail buildings",
    ],
    commonChallenges: [
      {
        title: "Postwar System Replacements",
        description:
          "Many Hempstead-area homes were built in the 1950s–1970s with heating and cooling systems that have been replaced once and are due again. Proper sizing with a load calculation ensures the new system matches the actual needs of the home.",
      },
      {
        title: "Duct Sealing and Insulation",
        description:
          "Homes with ductwork in uninsulated attics or crawlspaces lose a significant portion of conditioned air. Sealing and insulating ducts is one of the most cost-effective comfort improvements available.",
      },
      {
        title: "Oil-to-Heat-Pump Conversion",
        description:
          "Some older Hempstead homes still have oil furnaces or boilers. Converting to an electric heat pump eliminates oil costs and qualifies for NYSERDA incentives up to $10,000.",
      },
    ],
    popularServices: [
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Load Calculations", href: "/services/load-calculations" },
      { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
    ],
    neighborhoods: [
      "Hempstead Village", "West Hempstead", "East Meadow", "Uniondale",
      "Levittown", "Wantagh", "Merrick", "Bellmore",
      "Seaford", "Massapequa", "Franklin Square", "Elmont",
    ],
  },

  {
    slug: "garden-city",
    name: "Garden City",
    region: "Nassau County",
    title: "HVAC Services in Garden City",
    description:
      "Garden City HVAC services for homes and commercial properties. Heating, cooling, system upgrades, and energy-efficient solutions on Long Island.",
    keywords: [
      "HVAC Garden City",
      "Garden City AC installation",
      "heating repair Garden City NY",
      "central air Garden City",
      "Garden City HVAC contractor",
      "furnace service Garden City Long Island",
    ],
    heroImage:
      "/area-garden-city.webp",
    intro: [
      "Garden City is one of Nassau County's premier residential villages, known for its well-maintained homes, tree-lined streets, and high property values. Homes here range from early 1900s Colonials and Tudors in the older sections to newer construction and renovated properties throughout.",
      "Homeowners in Garden City expect their HVAC systems to work flawlessly. We provide reliable heating and cooling service, seasonal maintenance, and system upgrades that match the quality of these homes. When it's time to replace, we ensure proper sizing and installation that protects both comfort and home value.",
    ],
    buildingTypes: [
      "Colonial and Tudor single-family homes",
      "Expanded Cape Cods and ranches",
      "Renovated and gut-rehabbed homes",
      "Commercial offices (Seventh Street corridor)",
      "Retail and restaurant spaces",
    ],
    commonChallenges: [
      {
        title: "High-End System Expectations",
        description:
          "Garden City homeowners want quiet, efficient, and reliable systems. Variable-speed equipment, zoned systems, and smart thermostats are common requests that we design and install regularly.",
      },
      {
        title: "Older Home Renovations",
        description:
          "When homeowners renovate, the existing HVAC often can't keep up with the new layout. We do load calculations and redesign the system to match the renovated space — not just patch the old one.",
      },
      {
        title: "Preventive Maintenance Programs",
        description:
          "Protecting the investment in a premium home means regular maintenance. Our service contracts include twice-yearly inspections, priority scheduling, and discounted repairs.",
      },
    ],
    popularServices: [
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Load Calculations", href: "/services/load-calculations" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
    ],
    neighborhoods: [
      "Garden City Village", "Garden City South", "Garden City Park",
      "Stewart Manor", "New Hyde Park border", "Mineola border",
      "Hempstead border", "East Garden City",
    ],
  },

  {
    slug: "great-neck",
    name: "Great Neck",
    region: "Nassau County",
    title: "HVAC Services in Great Neck",
    description:
      "Great Neck HVAC services for homes and businesses. Heating, cooling, boiler repair, and premium system installations on the North Shore.",
    keywords: [
      "HVAC Great Neck",
      "Great Neck heating repair",
      "AC installation Great Neck",
      "boiler repair Great Neck NY",
      "Great Neck HVAC contractor",
      "furnace service Great Neck Long Island",
    ],
    heroImage:
      "/area-hempstead.webp",
    intro: [
      "Great Neck sits on a peninsula on Long Island's North Shore, encompassing several villages and neighborhoods with a wide range of home styles — from waterfront estates to mid-century ranches and multi-family buildings near the LIRR station. The area's proximity to the water adds humidity considerations to every HVAC decision.",
      "We provide full HVAC services to Great Neck residents, from emergency boiler repairs in winter to central air installations and heat pump upgrades. Many homes here are larger and have multi-zone systems that require careful balancing and maintenance to deliver even comfort throughout.",
    ],
    buildingTypes: [
      "Large single-family estates",
      "Mid-century ranches and splits",
      "Multi-family buildings near transit",
      "Waterfront properties",
      "Mixed-use commercial spaces",
    ],
    commonChallenges: [
      {
        title: "Large Home Zoning",
        description:
          "Bigger homes need multi-zone systems to keep every room comfortable. We design and install zoned systems that independently control temperature in different areas of the home.",
      },
      {
        title: "Waterfront Humidity",
        description:
          "Homes on or near the water deal with salt air and higher humidity. Properly sized equipment with dehumidification capability keeps indoor air comfortable year-round.",
      },
      {
        title: "Premium Equipment Standards",
        description:
          "Great Neck homeowners often prefer top-tier equipment — Mitsubishi, Carrier, Bosch — and expect professional installation that matches. We carry and install premium brands with proper commissioning.",
      },
    ],
    popularServices: [
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Load Calculations", href: "/services/load-calculations" },
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
    ],
    neighborhoods: [
      "Great Neck Village", "Great Neck Estates", "Great Neck Plaza",
      "Kensington", "Kings Point", "Thomaston",
      "Saddle Rock", "Russell Gardens", "University Gardens",
    ],
  },

  {
    slug: "mineola",
    name: "Mineola",
    region: "Nassau County",
    title: "HVAC Services in Mineola",
    description:
      "Mineola HVAC contractor for residential and commercial systems. Heating, cooling, furnace repair, and energy-efficient upgrades in central Nassau County.",
    keywords: [
      "HVAC Mineola",
      "Mineola heating repair",
      "AC installation Mineola",
      "furnace repair Mineola NY",
      "Mineola HVAC contractor",
      "central air Mineola Long Island",
    ],
    heroImage:
      "/area-long-beach.webp",
    intro: [
      "Mineola is the seat of Nassau County and a well-connected village in the center of Long Island, with a mix of established residential neighborhoods and a growing downtown. Homes here are predominantly single-family — Cape Cods, ranches, and Colonials from the mid-twentieth century — with gas heat and central air.",
      "We serve Mineola and the surrounding area with heating, cooling, and HVAC repair. Whether it's a furnace that stopped igniting on a cold morning, an AC system that needs replacement, or a homeowner wanting to upgrade to a heat pump, we deliver reliable, properly sized solutions.",
    ],
    buildingTypes: [
      "Cape Cod and ranch homes",
      "Colonial single-family homes",
      "Garden apartments and small condos",
      "Commercial offices and professional buildings",
      "Government and municipal buildings",
    ],
    commonChallenges: [
      {
        title: "Mid-Century System Replacement",
        description:
          "Many Mineola homes have had one or two system replacements since they were built. We make sure each replacement is done right — proper load calculation, correct equipment selection, and quality installation.",
      },
      {
        title: "Compact Lot Considerations",
        description:
          "Smaller lots in Mineola mean outdoor equipment placement matters. We select equipment with appropriate sound ratings and position condensers to meet setback requirements while maintaining serviceability.",
      },
      {
        title: "Commercial Tenant Buildouts",
        description:
          "Downtown Mineola's commercial spaces often need HVAC as part of tenant buildouts — new splits, ductwork, and ventilation designed around the specific use of the space.",
      },
    ],
    popularServices: [
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Load Calculations", href: "/services/load-calculations" },
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
      { label: "Commercial HVAC", href: "/services/commercial-hvac" },
    ],
    neighborhoods: [
      "Mineola Village", "Williston Park border", "Albertson border",
      "Garden City border", "Herricks", "Roslyn Heights border",
      "East Williston border", "Old Westbury border",
    ],
  },

  {
    slug: "valley-stream",
    name: "Valley Stream",
    region: "Nassau County",
    title: "HVAC Services in Valley Stream",
    description:
      "Valley Stream HVAC services for homes and businesses. Heating, cooling, furnace repair, and affordable system upgrades near the Queens border.",
    keywords: [
      "HVAC Valley Stream",
      "Valley Stream AC repair",
      "furnace repair Valley Stream",
      "heating service Valley Stream NY",
      "Valley Stream HVAC contractor",
      "central air Valley Stream Long Island",
    ],
    heroImage:
      "/area-valley-stream.webp",
    intro: [
      "Valley Stream sits right at the Nassau-Queens border, making it one of the first Long Island communities outside New York City. The village has a dense residential layout of Cape Cods, ranches, and split-levels, most built in the 1940s–1960s and many still on their original or second HVAC systems.",
      "We provide heating, cooling, and HVAC repair throughout Valley Stream and the surrounding area. Many homeowners here are dealing with aging equipment that's costing more to run each year. We help them evaluate whether to repair or replace, and when replacement makes sense, we properly size the new system and handle NYSERDA rebate paperwork.",
    ],
    buildingTypes: [
      "Cape Cod homes",
      "Ranch and split-level homes",
      "Small multi-family properties",
      "Commercial strip centers",
      "Retail and restaurant spaces",
    ],
    commonChallenges: [
      {
        title: "Aging Postwar Homes",
        description:
          "Valley Stream's housing stock is primarily from the mid-twentieth century. These homes often have outdated ductwork, insufficient insulation, and heating systems past their expected life. A whole-house approach — duct sealing, proper sizing, and modern equipment — delivers the best results.",
      },
      {
        title: "Flood Zone Considerations",
        description:
          "Parts of Valley Stream are in flood-prone areas. Ground-level equipment like furnaces and water heaters in basements may need elevation or flood-resistant installation approaches.",
      },
      {
        title: "Energy Cost Reduction",
        description:
          "With rising energy costs, Valley Stream homeowners benefit from efficiency upgrades. Heat pumps, high-efficiency furnaces, and properly sealed ductwork all reduce monthly bills while improving comfort.",
      },
    ],
    popularServices: [
      { label: "Heating & Cooling", href: "/services/heating-cooling" },
      { label: "Service & Repair", href: "/services/service-repair" },
      { label: "Boiler & Furnace Repair", href: "/services/boiler-furnace-repair" },
      { label: "Water Heaters", href: "/services/heat-pump-water-heaters" },
      { label: "Load Calculations", href: "/services/load-calculations" },
    ],
    neighborhoods: [
      "Valley Stream Village", "North Valley Stream", "South Valley Stream",
      "Gibson", "Woodmere border", "Lynbrook border",
      "Elmont border", "Rosedale (Queens) border",
    ],
  },
];

/* ───────── helpers ───────── */
export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getServiceAreasByRegion(region: ServiceArea["region"]): ServiceArea[] {
  return serviceAreas.filter((a) => a.region === region);
}
