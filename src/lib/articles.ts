import type { LucideIcon } from "lucide-react";
import {
  Wrench,
  Gauge,
  Thermometer,
  Wind,
  Snowflake,
  Flame,
} from "lucide-react";

/* ───────── block types ───────── */
export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "cta"; variant: "subtle" | "card"; text: string; href: string; buttonText?: string };

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: "Maintenance" | "Troubleshooting" | "Systems";
  readTime: string;
  date: string;
  heroImage: string;
  icon: LucideIcon;
  content: ContentBlock[];
}

/* ───────── articles ───────── */
export const articles: Article[] = [
  /* ─── 1. HVAC Maintenance Tips ─── */
  {
    slug: "hvac-maintenance-tips",
    title: "7 HVAC Maintenance Tips That Prevent Costly Repairs",
    description:
      "Simple steps any homeowner can take to keep their heating and cooling system running efficiently — and when to call a professional.",
    category: "Maintenance",
    readTime: "6 min read",
    date: "2026-03-05",
    heroImage: "/hvac-tools-closeup.webp",
    icon: Wrench,
    content: [
      {
        type: "paragraph",
        text: "Your HVAC system is the most expensive appliance in your home, and it runs almost year-round in New York. A little routine attention can extend its life by years and prevent the kind of emergency breakdowns that always seem to happen on the coldest night of January.",
      },
      {
        type: "heading",
        text: "1. Change Your Air Filter on Schedule",
      },
      {
        type: "paragraph",
        text: "A clogged filter forces your blower motor to work harder, raises your energy bills, and can freeze your evaporator coil in summer. Standard 1-inch filters should be replaced every 30–60 days. If you use a 4- or 5-inch media filter, every 6–12 months is typical. Hold the old filter up to a light — if you can't see through it, it's overdue.",
      },
      {
        type: "heading",
        text: "2. Keep the Outdoor Unit Clear",
      },
      {
        type: "paragraph",
        text: "Your condenser needs open airflow to reject heat. Trim shrubs, grass, and debris back at least 24 inches on all sides. In fall, clear leaves from the top grille. Never stack anything against the unit or let a deck enclose it without proper clearance — restricted airflow raises head pressure and shortens compressor life.",
      },
      {
        type: "heading",
        text: "3. Inspect Your Condensate Drain",
      },
      {
        type: "paragraph",
        text: "Every air conditioner and high-efficiency furnace produces condensation that drains through a PVC line. Algae and sludge can clog that line, causing water to back up into the drain pan — or worse, onto your ceiling. Pour a cup of plain white vinegar into the drain line every few months to keep it clear.",
      },
      {
        type: "cta",
        variant: "subtle",
        text: "If your drain pan is already overflowing or you see water stains on your ceiling, don't wait — our technicians can clear the line and inspect for damage.",
        href: "/services/service-repair",
      },
      {
        type: "heading",
        text: "4. Listen for Unusual Sounds",
      },
      {
        type: "paragraph",
        text: "A healthy system hums. Banging may indicate a broken blower wheel or loose ductwork. Screeching often points to a failing belt or motor bearing. Clicking at the outdoor unit can mean a failing contactor. Short cycling — the system turning on and off every few minutes — usually signals a refrigerant issue or an oversized unit. Any of these warrant a service call before a minor issue becomes a major repair.",
      },
      {
        type: "heading",
        text: "5. Check Your Thermostat Settings",
      },
      {
        type: "paragraph",
        text: "Make sure your thermostat is set to \"Auto\" for the fan, not \"On.\" In \"On\" mode the blower runs continuously, which costs more and can make your home feel clammy in summer because it blows moisture back off the evaporator coil. If your thermostat uses batteries, replace them annually — a dead thermostat means no heat or cooling.",
      },
      {
        type: "heading",
        text: "6. Don't Skip Seasonal Tune-Ups",
      },
      {
        type: "paragraph",
        text: "A professional tune-up catches small problems — a weak capacitor, low refrigerant charge, a cracked heat exchanger — before they cause a breakdown. In NYC, we recommend a cooling tune-up in spring and a heating tune-up in fall. A technician will clean the coils, check electrical connections, measure airflow, and verify safe combustion if you have a gas furnace or boiler.",
      },
      {
        type: "cta",
        variant: "card",
        text: "We offer seasonal maintenance contracts that include priority scheduling, discounted repairs, and twice-yearly inspections — so nothing gets missed.",
        href: "/services/service-repair",
        buttonText: "Learn About Maintenance Plans",
      },
      {
        type: "heading",
        text: "7. Seal and Insulate Your Ductwork",
      },
      {
        type: "paragraph",
        text: "The average duct system loses 20–30% of conditioned air through leaks and poor insulation, according to the U.S. Department of Energy. That's like paying for heating or cooling you never feel. Leaky ducts in unconditioned spaces — attics, crawlspaces, between floors — are the biggest offenders. Professional duct sealing with mastic or Aeroseal can dramatically improve comfort and efficiency.",
      },
      {
        type: "callout",
        text: "Quick rule of thumb: if some rooms in your home are always too hot or too cold while others are comfortable, leaky or poorly designed ductwork is the most common cause.",
      },
      {
        type: "paragraph",
        text: "Taking these steps consistently won't just prevent surprise breakdowns — it can cut your energy bills by 15–25% and add years to your equipment's lifespan. The best time to start is right now.",
      },
      {
        type: "cta",
        variant: "subtle",
        text: "Want a professional to evaluate your system? Request a service visit and we'll give your HVAC a full health check.",
        href: "/#contact",
      },
    ],
  },

  /* ─── 2. What Is Static Pressure ─── */
  {
    slug: "what-is-static-pressure",
    title: "What Is Static Pressure in HVAC? (And Why It Matters)",
    description:
      "Static pressure is the hidden metric that determines whether your HVAC system delivers comfort or wastes energy. Here's what every homeowner should know.",
    category: "Systems",
    readTime: "7 min read",
    date: "2026-03-03",
    heroImage: "/hvac-ductwork.webp",
    icon: Gauge,
    content: [
      {
        type: "paragraph",
        text: "If you've ever felt weak airflow from your vents, heard your system straining, or noticed some rooms that are always too warm or too cold, the problem might not be your equipment at all — it might be static pressure.",
      },
      {
        type: "heading",
        text: "Static Pressure, Explained Simply",
      },
      {
        type: "paragraph",
        text: "Think of your ductwork as a highway and the air as traffic. Static pressure is how crowded that highway is. It's measured in inches of water column (iwc) using a tool called a manometer. When everything is sized correctly, air flows freely and your system operates at its rated capacity. When static pressure is too high, your system is fighting the ductwork to move air — like trying to breathe through a coffee straw.",
      },
      {
        type: "callout",
        text: "Most residential systems are designed to operate between 0.50 and 0.80 iwc of total external static pressure. Anything above that means your system is working harder than it should.",
      },
      {
        type: "heading",
        text: "What Causes High Static Pressure?",
      },
      {
        type: "list",
        items: [
          "Undersized ductwork — the most common culprit, especially in older NYC buildings where ductwork was added as an afterthought",
          "Dirty or clogged air filters — a MERV-13 filter in a system designed for MERV-8 can restrict airflow significantly",
          "Too many bends and transitions — every 90-degree elbow adds friction, equivalent to roughly 10 feet of straight duct",
          "Closed or blocked registers — shutting vents in unused rooms actually increases pressure on the rest of the system",
          "Oversized equipment — a unit that's too powerful for the ductwork will push more air than the ducts can handle",
        ],
      },
      {
        type: "heading",
        text: "Why It Matters for Your Comfort and Wallet",
      },
      {
        type: "paragraph",
        text: "High static pressure creates a chain reaction of problems. Your blower motor draws more electricity, your coil can't transfer heat efficiently, your compressor runs hotter, and your system short-cycles. The result: higher energy bills, uneven temperatures, more frequent breakdowns, and a significantly shorter equipment lifespan.",
      },
      {
        type: "paragraph",
        text: "In many cases, homeowners replace a system that \"died too young\" without realizing the real problem was ductwork that was never right in the first place. The new system inherits the same airflow problems and the cycle repeats.",
      },
      {
        type: "cta",
        variant: "subtle",
        text: "Static pressure testing requires a manometer and trained hands. We include it in every system evaluation — request a diagnostic if your system feels off.",
        href: "/services/load-calculations",
      },
      {
        type: "heading",
        text: "How We Measure and Fix It",
      },
      {
        type: "paragraph",
        text: "During a load calculation or system diagnostic, our technicians take static pressure readings at the supply and return plenums. We compare those readings against the equipment manufacturer's rated external static pressure. If the numbers are too high, we trace the cause — it might be as simple as upsizing a filter grille, or it might require modifying ductwork runs.",
      },
      {
        type: "list",
        items: [
          "Manual D duct design ensures ducts are sized for the actual airflow your system needs",
          "Modifying trunk lines or adding return drops can dramatically lower pressure",
          "Replacing a restrictive filter rack with a properly sized media cabinet often solves chronic problems",
          "Balancing dampers allow fine-tuning airflow to each room after the pressure is corrected",
        ],
      },
      {
        type: "paragraph",
        text: "Most homeowners have never heard of static pressure, and many HVAC contractors skip measuring it. But it's one of the single most important factors in whether your system delivers the comfort it was designed for — or falls short.",
      },
      {
        type: "cta",
        variant: "card",
        text: "Our load calculation service includes full static pressure testing, Manual J heat gain/loss calculations, and Manual D duct sizing — everything needed to design a system that actually performs.",
        href: "/services/load-calculations",
        buttonText: "Learn About Load Calculations",
      },
    ],
  },

  /* ─── 3. AC Not Cooling / Heater Not Heating ─── */
  {
    slug: "ac-not-cooling-heater-not-heating",
    title: "AC Not Cooling or Heater Not Heating? Here's What to Check",
    description:
      "Before you call for service, try these troubleshooting steps. Some fixes take 30 seconds — others need a professional.",
    category: "Troubleshooting",
    readTime: "8 min read",
    date: "2026-03-07",
    heroImage: "/outdoor-ac-condensers.webp",
    icon: Thermometer,
    content: [
      {
        type: "paragraph",
        text: "It's the middle of a New York summer and your AC is blowing warm air. Or it's January and the heat just stopped. Before you panic, there are a few things you can check yourself — some of which are embarrassingly simple fixes that don't require a service call at all.",
      },
      {
        type: "heading",
        text: "Start With the Basics",
      },
      {
        type: "list",
        items: [
          "Check your thermostat — Make sure it's set to the correct mode (Cool for summer, Heat for winter) and that the set temperature is below room temp for cooling or above for heating. If it's a battery-powered thermostat, try fresh batteries.",
          "Check the circuit breaker — Your system has at least two breakers: one for the indoor unit and one for the outdoor unit. If either has tripped, reset it once. If it trips again, do not keep resetting it — call for service.",
          "Check the filter — A severely clogged filter can shut down the system. Pull it out and see if it's blocked solid. Replace it and restart the system.",
          "Check the emergency switch — Many systems have a light switch on the wall near the furnace or air handler. Someone may have accidentally turned it off.",
        ],
      },
      {
        type: "heading",
        text: "AC-Specific Troubleshooting",
      },
      {
        type: "paragraph",
        text: "If your air conditioner is running but not cooling, check whether the outdoor unit is actually running. Walk outside and listen. If only the indoor fan is blowing but the outdoor condenser is silent, the issue is likely a tripped breaker, a bad capacitor, or a failed contactor — all common repairs.",
      },
      {
        type: "paragraph",
        text: "If the outdoor unit is running but the air coming from your vents is barely cool, the system may be low on refrigerant. Refrigerant doesn't \"burn off\" — if it's low, there's a leak somewhere. This requires a professional with gauges and leak detection equipment to repair properly.",
      },
      {
        type: "callout",
        text: "Ice on the refrigerant lines or the indoor coil is a sign of low refrigerant or restricted airflow. Turn the system to \"Fan Only\" to let the ice melt before running it in cooling mode again — running a frozen system can damage the compressor.",
      },
      {
        type: "cta",
        variant: "subtle",
        text: "If you see ice buildup or suspect a refrigerant leak, it's time for a professional diagnostic. Our technicians can locate the leak, repair it, and recharge the system properly.",
        href: "/services/heating-cooling",
      },
      {
        type: "heading",
        text: "Heating-Specific Troubleshooting",
      },
      {
        type: "paragraph",
        text: "For gas furnaces, check whether the unit is igniting at all. Modern furnaces use electronic ignition (hot surface igniter or spark ignition), not a standing pilot. If you hear the inducer motor start but never hear ignition, the igniter may have failed. This is one of the most common furnace repairs and usually takes about 30 minutes to fix.",
      },
      {
        type: "paragraph",
        text: "For boilers, check your water pressure gauge. Most residential hot water boilers should show 12–18 psi when cold. If the gauge reads zero, the system may have lost water pressure — usually from a failed fill valve or a leak. Steam boilers should have visible water in the sight glass. If the glass is empty, the boiler shut itself down as a safety measure.",
      },
      {
        type: "paragraph",
        text: "For heat pumps, remember that heat pumps in heating mode blow air that feels cooler than a gas furnace — typically 90–100°F supply air versus 120–140°F from a furnace. This is normal. However, if it's very cold outside (below 30°F) and your auxiliary/emergency heat indicator is on constantly, the heat pump may need service.",
      },
      {
        type: "heading",
        text: "When to Call a Professional",
      },
      {
        type: "list",
        items: [
          "The breaker keeps tripping after you reset it",
          "You smell gas or burning near the furnace",
          "There's water pooling around the unit or boiler",
          "The system runs constantly but never reaches the set temperature",
          "You hear loud banging, grinding, or screeching",
          "Error codes or flashing lights on the control board",
        ],
      },
      {
        type: "paragraph",
        text: "Many of these issues have straightforward fixes when caught early. Ignoring them tends to turn a $200 repair into a $2,000 one — or a full system replacement.",
      },
      {
        type: "cta",
        variant: "card",
        text: "Not sure what's going on? Our techs carry the parts and tools to diagnose and fix most problems in a single visit — no second trips.",
        href: "/#contact",
        buttonText: "Request a Diagnostic",
      },
    ],
  },

  /* ─── 4. How Often to Change Air Filter ─── */
  {
    slug: "how-often-change-air-filter",
    title: "How Often Should You Change Your Air Filter?",
    description:
      "The answer depends on your filter type, your home, and how you live. Here's a clear guide to getting it right.",
    category: "Maintenance",
    readTime: "5 min read",
    date: "2026-03-01",
    heroImage: "/changing-air-filter.webp",
    icon: Wind,
    content: [
      {
        type: "paragraph",
        text: "\"Just change your filter\" is the most common HVAC advice — but how often? Every month? Every three months? Once a year? The answer isn't one-size-fits-all, and getting it wrong in either direction causes problems.",
      },
      {
        type: "heading",
        text: "Filter Types and Their Lifespans",
      },
      {
        type: "list",
        items: [
          "1-inch fiberglass (MERV 1–4) — Change every 30 days. These are basic dust catchers, not air cleaners. They protect the equipment, not your lungs.",
          "1-inch pleated (MERV 8–11) — Change every 60–90 days. The most common residential filter. Good balance of filtration and airflow.",
          "4-inch or 5-inch media filter (MERV 11–13) — Change every 6–12 months. These fit a dedicated filter cabinet and hold far more dust before restricting airflow.",
          "HEPA or MERV 16+ — Requires a system specifically designed for it. Do not put a HEPA filter in a standard furnace — the pressure drop will damage your system.",
        ],
      },
      {
        type: "callout",
        text: "MERV stands for Minimum Efficiency Reporting Value. Higher isn't always better — a MERV-13 filter in a system designed for MERV-8 can restrict airflow and raise static pressure, causing the same problems as a clogged filter.",
      },
      {
        type: "heading",
        text: "Factors That Shorten Filter Life",
      },
      {
        type: "paragraph",
        text: "Your filter won't last as long if you have pets (especially dogs and cats that shed), if anyone in the household smokes, during heavy pollen seasons, if you live near a construction site, or if you run the fan in \"On\" mode instead of \"Auto.\" In these cases, check your filter monthly and replace it when it's visibly gray and matted.",
      },
      {
        type: "heading",
        text: "What Happens When You Don't Change It",
      },
      {
        type: "paragraph",
        text: "A dirty filter is the single most common cause of HVAC system failure. When the filter clogs, airflow drops. In cooling mode, reduced airflow causes the evaporator coil to freeze, which can send liquid refrigerant back to the compressor — the most expensive component in the system. In heating mode, restricted airflow causes the heat exchanger to overheat, triggering the limit switch and shutting down the furnace. Over time, these stress cycles shorten the life of every component in the system.",
      },
      {
        type: "cta",
        variant: "subtle",
        text: "If your system keeps shutting down or you're dealing with uneven temperatures, a clogged filter might be the start — but not the whole story. We can do a full system check to find out.",
        href: "/services/service-repair",
      },
      {
        type: "heading",
        text: "Choosing the Right Filter for Your System",
      },
      {
        type: "paragraph",
        text: "The best filter is the one your system was designed to handle. Check your equipment manual or the label on the existing filter rack for the maximum MERV rating. If you want better filtration without restricting airflow, the solution isn't a thicker filter in the same slot — it's a wider filter cabinet (4 or 5 inches) that gives more surface area for air to pass through.",
      },
      {
        type: "paragraph",
        text: "For NYC apartments and older buildings where space is tight, a well-fitted MERV-8 pleated filter changed regularly will outperform a high-MERV filter that's choking the system. Filtration is a system design decision, not just a trip to the hardware store.",
      },
      {
        type: "cta",
        variant: "card",
        text: "Not sure which filter your system needs? We can evaluate your setup and recommend the right filter type and MERV rating for your equipment and ductwork.",
        href: "/#contact",
        buttonText: "Ask Us About Filters",
      },
    ],
  },

  /* ─── 5. Mini-Split vs Central Air ─── */
  {
    slug: "mini-split-vs-central-air",
    title: "Mini-Split vs. Central Air: Which Is Right for Your NYC Home?",
    description:
      "Ductless mini-splits and central air conditioning solve the same problem differently. Here's an honest comparison for New York homeowners.",
    category: "Systems",
    readTime: "8 min read",
    date: "2026-03-04",
    heroImage: "/commercial-ac-units.webp",
    icon: Snowflake,
    content: [
      {
        type: "paragraph",
        text: "In New York City, cooling your home isn't optional — and the window unit era is ending. Whether you're upgrading from window ACs or replacing an aging central system, the two main contenders are ductless mini-splits and ducted central air. Both have real advantages, and the right choice depends on your building, your budget, and how you use your space.",
      },
      {
        type: "heading",
        text: "How Central Air Works",
      },
      {
        type: "paragraph",
        text: "A central air system uses an outdoor condenser, an indoor evaporator coil (usually mounted on the furnace or air handler), and ductwork to distribute cooled air to every room. The thermostat controls the whole house as one zone. It's the standard in single-family homes and many newer multi-family buildings.",
      },
      {
        type: "heading",
        text: "How Mini-Splits Work",
      },
      {
        type: "paragraph",
        text: "A ductless mini-split uses the same refrigeration cycle — outdoor condenser, indoor evaporator — but skips the ductwork entirely. Each indoor unit (called a head) is mounted on a wall or ceiling in the room it serves, connected to the outdoor unit by a small refrigerant line through a 3-inch hole in the wall. One outdoor unit can serve multiple indoor heads, each with its own thermostat and temperature setting.",
      },
      {
        type: "heading",
        text: "When Central Air Makes Sense",
      },
      {
        type: "list",
        items: [
          "You already have ductwork in good condition",
          "You prefer a clean look with no wall-mounted equipment visible",
          "You're conditioning a whole house uniformly and don't need zone control",
          "Your building has space for an air handler and duct runs",
        ],
      },
      {
        type: "heading",
        text: "When Mini-Splits Make Sense",
      },
      {
        type: "list",
        items: [
          "No existing ductwork — very common in older NYC brownstones, co-ops, and prewar buildings",
          "You want room-by-room temperature control (zone control)",
          "Adding ductwork would be prohibitively expensive or impossible due to building constraints",
          "You're adding AC to a single room, addition, or converted space",
          "You want to replace window units without the visual impact of through-wall sleeves",
        ],
      },
      {
        type: "callout",
        text: "In NYC, ductless mini-splits have become extremely popular for prewar apartments and brownstones where ductwork was never part of the original construction. They're also the fastest way to add both heating and cooling — most mini-splits are heat pumps that work year-round.",
      },
      {
        type: "heading",
        text: "Efficiency Comparison",
      },
      {
        type: "paragraph",
        text: "Mini-splits are generally more energy-efficient than central systems. Because there are no ducts, there's no duct loss (which can waste 20–30% of energy). Inverter-driven mini-split compressors ramp up and down to match the load rather than cycling on and off, which uses less electricity and maintains more consistent temperatures. SEER2 ratings for quality mini-splits range from 18–42, while central systems typically range from 14–21.",
      },
      {
        type: "cta",
        variant: "subtle",
        text: "Want to know exactly what system fits your space? A load calculation takes the guesswork out of sizing — and prevents the #1 mistake in HVAC: installing the wrong size.",
        href: "/services/load-calculations",
      },
      {
        type: "heading",
        text: "Cost Comparison",
      },
      {
        type: "paragraph",
        text: "For a home without ductwork, mini-splits are almost always cheaper because you avoid the cost of designing and installing an entire duct system. For a home with existing ducts, central air is usually the more economical choice — assuming the ducts are in decent shape. Multi-zone mini-split systems (3–5 indoor heads) can cost as much as a central system, but the energy savings and zone control often justify it over time.",
      },
      {
        type: "heading",
        text: "The NYC Factor",
      },
      {
        type: "paragraph",
        text: "Building type matters enormously in this decision. Manhattan co-ops and condos may have board restrictions on exterior equipment, though most allow mini-split condensers on rooftops or in approved locations. Brownstones often have no ductwork and limited space for an air handler, making mini-splits the natural fit. Newer townhouses and single-family homes in the outer boroughs typically have ductwork, making central air straightforward.",
      },
      {
        type: "paragraph",
        text: "NYSERDA rebates currently apply to both heat pump mini-splits and central heat pump systems, which can offset a significant portion of the installation cost. The rebate amounts depend on system efficiency and whether you're replacing fossil fuel equipment.",
      },
      {
        type: "cta",
        variant: "card",
        text: "Whether it's a mini-split for your brownstone or a central system for your whole home, we'll help you choose the right setup — and handle the permits, installation, and rebate paperwork.",
        href: "/#contact",
        buttonText: "Get a Free Estimate",
      },
    ],
  },

  /* ─── 6. Signs Your Boiler Needs Repair ─── */
  {
    slug: "signs-boiler-needs-repair",
    title: "6 Signs Your Boiler Needs Repair Before It Fails",
    description:
      "Boilers give warnings before they break down. Here's how to read the signs and avoid a mid-winter emergency.",
    category: "Troubleshooting",
    readTime: "6 min read",
    date: "2026-03-02",
    heroImage: "/basement-boiler-room.webp",
    icon: Flame,
    content: [
      {
        type: "paragraph",
        text: "Boilers are the backbone of heating in New York City. Tens of thousands of buildings — from prewar apartments to modern high-rises — rely on boilers for heat and hot water. When they work, you barely think about them. When they don't, it's an emergency. The good news: boilers almost always give warning signs before a complete failure.",
      },
      {
        type: "heading",
        text: "1. Strange Noises: Banging, Kettling, or Gurgling",
      },
      {
        type: "paragraph",
        text: "A healthy boiler is relatively quiet. Banging or hammering sounds (called \"water hammer\" in steam systems) usually mean condensate is trapped in the pipes and getting hit by incoming steam. In hot water boilers, a rumbling or kettling sound — like a tea kettle — is caused by mineral scale buildup on the heat exchanger, which traps water and causes it to boil at the surface. Gurgling may indicate air trapped in the system that needs to be bled out.",
      },
      {
        type: "heading",
        text: "2. Uneven Heating Across Rooms or Floors",
      },
      {
        type: "paragraph",
        text: "If some radiators are hot while others are cold, the boiler itself may be fine — but the distribution system has a problem. In steam systems, failed steam traps or clogged air vents are usually the cause. In hot water systems, it could be a failing circulator pump, air locks in the piping, or a zone valve stuck in the closed position. These are all repairable issues, but they won't fix themselves.",
      },
      {
        type: "cta",
        variant: "subtle",
        text: "Uneven heating is one of the most common complaints we hear from NYC building owners. Our boiler techs can diagnose the cause and restore balanced heat — usually in one visit.",
        href: "/services/boiler-furnace-repair",
      },
      {
        type: "heading",
        text: "3. Water Leaks Around the Boiler",
      },
      {
        type: "paragraph",
        text: "Any water pooling around the base of your boiler needs immediate attention. Common sources include a leaking pressure relief valve (which could signal dangerously high pressure), a corroded heat exchanger, a failed expansion tank, or leaking pipe fittings. Even small leaks can cause significant water damage and indicate internal corrosion that will only get worse.",
      },
      {
        type: "heading",
        text: "4. Pressure or Temperature Gauge Readings Are Off",
      },
      {
        type: "paragraph",
        text: "Hot water boilers should typically show 12–18 psi when cold and no more than 30 psi when hot. If the pressure is too low, the system may have a leak or a failed fill valve. If it's too high, the expansion tank may be waterlogged or the relief valve may be malfunctioning. Steam boilers operate at much lower pressures — residential steam should run between 0.5 and 2 psi. Anything higher suggests control problems that need professional attention.",
      },
      {
        type: "callout",
        text: "A boiler operating at high pressure with a malfunctioning relief valve is a safety hazard. If your pressure gauge is in the red zone or the relief valve is constantly dripping, shut the boiler down and call for service immediately.",
      },
      {
        type: "heading",
        text: "5. The Pilot Light or Burner Has Issues",
      },
      {
        type: "paragraph",
        text: "If the burner flame is yellow or orange instead of a steady blue, combustion isn't clean. This can produce carbon monoxide — an odorless, deadly gas. Other ignition issues include the pilot going out repeatedly (common in older boilers with standing pilots), delayed ignition (a loud \"boom\" when the burner lights), or the burner cycling on and off too frequently. All of these need professional diagnosis.",
      },
      {
        type: "heading",
        text: "6. Rising Energy Bills Without a Clear Cause",
      },
      {
        type: "paragraph",
        text: "If your gas or oil bills have been climbing and your usage patterns haven't changed, your boiler may be losing efficiency. Scale buildup, soot accumulation, a failing burner nozzle, or a cracked heat exchanger can all reduce heat transfer and force the boiler to run longer to meet demand. A combustion analysis — which measures flue gas temperature, oxygen levels, and CO — can tell you exactly how efficiently your boiler is burning.",
      },
      {
        type: "cta",
        variant: "subtle",
        text: "Our combustion analysis service measures your boiler's real-world efficiency and identifies where energy is being wasted. It's included in our boiler diagnostic visits.",
        href: "/services/boiler-furnace-repair",
      },
      {
        type: "heading",
        text: "When to Repair vs. Replace",
      },
      {
        type: "paragraph",
        text: "Cast iron boilers can last 30–50 years with proper maintenance. Steel boilers typically last 15–25 years. If your boiler is under 15 years old and the issue is a single component (circulator, control, valve), repair almost always makes sense. If it's over 20 years old, has a cracked heat exchanger, or needs multiple expensive repairs in a short period, replacement with a high-efficiency condensing boiler can cut fuel costs by 15–30% and pay for itself in 5–8 years.",
      },
      {
        type: "cta",
        variant: "card",
        text: "Whether it's a quick repair or time for a new boiler, we'll give you an honest assessment — not a sales pitch. Request a boiler diagnostic today.",
        href: "/#contact",
        buttonText: "Schedule a Boiler Diagnostic",
      },
    ],
  },
];

/* ───────── helpers ───────── */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return articles.slice(0, count);
  // Prefer same category, then fill with others
  const sameCategory = articles.filter(
    (a) => a.category === current.category && a.slug !== slug
  );
  const others = articles.filter(
    (a) => a.category !== current.category && a.slug !== slug
  );
  return [...sameCategory, ...others].slice(0, count);
}
